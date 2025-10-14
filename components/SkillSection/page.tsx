"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { FaLaptopCode } from "react-icons/fa";
import Heading1 from "../Headings/Heading1";

export function InfiniteCards() {
    return (
        <div className="relative overflow-hidden">
            <div className="">
                <Heading1 icon={FaLaptopCode} text="Tech Skills" />
            </div>
            <div className="mt-10">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
            />
            </div>
        </div>
    );
}

const testimonials = [
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
        image: '/react-Photoroom.png'
    }
];
