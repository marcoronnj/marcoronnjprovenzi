export const initialPageLoaderCss = `
.initial-page-loader {
  align-items: center;
  background: #000;
  display: none;
  inset: 0;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  transition:
    opacity 500ms cubic-bezier(0.22, 1, 0.36, 1),
    visibility 500ms cubic-bezier(0.22, 1, 0.36, 1);
  visibility: hidden;
  z-index: 2147483647;
}

.is-external-home-entry .initial-page-loader {
  animation: initial-page-loader-auto-hide 500ms cubic-bezier(0.22, 1, 0.36, 1) 500ms forwards;
  display: flex;
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
}

.initial-page-loader__mark {
  background: #fff;
  border-radius: 1px;
  height: 60px;
  transform: translateZ(0);
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
  width: 60px;
}

.is-external-home-entry .initial-page-loader__mark {
  animation:
    initial-page-loader-spin 1.2s linear infinite,
    initial-page-loader-mark-auto-hide 500ms cubic-bezier(0.22, 1, 0.36, 1) 500ms forwards;
}

.initial-page-loader.is-hidden {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}

.initial-page-loader.is-hidden .initial-page-loader__mark {
  animation: none;
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

@keyframes initial-page-loader-auto-hide {
  to {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
}

@keyframes initial-page-loader-mark-auto-hide {
  to {
    transform: translateZ(0) rotate(180deg) scale(0.92);
  }
}

@media (prefers-reduced-motion: reduce) {
  .is-external-home-entry .initial-page-loader__mark {
    animation: initial-page-loader-mark-auto-hide 1ms linear 999ms forwards;
  }
}
`;

export const initialPageLoaderGateScript = `
(function () {
  try {
    var path = window.location.pathname.replace(/\\/+$/, "");
    var isHome = path === "/it" || path === "/en";
    var referrer = document.referrer;
    var shouldShowLoader = !referrer;

    if (!isHome) {
      return;
    }

    if (referrer) {
      try {
        shouldShowLoader = new URL(referrer).origin !== window.location.origin;
      } catch (error) {
        shouldShowLoader = true;
      }
    }

    if (!shouldShowLoader) {
      return;
    }

    document.documentElement.classList.add("is-external-home-entry");
  } catch (error) {}
})();
`;

export const initialPageLoaderScript = `
(function () {
  var doc = document;
  var win = window;
  var loader = doc.getElementById("initial-page-loader");
  var maxTimer = 0;
  var loaderHidden = false;

  function unlockScroll() {
    doc.documentElement.classList.remove("is-external-home-entry");
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

  maxTimer = win.setTimeout(hideInitialLoader, 500);

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
