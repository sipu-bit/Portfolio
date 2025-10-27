'use client';

import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

interface AnimatedCardProps {
  image: string;
  title: string;
  desc: string;
  link?: string;
}

export default function AnimatedCard({ image, title, desc, link }: AnimatedCardProps) {
  return (
    <div
      className="group relative w-full rounded-xl overflow-hidden cursor-pointer bg-black"
    >
      {/* === Border Animation Lines === */}
      <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-linear"></span>
      <span className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-500 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-700 ease-linear delay-200"></span>
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-700 ease-linear delay-300"></span>
      <span className="absolute left-0 bottom-0 h-full w-[2px] bg-gradient-to-b from-transparent via-red-500 to-transparent translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-700 ease-linear delay-500"></span>

      {/* === Card Image === */}
      <div className="relative w-full h-[250px] sm:h-[280px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500"></div>
      </div>

      {/* === Card Content === */}
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{desc}</p>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="mt-5 flex justify-end">
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#2b2b2b] group-hover:bg-red-600 transition-colors duration-500">
                <GoArrowUpRight size={22} className="text-white" />
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
