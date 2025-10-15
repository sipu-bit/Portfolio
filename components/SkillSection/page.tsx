"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { FaLaptopCode } from "react-icons/fa";
import Heading1 from "../Headings/Heading1";
import AOSWrapper from "../ui/FadeUp";

export function InfiniteCards() {
    const testimonials1 = [
    {
        image: '/java-Photoroom.png'
    },
    {
        image: '/html-Photoroom.png'
    },
    {
        image: '/css-Photoroom.png'
    },
    {
        image: '/mysql-Photoroom.png'
    },
    {
        image: '/js-Photoroom.png'
    }
];

const testimonials2 = [
    {
        image: '/nodejs-Photoroom.png'
    },
    {
        image: '/nextjs-Photoroom.png'
    },
    {
        image: '/react-Photoroom.png'
    },
    {
        image: '/express-Photoroom.png'
    },
    {
        image: '/mongo-Photoroom.png'
    },
    {
        image: '/tailwind-Photoroom.png'
    }
]

    return (
        <div className="relative overflow-hidden">
            <div className="">
              <AOSWrapper duration={1200} easing="ease-out" once={true}><div data-aos="fade-up" className=""><Heading1 text="Tech Stacks" icon={FaLaptopCode} className="text-4xl" /></div></AOSWrapper> 
            </div>
            <div className="mt-10">
                <InfiniteMovingCards
                    items={testimonials1}
                    direction="right"
                    speed="normal"
                />
            </div>
            <div className="mt-10">
                <InfiniteMovingCards
                    items={testimonials2}
                    direction="left"
                    speed="normal"
                />
            </div>
        </div>
    );
}


