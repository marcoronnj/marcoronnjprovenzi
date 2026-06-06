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

.initial-page-loader.is-hidden {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}

.initial-page-loader.is-hidden .initial-page-loader__mark {
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
  var maxTimer = 0;
  var loaderHidden = false;

  function unlockScroll() {
    doc.documentElement.classList.remove("is-initial-page-loading");
    if (doc.body) {
      doc.body.classList.remove("is-initial-page-loading");
      doc.body.classList.remove("is-loading");
    }
  }

  function hideInitialLoader() {
    if (loaderHidden) {
      return;
    }

    loaderHidden = true;
    win.clearTimeout(maxTimer);
    unlockScroll();

    if (!loader) {
      return;
    }

    loader.classList.add("is-hidden");
    win.setTimeout(function () {
      if (loader && loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 500);
  }

  win.addEventListener("load", function () {
    hideInitialLoader();
  }, { once: true });

  maxTimer = win.setTimeout(hideInitialLoader, 1000);

  if (doc.readyState === "complete") {
    hideInitialLoader();
  }
})();
`;

export function InitialPageLoader() {
  return (
    <div id="initial-page-loader" className="initial-page-loader" aria-hidden="true">
      <div className="initial-page-loader__mark" />
    </div>
  );
}
