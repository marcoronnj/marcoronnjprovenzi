"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

type MenuProps = {
  lang: Lang;
  nav: string[];
  switchLabel?: string;
};

export function Menu({ lang, nav }: MenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isFooterActive, setIsFooterActive] = useState(false);
  const [crazyMode, setCrazyMode] = useState(false);
  const sections = ["about", "services", "projects", "contact"];
  const isHomePage = pathname === `/${lang}`;
  const sectionHref = (section: string) => (isHomePage ? `#${section}` : `/${lang}#${section}`);
  const navHref = (section: string) => {
    if (section === "about") return `/${lang}/about`;
    if (section === "services") return `/${lang}/services`;
    if (section === "projects") return `/${lang}/selected-works`;
    if (section === "contact") return `/${lang}/contact`;
    return sectionHref(section);
  };
  const languageHref = (targetLang: Lang) => {
    const segments = pathname.split("/");

    if (segments[1] === "it" || segments[1] === "en") {
      segments[1] = targetLang;
      return segments.join("/") || `/${targetLang}`;
    }

    return `/${targetLang}`;
  };
  const preserveScrollPosition = () => {
    window.sessionStorage.setItem("preserve-scroll-y", String(window.scrollY));
  };
  const updateCrazyMode = (enabled: boolean) => {
    const scrollY = window.scrollY;

    document.documentElement.classList.toggle("is-crazy-mode", enabled);
    document.body.classList.toggle("is-crazy-mode", enabled);
    window.localStorage.setItem("crazy-mode", enabled ? "on" : "off");
    setCrazyMode(enabled);

    window.requestAnimationFrame(() => {
      window.scrollTo({ behavior: "auto", left: 0, top: scrollY });
    });
  };

  useEffect(() => {
    const storedPreference = window.localStorage.getItem("crazy-mode");

    if (storedPreference === "on") {
      setCrazyMode(true);
      document.documentElement.classList.add("is-crazy-mode");
      document.body.classList.add("is-crazy-mode");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("is-crazy-mode", crazyMode);
    document.body.classList.toggle("is-crazy-mode", crazyMode);
    window.localStorage.setItem("crazy-mode", crazyMode ? "on" : "off");
  }, [crazyMode]);

  useEffect(() => {
    let frame = 0;

    const parseColor = (value: string) => {
      const match = value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);

      if (!match) return null;

      const [, red, green, blue, alpha = "1"] = match;
      return {
        alpha: Number(alpha),
        blue: Number(blue),
        green: Number(green),
        red: Number(red)
      };
    };

    const isDarkColor = (value: string) => {
      const color = parseColor(value);

      if (!color || color.alpha < 0.2) {
        return false;
      }

      const luminance = (0.2126 * color.red + 0.7152 * color.green + 0.0722 * color.blue) / 255;
      return luminance < 0.28;
    };

    const updateTheme = () => {
      const header = document.querySelector<HTMLElement>(".site-header");
      const sectionsOnPage = Array.from(document.querySelectorAll<HTMLElement>("main > section, .site-footer"));

      if (!header || sectionsOnPage.length === 0) {
        setIsDark(false);
        setIsFooterActive(false);
        return;
      }

      const headerHeight = header.getBoundingClientRect().height;
      const sampleY = Math.max(1, Math.round(headerHeight / 2));
      const activeSection = sectionsOnPage.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= sampleY && rect.bottom > sampleY;
      });

      if (!activeSection) {
        setIsDark(false);
        setIsFooterActive(false);
        return;
      }

      setIsFooterActive(activeSection.classList.contains("site-footer"));
      setIsDark(isDarkColor(window.getComputedStyle(activeSection).backgroundColor));
    };

    const scheduleThemeUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateTheme);
    };

    updateTheme();
    window.addEventListener("scroll", scheduleThemeUpdate, { passive: true });
    window.addEventListener("resize", scheduleThemeUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleThemeUpdate);
      window.removeEventListener("resize", scheduleThemeUpdate);
    };
  }, []);

  return (
    <>
      <header className={`site-header ${isDark ? "is-dark" : ""} ${isFooterActive ? "is-hidden" : ""}`}>
        <Link href={`/${lang}`} className="brand" aria-label="Marco Ronnj Provenzi">
          <span aria-hidden="true" />
          <strong>MARCO RONNJ PROVENZI</strong>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item, index) => (
            <a href={navHref(sections[index])} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="header-control language-toggle" aria-label="Language selector">
            <span>Lang:</span>
            <div className="pill-toggle">
              <Link
                className={`pill-toggle__option ${lang === "it" ? "is-active" : ""}`}
                href={languageHref("it")}
                onClick={preserveScrollPosition}
                scroll={false}
              >
                IT
              </Link>
              <Link
                className={`pill-toggle__option ${lang === "en" ? "is-active" : ""}`}
                href={languageHref("en")}
                onClick={preserveScrollPosition}
                scroll={false}
              >
                EN
              </Link>
            </div>
          </div>
          <div className="header-control crazy-toggle" aria-label="Crazy mode">
            <span>Crazy Mode:</span>
            <div className="pill-toggle">
              <button
                className={`pill-toggle__option ${crazyMode ? "is-active" : ""}`}
                onClick={() => updateCrazyMode(true)}
                type="button"
              >
                On
              </button>
              <button
                className={`pill-toggle__option ${!crazyMode ? "is-active" : ""}`}
                onClick={() => updateCrazyMode(false)}
                type="button"
              >
                Off
              </button>
            </div>
          </div>
        </div>
        <button className="menu-button" onClick={() => setOpen(true)} aria-expanded={open}>
          Menu
        </button>
      </header>

      <div className={`menu-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="menu-panel__top">
          <Link href={`/${lang}`} className="menu-panel__brand" onClick={() => setOpen(false)}>
            <span aria-hidden="true" />
            <strong>MARCO RONNJ PROVENZI</strong>
          </Link>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
        <div className="menu-panel__links">
          {nav.map((item, index) => (
            <a href={navHref(sections[index])} key={item} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {item}
            </a>
          ))}
        </div>
        <div className="menu-panel__controls">
          <div className="menu-panel__control" aria-label="Language selector">
            <span>Lang:</span>
            <div className="pill-toggle">
              <Link
                className={`pill-toggle__option ${lang === "it" ? "is-active" : ""}`}
                href={languageHref("it")}
                onClick={() => {
                  preserveScrollPosition();
                  setOpen(false);
                }}
                scroll={false}
              >
                IT
              </Link>
              <Link
                className={`pill-toggle__option ${lang === "en" ? "is-active" : ""}`}
                href={languageHref("en")}
                onClick={() => {
                  preserveScrollPosition();
                  setOpen(false);
                }}
                scroll={false}
              >
                EN
              </Link>
            </div>
          </div>
          <div className="menu-panel__control" aria-label="Crazy mode">
            <span>Crazy Mode:</span>
            <div className="pill-toggle">
              <button
                className={`pill-toggle__option ${crazyMode ? "is-active" : ""}`}
                onClick={() => updateCrazyMode(true)}
                type="button"
              >
                On
              </button>
              <button
                className={`pill-toggle__option ${!crazyMode ? "is-active" : ""}`}
                onClick={() => updateCrazyMode(false)}
                type="button"
              >
                Off
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
