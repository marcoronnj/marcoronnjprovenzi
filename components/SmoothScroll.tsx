"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const SNAP_SELECTOR = "[data-snap-section]";
const SNAP_IDLE_DELAY = 90;
const SNAP_DURATION = 0.64;
const SNAP_TRIGGER_RATIO = 0.14;

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 });
    let frame = 0;
    let snapTimer: number | null = null;
    let isSnapping = false;
    let isRestoringScroll = false;
    let lastScrollY = window.scrollY;
    let scrollDirection: -1 | 1 = 1;

    const getSnapTarget = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>(SNAP_SELECTOR));
      const viewportHeight = window.innerHeight;
      const currentScroll = window.scrollY;
      const snapRange = viewportHeight * 0.78;
      const triggerDistance = viewportHeight * SNAP_TRIGGER_RATIO;
      const maxScroll = document.documentElement.scrollHeight - viewportHeight;

      const points = sections.map((section) => {
        const rect = section.getBoundingClientRect();
        const top = Math.round(rect.top + currentScroll);
        const height = Math.round(rect.height);
        const bottom = top + height;

        return { bottom, height, top };
      });

      const activeIndex = points.findIndex(
        (point) => currentScroll >= point.top - 2 && currentScroll < point.bottom - 2
      );

      if (activeIndex >= 0) {
        const active = points[activeIndex];
        const offset = currentScroll - active.top;
        const isFullFrame = active.height <= viewportHeight * 1.28;

        if (isFullFrame && scrollDirection > 0 && offset > triggerDistance) {
          const next = points[Math.min(activeIndex + 1, points.length - 1)];
          return { top: Math.min(next.top, maxScroll), distance: Math.abs(next.top - currentScroll) };
        }

        if (isFullFrame && scrollDirection < 0 && offset < active.height - triggerDistance) {
          return { top: Math.min(active.top, maxScroll), distance: Math.abs(active.top - currentScroll) };
        }
      }

      return points.reduce<{ top: number; distance: number } | null>((closest, point) => {
        const top = Math.min(point.top, maxScroll);
        const distance = Math.abs(top - currentScroll);

        if (distance > snapRange) {
          return closest;
        }

        if (!closest || distance < closest.distance) {
          return { top, distance };
        }

        return closest;
      }, null);
    };

    const snapToSection = () => {
      if (isSnapping || isRestoringScroll || document.body.classList.contains("is-holding-hero")) {
        return;
      }

      const target = getSnapTarget();

      if (!target || target.distance < 2) {
        return;
      }

      isSnapping = true;
      lenis.scrollTo(target.top, {
        duration: SNAP_DURATION,
        easing: (time) => 1 - Math.pow(1 - time, 3),
        onComplete: () => {
          isSnapping = false;
        }
      });

      window.setTimeout(() => {
        isSnapping = false;
      }, SNAP_DURATION * 1000 + 120);
    };

    const scheduleSnap = () => {
      if (isSnapping || isRestoringScroll) {
        return;
      }

      if (snapTimer) {
        window.clearTimeout(snapTimer);
      }

      snapTimer = window.setTimeout(snapToSection, SNAP_IDLE_DELAY);
    };

    lenis.on("scroll", () => {
      const nextScrollY = window.scrollY;

      if (Math.abs(nextScrollY - lastScrollY) > 1) {
        scrollDirection = nextScrollY > lastScrollY ? 1 : -1;
        lastScrollY = nextScrollY;
      }

      scheduleSnap();
    });

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    const restoreScrollPosition = () => {
      const storedScrollY = window.sessionStorage.getItem("preserve-scroll-y");

      if (!storedScrollY) {
        return;
      }

      const top = Number(storedScrollY);

      window.sessionStorage.removeItem("preserve-scroll-y");

      if (!Number.isFinite(top)) {
        return;
      }

      isRestoringScroll = true;

      requestAnimationFrame(() => {
        lenis.scrollTo(top, { immediate: true });
        window.scrollTo({ behavior: "auto", left: 0, top });
        lastScrollY = window.scrollY;
      });

      window.setTimeout(() => {
        isRestoringScroll = false;
        lastScrollY = window.scrollY;
      }, 360);
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
      if (snapTimer) {
        window.clearTimeout(snapTimer);
      }

      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
