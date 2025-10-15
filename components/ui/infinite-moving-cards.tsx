"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ColorPicker } from "./color";

type Item = { image: string; };

type Props = {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards: React.FC<Props> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            key={idx}
            style={{backgroundColor:ColorPicker.bg}}
            className="relative w-[150px] h-[150px] flex items-center justify-center shrink-0 rounded-2xl border border-[#8d8b8b] shadow-md dark:border-zinc-700 dark:bg-zinc-900"
          >
            <Image
              src={item.image}
              alt={`logo-${idx}`}
              width={100}
              height={100}
              className="object-contain w-24 h-24"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
