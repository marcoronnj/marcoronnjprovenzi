"use client";
import React, { useEffect, useRef, useState } from "react";

export default function IntroLoader(): JSX.Element | null {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const cubeRef = useRef<HTMLDivElement | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let tl: any;
    let gsap: any;
    const overlay = overlayRef.current;
    const cube = cubeRef.current;
    if (!overlay || !cube) return;

    // dynamic import to avoid including GSAP in main bundle
    (async () => {
      const mod = await import("gsap");
      gsap = mod.gsap || mod.default || mod;
      tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

      // brief 3D rotation to establish depth
      tl.to(cube, { duration: 1.05, rotateX: 18, rotateY: 36 });

      // flatten cube by collapsing face depth (CSS variable --tz)
      tl.to(cube, { duration: 0.9, "--tz": "0px" as any }, "+=0.08");

      // align and prepare for scale
      tl.to(cube, { duration: 0.6, rotateX: 0, rotateY: 0 }, "-=0.28");

      // scale square rapidly from center while transitioning background to black
      tl.to(cube, { duration: 0.55, scale: 12 }, "-=0.12");
      tl.to(overlay, { duration: 0.45, backgroundColor: "#000" }, "-=0.45");

      // reveal the site by collapsing the black overlay like a curtain
      tl.to(
        overlay,
        {
          duration: 0.85,
          scaleY: 0,
          transformOrigin: "top center",
          onComplete: () => setDone(true)
        },
        "+=0.12"
      );
    })();

    return () => {
      try {
        tl == null ? void 0 : tl.kill();
      } catch (e) {}
    };
  }, []);

  if (done) return null;

  return (
    <div ref={overlayRef} className="intro-loader" style={{ transform: "scaleY(1)" }}>
      <div className="cube-wrap" aria-hidden>
        <div className="cube" ref={cubeRef} style={{ ["--tz"]: "60px" } as React.CSSProperties}>
          <div className="face front" />
          <div className="face back" />
          <div className="face right" />
          <div className="face left" />
          <div className="face top" />
          <div className="face bottom" />
        </div>
        <div className="ground-shadow" />
      </div>
    </div>
  );
}
