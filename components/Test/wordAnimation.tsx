"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * RotatingWords.jsx
 * A smooth, looping word-rotator with per-character vertical animation.
 * Defaults to: ["hardware", "software", "esports"].
 *
 * Setup:
 *   1) npm i framer-motion
 *   2) Drop <RotatingWords /> anywhere in your app.
 *   3) Optional props: `words`, `interval`, `className`, `prefix`, `suffix`.
 */
export default function RotatingWords({
  words = ["hardware", "software", "esports"],
  interval = 2200,
  className = "text-4xl md:text-5xl font-semibold tracking-tight",
  prefix = "",
  suffix = "",
}) {
  const safeWords = useMemo(
    () => (Array.isArray(words) && words.length ? words : ["hardware", "software", "esports"]),
    [words]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeWords.length);
    }, interval);
    return () => clearInterval(id);
  }, [interval, safeWords.length]);

  const currentWord = safeWords[index];
  const characters = currentWord.split("");

  return (
    <div className={"inline-flex items-baseline " + className} aria-live="polite">
      {prefix ? (
        <span className="mr-2 text-balance opacity-80 select-none">{prefix}</span>
      ) : null}

      {/* Animate each character vertically, one after another */}
      <span className="relative inline-flex h-[1em] overflow-hidden align-baseline">
        {characters.map((char, i) => (
          <motion.span
            key={`${currentWord}-${i}-${index}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              delay: i * 0.08,
              type: "spring",
              stiffness: 350,
              damping: 28,
              mass: 0.5,
            }}
            className="inline-block leading-none will-change-transform"
          >
            <GradientText>{char}</GradientText>
          </motion.span>
        ))}
      </span>

      {suffix ? (
        <span className="ml-2 text-balance opacity-80 select-none">{suffix}</span>
      ) : null}
    </div>
  );
}

function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-black font-anton uppercase tracking-wider">
      {children}
    </span>
  );
}

/* Example usage:

  <div className="p-8">
    <RotatingWords prefix="We build" suffix="experiences." />
    // or custom words & speed
    <RotatingWords words={["hardware", "software", "esports"]} interval={2000} />
  </div>

*/
