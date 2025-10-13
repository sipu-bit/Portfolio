"use client";
import React from "react";

export default function MovingButton() {
  const customCss = `
    /* Define a smoothly animatable custom property */
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    /* Rotate the angle for shimmer animation */
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  return (
    <div className="flex items-center justify-center font-sans">
      <style>{customCss}</style>

      <button
        className="relative inline-flex items-center justify-center p-[1.5px] rounded-md overflow-hidden group"
      >
        {/* Animated conic gradient border */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from var(--angle), transparent 25%, #06b6d4, transparent 50%)",
            animation: "shimmer-spin 2.5s linear infinite",
          }}
        />

        {/* Button inner content */}
        <span className="relative z-10 inline-flex items-center justify-center px-8 py-2 text-gray-100 dark:text-white bg-[#024038] dark:bg-gray-900 rounded-md group-hover:bg-[#3e3e3e] dark:group-hover:bg-gray-800 transition-colors duration-300">
          Contact Me
        </span>
      </button>
    </div>
  );
}
