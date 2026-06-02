"use client";

import { useEffect } from "react";

const WORD_PATTERN = /[A-Za-zÀ-ÖØ-öø-ÿ0-9]+(?:[’'\-][A-Za-zÀ-ÖØ-öø-ÿ0-9]+)*/g;
const CENSOR_DELAY = 1000;
const ROOT_SELECTOR = "main, .site-footer";
const SKIP_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "option",
  "script",
  "style",
  "noscript",
  "svg",
  "canvas",
  ".site-header",
  ".menu-panel",
  ".intro-loader",
  ".hero-title",
  ".hero-reveal",
  ".hero-field",
  ".site-footer__marquee",
  ".crazy-word"
].join(",");

const censorTimers = new Map<HTMLElement, number>();

function clearCensorTimer(word: HTMLElement) {
  const timer = censorTimers.get(word);

  if (timer === undefined) return;

  window.clearTimeout(timer);
  censorTimers.delete(word);
}

function clearAllCensorTimers() {
  censorTimers.forEach((timer) => {
    window.clearTimeout(timer);
  });
  censorTimers.clear();
}

function startCensorTimer(event: MouseEvent) {
  if (!isCrazyModeEnabled() || !(event.currentTarget instanceof HTMLElement)) return;

  const word = event.currentTarget;

  if (word.classList.contains("is-censored") || censorTimers.has(word)) return;

  const timer = window.setTimeout(() => {
    censorTimers.delete(word);

    if (!word.isConnected || !isCrazyModeEnabled()) return;

    word.classList.add("is-censored");
  }, CENSOR_DELAY);

  censorTimers.set(word, timer);
}

function cancelCensorTimer(event: MouseEvent) {
  if (event.currentTarget instanceof HTMLElement) {
    clearCensorTimer(event.currentTarget);
  }
}

function hashText(value: string) {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }

  return Math.abs(hash);
}

function createWordSpan(word: string, seed: number) {
  const span = document.createElement("span");
  const tilt = ((seed % 9) - 4) / 10;
  const shiftY = ((Math.floor(seed / 9) % 7) - 3) / 100;
  const scaleX = 1.04 + (seed % 5) * 0.012;
  const scaleY = 0.88 + (seed % 6) * 0.025;

  span.className = `crazy-word crazy-word--${seed % 6}`;
  span.textContent = word;
  span.style.setProperty("--crazy-word-tilt", `${tilt}deg`);
  span.style.setProperty("--crazy-word-shift-y", `${shiftY}em`);
  span.style.setProperty("--crazy-word-scale-x", String(scaleX));
  span.style.setProperty("--crazy-word-scale-y", String(scaleY));
  span.addEventListener("mouseenter", startCensorTimer);
  span.addEventListener("mouseleave", cancelCensorTimer);

  return span;
}

function shouldSkipNode(node: Node) {
  const parent = node.parentElement;

  return !parent || Boolean(parent.closest(SKIP_SELECTOR));
}

function wrapTextNode(textNode: Text) {
  const text = textNode.nodeValue;

  if (!text || !WORD_PATTERN.test(text)) {
    WORD_PATTERN.lastIndex = 0;
    return;
  }

  WORD_PATTERN.lastIndex = 0;

  const fragment = document.createDocumentFragment();
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = WORD_PATTERN.exec(text))) {
    const [word] = match;
    const start = match.index;
    const end = start + word.length;

    if (start > lastIndex) {
      fragment.append(document.createTextNode(text.slice(lastIndex, start)));
    }

    fragment.append(createWordSpan(word, hashText(`${word}-${start}-${text.length}`)));
    lastIndex = end;
  }

  if (lastIndex < text.length) {
    fragment.append(document.createTextNode(text.slice(lastIndex)));
  }

  textNode.replaceWith(fragment);
}

function wrapWords(root: ParentNode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (shouldSkipNode(node)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const textNodes: Text[] = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text);
  }

  textNodes.forEach(wrapTextNode);
}

function unwrapWords() {
  const roots = document.querySelectorAll(ROOT_SELECTOR);

  clearAllCensorTimers();
  document.querySelectorAll<HTMLSpanElement>(".crazy-word").forEach((word) => {
    word.replaceWith(document.createTextNode(word.textContent ?? ""));
  });

  roots.forEach((root) => {
    if (root instanceof HTMLElement) root.normalize();
  });
}

function isCrazyModeEnabled() {
  return document.body.classList.contains("is-crazy-mode");
}

export function CrazyWordCensor() {
  useEffect(() => {
    let mutationFrame = 0;
    let isMutatingWords = false;

    const wrapAll = () => {
      if (!isCrazyModeEnabled() || isMutatingWords) return;

      isMutatingWords = true;
      document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach(wrapWords);
      isMutatingWords = false;
    };

    const resetAll = () => {
      isMutatingWords = true;
      unwrapWords();
      isMutatingWords = false;
    };

    const scheduleWrap = () => {
      if (!isCrazyModeEnabled() || isMutatingWords) return;

      cancelAnimationFrame(mutationFrame);
      mutationFrame = requestAnimationFrame(wrapAll);
    };

    const bodyObserver = new MutationObserver(() => {
      if (isCrazyModeEnabled()) {
        scheduleWrap();
        return;
      }

      cancelAnimationFrame(mutationFrame);
      resetAll();
    });

    const contentObserver = new MutationObserver(scheduleWrap);

    bodyObserver.observe(document.body, { attributeFilter: ["class"], attributes: true });
    contentObserver.observe(document.body, { childList: true, subtree: true });
    wrapAll();

    return () => {
      cancelAnimationFrame(mutationFrame);
      bodyObserver.disconnect();
      contentObserver.disconnect();
      resetAll();
    };
  }, []);

  return null;
}
