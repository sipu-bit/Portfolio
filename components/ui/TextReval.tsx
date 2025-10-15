"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface TitleAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  lineDelay?: number;
  stagger?: number;
  duration?: number;

  peakShadow?: string;
  midBlur?: number;

  blurStart?: number;
  layer1?: string;
  layer2?: string;
  layer3?: string;

  paddingBottom?: number;
}

const TextReveal: React.FC<TitleAnimationProps> = ({
  text,
  className = "",
  delay = 0,
  lineDelay = 0,
  stagger = 0.08,          
  duration = 0.6,    
  peakShadow,
  midBlur,
  blurStart,
  layer1,
  layer2,
  layer3,
  paddingBottom = 0,
}) => {
  const letters = Array.from(text);

  const layerStack = ([layer1, layer2, layer3].filter(
    (v): v is string => Boolean(v)
  ) as string[]).join(", ");

  const composedPeakShadow =
    peakShadow ??
    (layerStack ||
      "0 28px 40px rgba(0,0,0,0.55), 0 14px 20px rgba(0,0,0,0.40), 0 6px 10px rgba(0,0,0,0.28)");

  const midBlurPx = midBlur ?? blurStart ?? 8;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delay: delay + lineDelay,
        staggerChildren: stagger,
      },
    },
  };

  // sync rise + shadow/blur peak at 50%
  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: "1em",
      color: "rgb(107,114,128)",
      textShadow: "0 0 0 rgba(0,0,0,0)",
      filter: "blur(0px)",
    },
    visible: {
      y: ["1em", "0.25em", "0em"],
      opacity: [0, 1, 1],
      color: ["rgb(107,114,128)", "rgb(107,114,128)", "inherit"],
      textShadow: [
        "0 0 0 rgba(0,0,0,0)",
        composedPeakShadow,
        "0 0 0 rgba(0,0,0,0)",
      ],
      filter: ["blur(0px)", `blur(${midBlurPx}px)`, "blur(0px)"],
      transition: {
        duration,
        ease: "easeOut",
        times: [0, 0.5, 1], // ← peak at 50% makes it feel zippier
      },
    },
  };

  return (
    <motion.span
      className={`inline-block font-bold ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ overflow: "visible", willChange: "filter, transform, opacity" }}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-baseline"
          style={{ paddingBottom }}
        >
          <motion.span
            variants={childVariants}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              transform: "translateZ(0)",
              willChange: "transform, opacity, text-shadow, filter, color",
            }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
