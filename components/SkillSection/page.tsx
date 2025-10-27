"use client";

import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import Heading1 from "../Headings/Heading1";
import AOSWrapper from "../ui/FadeUp";
import OrbitSkills from "@/components/codeskills/page";

export default function SkillSection() {

    

    return (
        <section className="relative overflow-hidden bg-transparent py-16">
            {/* Heading */}
            <AOSWrapper duration={1200} easing="ease-out" once={true}>
                <div data-aos="fade-up" className="text-center">
                    <Heading1
                        text="Tech Stacks"
                        icon={FaLaptopCode}
                        className="text-4xl md:text-5xl text-white"
                    />
                </div>
            </AOSWrapper>

            {/* Orbit Animation */}
            <div  className="flex flex-col gap-6">
                <OrbitSkills />
            </div>
        </section>
    );
}
