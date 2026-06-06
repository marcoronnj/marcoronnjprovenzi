"use client";

import { useEffect, useState } from "react";

const TEXT = "MARCO RONNJ PROVENZI";

export function PageLoader() {
  const [show, setShow] = useState(false);
  const [textFading, setTextFading] = useState(false);
  const [overlayFading, setOverlayFading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("loader-shown")) return;
    sessionStorage.setItem("loader-shown", "1");
    setShow(true);

    const t1 = setTimeout(() => setTextFading(true), 1000);
    const t2 = setTimeout(() => setOverlayFading(true), 1300);
    const t3 = setTimeout(() => setShow(false), 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!show) return null;

  return (
    <>
      <style>{`
        @keyframes pl-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pl-letter-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#050505",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          transition: "opacity 200ms linear",
          opacity: overlayFading ? 0 : 1,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 1,
            background: "#ffffff",
            flexShrink: 0,
            animation: "pl-spin 1s linear infinite",
          }}
        />
        <div
          style={{
            display: "flex",
            transition: "opacity 300ms linear",
            opacity: textFading ? 0 : 1,
          }}
        >
          {TEXT.split("").map((char, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--sans, "host-grotesk", Arial, sans-serif)',
                fontSize: "14px",
                color: "#ffffff",
                letterSpacing: 0,
                display: "inline-block",
                whiteSpace: "pre",
                opacity: 0,
                animation: `pl-letter-in 200ms ${i * 40}ms linear forwards`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
