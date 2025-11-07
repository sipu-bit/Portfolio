"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ColorPicker } from "../../styles/color";

interface TypewriterEffectProps {
  textList: string[]; // multiple texts
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  style?: React.CSSProperties;
  cursorClassName?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  textList,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
  className = "",
  cursorClassName = "",
  style={}
}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textList[index % textList.length];
    let typingTimeout: NodeJS.Timeout;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setText(currentText.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setText(currentText.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentText) {
      typingTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % textList.length);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, textList, index, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div
    style={style}
      className={`text-2xl sm:text-3xl md:text-4xl font-semibold ${className}`}
    >
      <motion.span
        key={text}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="whitespace-pre"
      >
        {text}
      </motion.span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{backgroundColor:ColorPicker.primary}}
        className={`ml-1 inline-block w-[3px] h-6 sm:h-8  ${cursorClassName}`}
      ></motion.span>
    </div>
  );
};

export default TypewriterEffect;
