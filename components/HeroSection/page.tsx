'use client'

import TypewriterEffect from "@/components/ui/TypeWritting"
import { ColorPicker } from "@/components/ui/color"
import Heading1 from "../Headings/Heading1"

export default function HeroSection(){
    const achievement = [
        {
            numbers:'20+',
            title:'Completed Projects'},
          {
            numbers:'1+',
            title:'Year of Experience'},
            {
            numbers:'5+',
            title:'Happy Clients / Collaborations'},
            {
            numbers:'2+',
            title:'YAwards / Achievements'},
    ]
    return(
        <div className="w-full flex flex-col justify-center h-[80vh]">
            <div className="flex flex-col gap-4">
                <Heading1 text="👋 Say Hello," className="text-2xl"/>
                <Heading1 text="Sipu Rana," className="text-4xl"/>
            <TypewriterEffect textList={[
          "Software Development Engineer",
          "Full Stack Developer",
          "Frontend Developer",
        ]}
             typingSpeed={80}
             deletingSpeed={50}
             pauseTime={1500}
            style={{color:ColorPicker.primary}}
             className="text-3xl font-bold"
            />
            <Heading1 text="Based in Bhubaneswar,Odisha" className="text-4xl"/>

            <p className="leading-8 text-md text-justify" style={{color:ColorPicker.secondary}}>👋 Hi, I'm Sipu Rana, a passionate Software Development Engineer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js).
I enjoy building scalable, secure, and user-focused web applications. I’ve worked on several real-time projects involving authentication systems, online transaction platforms, and product-based web apps.
Currently, I’m expanding my expertise with Next.js to develop high-performance, SEO-friendly applications with modern UI/UX design principles.</p>
        <div className="flex justify-around py-6 items-start text-center">
            {achievement.map((items,index)=>(
                <div className="" key={index}>
                     <Heading1 text={items.numbers}/>
                     <Heading1 text={items.title} className="text-sm"/>
                </div>
            ))}
        </div>
        </div>
        </div>
    )
}
