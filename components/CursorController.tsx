"use client";

import { useEffect } from "react";

const interactiveSelector = "a, button, [data-cursor]";
const cursorClasses = ["has-custom-cursor", "is-link-hover", "is-cursor-next", "is-cursor-prev"];

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

    const setCursorState = (element: HTMLElement) => {
      const cursorType = element.dataset.cursor?.toLowerCase() ?? "";

      document.body.classList.add("is-link-hover");
      document.body.classList.toggle("is-cursor-next", cursorType.includes("next"));
      document.body.classList.toggle("is-cursor-prev", cursorType.includes("prev"));
    };

    const updateCursorTarget = (x: number, y: number) => {
      const target = document.elementFromPoint(x, y)?.closest<HTMLElement>(interactiveSelector);

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
      document.body.classList.remove("has-custom-cursor");
      document.body.style.removeProperty("--cursor-x");
      document.body.style.removeProperty("--cursor-y");
      resetCursorState();
    };
  }, []);

  return null;
}
