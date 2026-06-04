"use client";

import { useEffect } from "react";

const interactiveSelector = "a, button, [data-cursor]";
const iubendaGeneratedSelector = [
  "#iubenda-cs-banner",
  "#iubenda-pp-popup",
  "#iubenda-pp-content",
  "[id^='iubenda-iframe']",
  ".iubenda-iframe",
  ".iubenda-modal",
  ".iubenda-modal-overlay",
  ".iubenda-cs-preferences",
  ".iubenda-cs-preferences-overlay",
  ".iubenda-tp-alert"
].join(", ");
const cursorClasses = [
  "has-custom-cursor",
  "is-link-hover",
  "is-cursor-next",
  "is-cursor-prev",
  "is-iubenda-hover"
];

function isTouchDevice() {
  if (typeof window === "undefined") return true;

  return (
    window.matchMedia("(pointer: coarse)").matches ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
  );
}

export function CursorController() {
  useEffect(() => {
    if (isTouchDevice()) {
      document.documentElement.classList.remove("has-custom-cursor");
      document.body.classList.remove(...cursorClasses);
      document.body.style.removeProperty("--cursor-x");
      document.body.style.removeProperty("--cursor-y");
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");
    document.body.classList.add("has-custom-cursor");

    const resetCursorState = () => {
      document.body.classList.remove("is-link-hover", "is-cursor-next", "is-cursor-prev");
    };

    const setIubendaCursorState = (isIubendaHover: boolean) => {
      document.body.classList.toggle("is-iubenda-hover", isIubendaHover);
      if (isIubendaHover) resetCursorState();
    };

    const setCursorState = (element: HTMLElement) => {
      const cursorType = element.dataset.cursor?.toLowerCase() ?? "";

      document.body.classList.remove("is-iubenda-hover");
      document.body.classList.add("is-link-hover");
      document.body.classList.toggle("is-cursor-next", cursorType.includes("next"));
      document.body.classList.toggle("is-cursor-prev", cursorType.includes("prev"));
    };

    const updateCursorTarget = (x: number, y: number) => {
      const element = document.elementFromPoint(x, y);
      const isIubendaHover = Boolean(element?.closest(iubendaGeneratedSelector));

      setIubendaCursorState(isIubendaHover);
      if (isIubendaHover) return;

      const target = element?.closest<HTMLElement>(interactiveSelector);

      if (target) {
        setCursorState(target);
        return;
      }

      resetCursorState();
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.body.style.setProperty("--cursor-y", `${event.clientY}px`);
      updateCursorTarget(event.clientX, event.clientY);
    };

    const over = (event: PointerEvent) => {
      const isIubendaHover = event.target instanceof Element
        ? Boolean(event.target.closest(iubendaGeneratedSelector))
        : false;

      setIubendaCursorState(isIubendaHover);
      if (isIubendaHover) return;

      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>(interactiveSelector)
        : null;

      if (target) setCursorState(target);
    };

    const out = (event: PointerEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>(interactiveSelector)
        : null;
      const relatedTarget = event.relatedTarget instanceof Element
        ? event.relatedTarget.closest<HTMLElement>(interactiveSelector)
        : null;

      if (target && target === relatedTarget) return;
      document.body.classList.remove("is-iubenda-hover");
      resetCursorState();
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
      document.documentElement.classList.remove("has-custom-cursor");
      document.body.classList.remove("has-custom-cursor", "is-iubenda-hover");
      document.body.style.removeProperty("--cursor-x");
      document.body.style.removeProperty("--cursor-y");
      resetCursorState();
    };
  }, []);

  return null;
}
