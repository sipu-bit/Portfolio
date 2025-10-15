"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Define allowed easing options from AOS
type AOSEasing =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "ease-in-back"
  | "ease-out-back"
  | "ease-in-out-back"
  | "ease-in-sine"
  | "ease-out-sine"
  | "ease-in-out-sine"
  | "ease-in-quad"
  | "ease-out-quad"
  | "ease-in-out-quad"
  | "ease-in-cubic"
  | "ease-out-cubic"
  | "ease-in-out-cubic"
  | "ease-in-quart"
  | "ease-out-quart"
  | "ease-in-out-quart";

interface AOSWrapperProps {
  children: React.ReactNode;
  duration?: number;
  easing?: AOSEasing;
  once?: boolean;
}

const AOSWrapper: React.FC<AOSWrapperProps> = ({
  children,
  duration = 1000,
  easing = "ease-in-out",
  once = true,
}) => {
  useEffect(() => {
    AOS.init({ duration, easing, once });
    AOS.refresh(); // ensures newly added elements are recognized
  }, [duration, easing, once]);

  return <>{children}</>;
};

export default AOSWrapper;
