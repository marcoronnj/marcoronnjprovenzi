"use client";

import { useEffect } from "react";

type IubendaWindow = Window & {
  _iub?: {
    csConfiguration?: Record<string, unknown>;
  };
};

// Module-level flag — survives re-renders and re-mounts. React Strict Mode
// double-invokes effects in development, but this flag prevents any re-execution.
let bootstrapped = false;

export function IubendaLoader() {
  useEffect(() => {
    if (bootstrapped) return;
    bootstrapped = true;

    const iubendaWindow = window as IubendaWindow;
    const hostname = window.location.hostname;
    const consentDomain = hostname.endsWith("marcoronnjprovenzi.com")
      ? "marcoronnjprovenzi.com"
      : undefined;

    iubendaWindow._iub = iubendaWindow._iub || {};
    iubendaWindow._iub.csConfiguration = {
      ...iubendaWindow._iub.csConfiguration,
      askConsentAtCookiePolicyUpdate: false,
      invalidateConsentWithoutLog: false,
      localConsentPath: "/",
      ...(consentDomain ? { localConsentDomain: consentDomain } : {})
    };

    // Inject GTM scripts as Iubenda-blocked stubs (type="text/plain").
    // Placed via imperative DOM calls so React never reconciles or resets them.
    if (!document.querySelector("._iub_cs_activate[suppressedsrc]")) {
      const gtmExternal = document.createElement("script");
      gtmExternal.className = "_iub_cs_activate";
      gtmExternal.type = "text/plain";
      gtmExternal.async = true;
      gtmExternal.setAttribute(
        "suppressedsrc",
        "https://www.googletagmanager.com/gtag/js?id=G-MXP5SGC7PN"
      );
      document.head.appendChild(gtmExternal);
    }

    if (!document.querySelector("._iub_cs_activate-inline")) {
      const gtmInline = document.createElement("script");
      gtmInline.className = "_iub_cs_activate-inline";
      gtmInline.type = "text/plain";
      gtmInline.textContent =
        "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-MXP5SGC7PN',{allow_linker:false,url_passthrough:false});";
      document.head.appendChild(gtmInline);
    }

    // Inject the Iubenda Cookie Solution widget.
    if (!document.getElementById("iubenda-cs")) {
      const cs = document.createElement("script");
      cs.id = "iubenda-cs";
      cs.src =
        "https://embeds.iubenda.com/widgets/71a333f7-4a3b-45d7-a3e5-572e0454438c.js";
      document.head.appendChild(cs);
    }
  }, []);

  return null;
}
