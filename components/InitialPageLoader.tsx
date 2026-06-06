export const initialPageLoaderCss = `
html.is-initial-page-loading,
html.is-initial-page-loading body {
  overflow: hidden;
}

.initial-page-loader {
  align-items: center;
  background: #000;
  display: flex;
  inset: 0;
  justify-content: center;
  opacity: 1;
  pointer-events: auto;
  position: fixed;
  transition:
    opacity 500ms cubic-bezier(0.22, 1, 0.36, 1),
    visibility 500ms cubic-bezier(0.22, 1, 0.36, 1);
  visibility: visible;
  z-index: 2147483647;
}

.initial-page-loader__mark {
  animation: initial-page-loader-spin 1.2s linear infinite;
  background: #fff;
  border-radius: 1px;
  height: 60px;
  transform: translateZ(0);
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
  width: 60px;
}

.initial-page-loader.is-exiting {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}

.initial-page-loader.is-exiting .initial-page-loader__mark {
  animation-play-state: paused;
  transform: translateZ(0) rotate(180deg) scale(0.92);
}

@keyframes initial-page-loader-spin {
  from {
    transform: translateZ(0) rotate(0deg);
  }

  to {
    transform: translateZ(0) rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .initial-page-loader__mark {
    animation: none;
  }
}
`;

export const initialPageLoaderScript = `
(function () {
  var doc = document;
  var win = window;
  var loader = doc.getElementById("initial-page-loader");
  var exitTimer = 0;
  var removeTimer = 0;
  var watchdogTimer = 0;
  var removed = false;
  var exiting = false;

  function unlockScroll() {
    doc.documentElement.classList.remove("is-initial-page-loading");
    if (doc.body) {
      doc.body.classList.remove("is-initial-page-loading");
    }
  }

  function removeLoader() {
    if (removed) {
      return;
    }

    removed = true;
    win.clearTimeout(exitTimer);
    win.clearTimeout(removeTimer);
    win.clearTimeout(watchdogTimer);
    unlockScroll();

    if (loader && loader.parentNode) {
      loader.parentNode.removeChild(loader);
    }
  }

  function exitLoader() {
    if (exiting) {
      return;
    }

    exiting = true;

    if (!loader) {
      removeLoader();
      return;
    }

    loader.classList.add("is-exiting");
    unlockScroll();
    loader.addEventListener("transitionend", removeLoader, { once: true });
    removeTimer = win.setTimeout(removeLoader, 700);
  }

  function scheduleExit(delay) {
    win.clearTimeout(exitTimer);
    exitTimer = win.setTimeout(function () {
      win.requestAnimationFrame(exitLoader);
    }, delay);
  }

  if (doc.readyState === "complete") {
    scheduleExit(0);
    return;
  }

  if (doc.readyState === "interactive") {
    scheduleExit(900);
  } else {
    doc.addEventListener("DOMContentLoaded", function () {
      scheduleExit(900);
    }, { once: true });
  }

  win.addEventListener("load", function () {
    scheduleExit(0);
  }, { once: true });

  win.addEventListener("pageshow", function () {
    if (doc.readyState === "complete") {
      scheduleExit(0);
    }
  }, { once: true });

  watchdogTimer = win.setTimeout(function () {
    scheduleExit(0);
  }, 3500);
})();
`;

export function InitialPageLoader() {
  return (
    <div id="initial-page-loader" className="initial-page-loader" aria-hidden="true">
      <div className="initial-page-loader__mark" />
    </div>
  );
}
