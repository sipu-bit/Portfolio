"use client";
import { motion,Variants } from "framer-motion";
import React from "react";

export default function CodeSkill() {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.8,
            },
        },
    };
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };
  return (
    <motion.div variants={containerVariants}  initial="hidden" whileInView="visible"
                viewport={{ once: true, amount: 0.4 }} className="flex items-center justify-center p-4 font-sans bg-transparent dark:bg-zinc-950">
      <CoderProfileCard />
    </motion.div>
  );
}


const coderData = {
  name: "Sipu Rana",
  role: "Software Developer",
  location: "Bhubaneswar, India",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "CSS",
    "Java",
    "GitHub",
    "HTML",
    "MySQL",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
  ],
};

const CoderProfileCard = () => {
  return (
    <div className="max-w-7xl w-full relative rounded-lg  shadow-lg overflow-hidden">
      {/* Internal CSS for gradient background */}
      <style jsx>{`
        .code-card {
          background: linear-gradient(
              145deg,
              #0f172a 0%,
              #111827 40%,
              #1e1b4b 70%,
              #312e81 100%
            ),
            radial-gradient(
              circle at 50% 0%,
              rgba(255, 255, 255, 0.05),
              transparent 70%
            );
          background-blend-mode: overlay;
          color: white;
        }
        .code-card .blur-glow {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          opacity: 0.2;
        }
      `}</style>

      <div className="code-card border-zinc-300 dark:border-[#1b2c68a0]">
        {/* Top bar */}
        <div className="flex flex-row">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
        </div>

        <div className="px-4 lg:px-8 py-5 flex justify-between items-center">
          <div className="flex flex-row space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <div className="text-xs text-gray-400 font-mono">profile.js</div>
        </div>

        {/* Code Content */}
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
          <div className="blur-glow bg-blue-600 -top-24 -left-24 w-56 h-56"></div>
          <div className="blur-glow bg-pink-600 -bottom-24 -right-24 w-56 h-56"></div>

          <div className="relative flex">
            <div className="hidden md:flex flex-col items-end pr-4 text-gray-500 font-mono text-xs">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="leading-relaxed select-none opacity-70">
                  {i + 1}
                </div>
              ))}
            </div> 

            <code className="font-mono text-xs md:text-sm lg:text-base w-full">
              <div>
                <span className="mr-2 text-pink-400">const</span>
                <span className="mr-2 text-violet-400">skills</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div className="pl-6">
                <span className="text-white">name:</span>
                <span className="text-gray-400">&#39;</span>
                <span className="text-green-400">{coderData.name}</span>
                <span className="text-gray-400">&#39;,</span>
              </div>
              <div className="pl-6">
                <span className="text-white">role:</span>
                <span className="text-gray-400">&#39;</span>
                <span className="text-green-400">{coderData.role}</span>
                <span className="text-gray-400">&#39;,</span>
              </div>
              <div className="pl-6">
                <span className="text-white">seniority:</span>
                <span className="text-gray-400">&#39;</span>
                <span className="text-gray-400">&#39;,</span>
              </div>
              <div className="pl-6">
                <span className="text-white">location:</span>
                <span className="text-gray-400">&#39;</span>
                <span className="text-green-400">{coderData.location}</span>
                <span className="text-gray-400">&#39;,</span>
              </div>
              <div className="pl-6">
                <span className="text-white">skills:</span>
                <span className="text-gray-400">{"["}</span>
                <div className="pl-6 flex flex-wrap">
                  {coderData.skills.map((skill, index) => (
                    <span key={skill} className="mr-1">
                      <span className="text-gray-400">&#39;</span>
                      <span className="text-cyan-400">{skill}</span>
                      <span className="text-gray-400">&#39;</span>
                      {index < coderData.skills.length - 1 && (
                        <span className="text-gray-400">, </span>
                      )}
                    </span>
                  ))}
                </div>
                <span className="text-gray-400">{"],"}</span>
              </div>
              <div>
                <span className="text-gray-400">{"};"}</span>
              </div>
            </code>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-gray-800 pt-3 text-xs text-gray-500 flex justify-between items-center">
          <span>UTF-8</span>
          <span>JavaScript</span>
          <span>Ln 12, Col 2</span>
        </div>
      </div>
    </div>
  );
};
