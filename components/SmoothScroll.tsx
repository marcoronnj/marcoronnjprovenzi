"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Scroll to top on every client-side route change (Next.js Link navigation).
  // The language switch is the only case that intentionally preserves position via sessionStorage.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (!window.sessionStorage.getItem("preserve-scroll-y")) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  useEffect(() => {
    // Prevent the browser from restoring a cached scroll position when the user
    // navigates forward or backward — we manage scroll position ourselves.
    history.scrollRestoration = "manual";

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 });
    lenisRef.current = lenis;
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    const restoreScrollPosition = () => {
      const storedScrollY = window.sessionStorage.getItem("preserve-scroll-y");

      if (!storedScrollY) {
        lenis.scrollTo(0, { immediate: true });
        return;
      }

      const top = Number(storedScrollY);
      window.sessionStorage.removeItem("preserve-scroll-y");

      if (!Number.isFinite(top)) {
        return;
      }

      requestAnimationFrame(() => {
        lenis.scrollTo(top, { immediate: true });
        window.scrollTo({ behavior: "auto", left: 0, top });
      });
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");

      if (!link) {
        return;
      }

      const url = new URL(link.href);

      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) {
        return;
      }

      const section = document.querySelector<HTMLElement>(url.hash);

      if (!section) {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", url.hash);
      lenis.scrollTo(section, {
        duration: 0.92,
        easing: (time) => 1 - Math.pow(1 - time, 3)
      });
    };

    document.addEventListener("click", handleAnchorClick);
    frame = requestAnimationFrame(raf);
    restoreScrollPosition();

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(frame);
      lenisRef.current = null;
      lenis.destroy();
    };
  }, []);

  return null;
}
