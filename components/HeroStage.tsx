"use client";

import { useEffect, useMemo, useState } from "react";

type HeroStageProps = {
  kicker: string;
  line: string;
  cta: string;
  alt: string;
  altMobile: string;
  holdPrompt: string;
  revealPhrase: string;
};

const heroLines = ["WEB DESIGNER", "FREELANCE", "CREATIVE WEB", "DEVELOPER"];
const sourceLetters = heroLines.join("").replace(/\s/g, "").split("");
const backgroundLetters = ["C", "E", "F", "G", "L", "N", "P", "R", "V", "W"];
const backgroundCellCount = 24;
const initialBackgroundSlots = [1, 4, 7, 9, 12, 15, 17, 20, 22, 24];
const initialBackgroundRotations = [-7, 4, -3, 6, -5, 5, -6, 3, -4, 7];

function sourcePosition(sourceIndex: number) {
  return {
    x: `${((sourceIndex % 12) - 5.5) * 7}vw`,
    y: `${(Math.floor(sourceIndex / 12) - 1.5) * 14}vh`,
    rotation: `${((sourceIndex % 7) - 3) * 5}deg`
  };
}

function shuffle<T>(items: T[]) {
  const next = [...items];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

function createBackgroundLayout() {
  const slots = shuffle(Array.from({ length: backgroundCellCount }, (_, index) => index));

  return shuffle(backgroundLetters).map((char, index) => ({
    char,
    index,
    slot: slots[index],
    column: (slots[index] % 8) + 1,
    row: Math.floor(slots[index] / 8) + 1,
    offsetX: `${-10 + Math.random() * 20}%`,
    offsetY: `${-12 + Math.random() * 24}%`,
    rotation: `${-8 + Math.random() * 16}deg`,
    delay: `${index * 18}ms`
  }));
}

function createInitialBackgroundLayout() {
  return backgroundLetters.map((char, index) => {
    const slot = initialBackgroundSlots[index] - 1;

    return {
      char,
      index,
      slot,
      column: (slot % 8) + 1,
      row: Math.floor(slot / 8) + 1,
      offsetX: `${[-7, 4, -5, 8, -2, 6, -8, 3, -4, 7][index]}%`,
      offsetY: `${[8, -6, 5, -8, 3, -5, 7, -4, 6, -7][index]}%`,
      rotation: `${initialBackgroundRotations[index]}deg`,
      delay: `${index * 18}ms`
    };
  });
}

export function HeroStage({
  kicker,
  line,
  cta,
  alt,
  altMobile,
  holdPrompt,
  revealPhrase
}: HeroStageProps) {
  const [pressed, setPressed] = useState(false);
  const [complete, setComplete] = useState(false);
  const [backgroundLayout, setBackgroundLayout] = useState(createInitialBackgroundLayout);
  const [holdProgress, setHoldProgress] = useState(0);
  const progress = Math.round(holdProgress);

  const revealLayout = useMemo(() => {
    const queues = sourceLetters.reduce<Record<string, number[]>>((acc, char, index) => {
      acc[char] = acc[char] ?? [];
      acc[char].push(index);
      return acc;
    }, {});

    const used = new Set<number>();

    function takeSourceIndex(char: string) {
      const exact = queues[char]?.find((sourceIndex) => !used.has(sourceIndex));
      if (exact !== undefined) {
        used.add(exact);
        return exact;
      }

      const fallback = sourceLetters.findIndex((_, sourceIndex) => !used.has(sourceIndex));
      const sourceIndex = fallback === -1 ? 0 : fallback;
      used.add(sourceIndex);
      return sourceIndex;
    }

    let letterIndex = 0;
    const phrase = revealPhrase
      .toUpperCase()
      .split("|")
      .map((line, lineIndex) => ({
        lineIndex,
        letters: line.split("").map((char) => {
          const index = letterIndex++;
          const upper = char.toUpperCase();
          const sourceIndex = char === " " ? -1 : takeSourceIndex(upper);
          const position = sourceIndex === -1 ? null : sourcePosition(sourceIndex);

          return {
            char,
            index,
            isSpace: char === " ",
            sourceIndex,
            sourceChar: sourceIndex === -1 ? char : sourceLetters[sourceIndex],
            position
          };
        })
      }));

    return { phrase, unused: backgroundLayout };
  }, [backgroundLayout, revealPhrase]);

  const fieldLines = useMemo(() => {
    return Array.from({ length: 13 }, (_, index) => {
      const x = (index / 12) * 100;
      const wobbleA = index % 2 === 0 ? 0.35 : -0.28;
      const wobbleB = index % 3 === 0 ? -0.42 : 0.31;
      const wobbleC = index % 4 === 0 ? 0.22 : -0.18;

      return {
        d: `M ${x.toFixed(2)} 0 L ${x.toFixed(2)} 100`,
        handD: [
          `M ${(x + wobbleA).toFixed(2)} 0`,
          `C ${(x + wobbleB).toFixed(2)} 15 ${(x + wobbleC).toFixed(2)} 22 ${(x - wobbleA).toFixed(2)} 35`,
          `S ${(x + wobbleB).toFixed(2)} 58 ${(x + wobbleA).toFixed(2)} 70`,
          `S ${(x + wobbleC).toFixed(2)} 92 ${(x - wobbleB).toFixed(2)} 100`
        ].join(" "),
        key: `v-${index}`,
        opacity: 0.3
      };
    });
  }, []);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        setPressed(true);
      }
    };
    const up = (event: KeyboardEvent) => {
      if (event.code === "Space") stopHold();
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  function trackHeroPointer(event: React.PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--hero-shadow-x", `${x}%`);
    event.currentTarget.style.setProperty("--hero-shadow-y", `${y}%`);
  }

  useEffect(() => {
    document.body.classList.toggle("is-holding-hero", pressed);
    return () => document.body.classList.remove("is-holding-hero");
  }, [pressed]);

  useEffect(() => {
    let frame = 0;
    let previous = performance.now();

    const tick = (time: number) => {
      const delta = time - previous;
      previous = time;

      setHoldProgress((value) => {
        if (complete) return 100;

        if (pressed) {
          const next = Math.min(100, value + delta / 24);
          if (next >= 100) setComplete(true);
          return next;
        }

        return Math.max(0, value - delta / 10);
      });

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [complete, pressed]);

  function startHold() {
    if (!pressed) {
      setBackgroundLayout(createBackgroundLayout());
    }
    setPressed(true);
  }

  function stopHold() {
    setPressed(false);
    setComplete(false);
    setHoldProgress(0);
  }

  function renderLine(text: string) {
    return text.split("").map((char, index) => (
      <span
        className="hero-title__char"
        key={`${text}-${index}`}
        style={
          {
            "--char-i": index,
            "--char-x": `${(index - 8) * 5}px`,
            "--char-y": `${(index % 5) * -7}px`,
            "--char-rot": `${(index - 9) * 2}deg`,
            "--char-vibrate-delay": `${index * -8}ms`,
            "--char-scatter-delay": `${index * 13}ms`
          } as React.CSSProperties
        }
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }

  return (
    <section
      className={`hero ${pressed ? "is-pressed" : ""} ${complete ? "is-complete" : ""}`}
      data-snap-section
      onPointerDown={startHold}
      onPointerCancel={stopHold}
      onPointerLeave={stopHold}
      onPointerMove={trackHeroPointer}
      onPointerUp={stopHold}
      style={
        {
          "--hold-progress": holdProgress,
          "--hold-scale": holdProgress / 100,
          "--shake-x-a": `${holdProgress * 0.012}px`,
          "--shake-y-a": `${holdProgress * -0.01}px`,
          "--shake-r-a": `${holdProgress * -0.012}deg`,
          "--shake-x-b": `${holdProgress * -0.015}px`,
          "--shake-y-b": `${holdProgress * 0.013}px`,
          "--shake-r-b": `${holdProgress * 0.014}deg`,
          "--shake-x-c": `${holdProgress * 0.01}px`,
          "--shake-y-c": `${holdProgress * 0.008}px`,
          "--shake-r-c": `${holdProgress * -0.01}deg`,
          "--wild-x-a": `${holdProgress * 0.04}px`,
          "--wild-y-a": `${holdProgress * -0.035}px`,
          "--wild-r-a": `${holdProgress * -0.032}deg`,
          "--wild-x-b": `${holdProgress * -0.05}px`,
          "--wild-y-b": `${holdProgress * 0.04}px`,
          "--wild-r-b": `${holdProgress * 0.04}deg`,
          "--wild-x-c": `${holdProgress * 0.035}px`,
          "--wild-y-c": `${holdProgress * 0.03}px`,
          "--wild-r-c": `${holdProgress * -0.036}deg`
        } as React.CSSProperties
      }
    >
      <div className="hero-field-wrap" aria-hidden="true">
        <svg className="hero-field" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">
          {fieldLines.map((fieldLine) => (
            <g key={fieldLine.key}>
              <path
                className="hero-field__line hero-field__line--straight"
                d={fieldLine.d}
                pathLength={100}
                style={{ "--line-opacity": fieldLine.opacity } as React.CSSProperties}
              />
              <path
                className="hero-field__line hero-field__line--hand"
                d={fieldLine.handD}
                pathLength={100}
                style={{ "--line-opacity": fieldLine.opacity } as React.CSSProperties}
              />
            </g>
          ))}
        </svg>
      </div>
      <div className="hero__meta">
        <p>(Independent)</p>
        <p>{kicker}</p>
        <p>(Bergamo / Worldwide)</p>
      </div>
      <h1 className="hero-title" aria-label="Web designer freelance and creative web developer">
        {heroLines.map((heroLine) => (
          <span className="hero-title__line" key={heroLine}>
            {renderLine(heroLine)}
          </span>
        ))}
      </h1>
      <div className="hero-reveal" aria-hidden={!complete}>
        <div className="hero-reveal__background" aria-hidden="true">
          {revealLayout.unused.map(({ char, index, column, row, offsetX, offsetY, rotation, delay }) => (
            <span
              className="hero-reveal__unused"
              key={`unused-${char}-${index}`}
              style={
                {
                  "--unused-column": column,
                  "--unused-row": row,
                  "--unused-offset-x": offsetX,
                  "--unused-offset-y": offsetY,
                  "--unused-rot": rotation,
                  "--unused-delay": delay
                } as React.CSSProperties
              }
            >
              {char}
            </span>
          ))}
        </div>
        <div className="hero-reveal__phrase">
          {revealLayout.phrase.map(({ lineIndex, letters }) => (
            <span className="hero-reveal__line" key={`line-${lineIndex}`}>
              {letters.map(({ char, index, isSpace, position }) => (
                <span
                  className={`hero-reveal__char ${isSpace ? "is-space" : ""}`}
                  key={`${char}-${index}`}
                  style={
                    {
                      "--reveal-i": index,
                      "--reveal-delay": `${index * 9}ms`,
                      "--reveal-from-x": position?.x ?? "0vw",
                      "--reveal-from-y": position?.y ?? "0vh",
                      "--reveal-from-rot": position?.rotation ?? "0deg"
                    } as React.CSSProperties
                  }
                >
                  {isSpace ? "\u00A0" : char}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      <div className="hold-meter" aria-hidden={!pressed && progress === 0}>
        <span>{holdPrompt}</span>
        <strong>{progress}%</strong>
        <div>
          <i />
        </div>
      </div>
      <div className="hero__bottom">
        <p>{line}</p>
        <span />
        <span className="hero__hint hero__hint--desktop">{alt}</span>
        <span className="hero__hint hero__hint--mobile">{altMobile}</span>
      </div>
    </section>
  );
}
