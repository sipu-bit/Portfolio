"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSWrapperProps {
  children: React.ReactNode;
  duration?: number;
  easing?: string;
  once?: boolean;
}

const AOSWrapper: React.FC<AOSWrapperProps> = ({
  children,
  duration = 1000,
  easing = "ease-in-out",
  once = true,
}) => {
  useEffect(() => {
    AOS.init({ duration, easing:easing as any, once });
    AOS.refresh(); // ensures newly added elements are recognized
  }, [duration, easing, once]);

  return <>{children}</>;
};

export default AOSWrapper;
