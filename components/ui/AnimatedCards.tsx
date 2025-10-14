'use client';

import Image from 'next/image';
import React from 'react';
import { ColorPicker } from './color';
import { GoArrowUpRight } from "react-icons/go";

const cardData = [
  { id: 1, image: '/netflix-app.jpg', title: 'Netflix Clone', desc: 'Full Stack Web Application' },
  { id: 2, image: '/flipkart.jpg', title: 'E-Commerce', desc: 'Full Stack Web Application' },
  { id: 3, image: '/solar-web.jpg', title: 'Solar Enterprises', desc: 'Full Stack E-Commerce Application' },
  { id: 4, image: '/CRUD.jpg', title: 'CRUD Application', desc: 'Full Stack Web Application' },
];

export default function CardsSimple() {
  return (
    <div className="w-full grid 2xl:grid-cols-2 mt-12 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-16">
      {cardData.map((card) => (
        <div
          key={card.id}
          style={{ backgroundColor: ColorPicker.bg }}
          className="group relative 2xl:w-[450px] p-5  transition-transform duration-500 hover:translate-y-[-5px] border border-[#3e3e3e] rounded-lg xl:w-[350px] lg:w-[350px] md:w-[300px] w-full h-auto mx-auto cursor-pointer "
        >
          <div>
            <Image
              src={card.image}
              alt="card"
              width={100}
              height={100}
              className="w-full h-[270px] object-cover rounded-md"
            />
          </div>

          <div className="mt-6 flex justify-between items-center w-full">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">{card.title}</h2>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </div>

            {/* Arrow icon with smooth forward motion */}
            <div className="w-12 h-12 flex justify-center items-center bg-[#3e3e3e] rounded-full ">
              <GoArrowUpRight size={25} className="text-[#aaaaaa] transition-transform duration-500 group-hover:translate-x-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
