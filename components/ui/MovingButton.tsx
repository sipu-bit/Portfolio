'use client';
import React from 'react';

interface ButtonProps {
  text: string;
  className?: string; // optional className
}

export default function HoverButton({ text, className = '' }: ButtonProps) {
  return (
    <button
      className={`group relative cursor-pointer overflow-hidden border-2 border-[#4F0273] text-[#fff] font-medium rounded-md w-32 h-10 text-base transition-colors duration-500 ${className}`}
    >
      {/* Animated background */}
      <span className="absolute top-full left-full w-[200px] h-[150px] bg-[#4F0273] rounded-full transition-all duration-700 pointer-events-none group-hover:-top-7 group-hover:-left-7"></span>

      {/* Button text */}
      <span className="relative z-10">{text}</span>

      {/* Hover text color (optional with Tailwind) */}
      <style jsx>{`
        button:hover {
          color: rgb(222, 213, 213);
        }
      `}</style>
    </button>
  );
}
