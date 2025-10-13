'use client'

import TypewriterEffect from "@/components/ui/TypeWritting"

export default function HeroSection(){
    return(
        <div className="w-full flex flex-col justify-center h-[80vh]">
            <div className="">
                <h1 >I'm Sipu Rana</h1>
            <TypewriterEffect textList={[
          "Building digital experiences.",
          "Designing user-friendly systems.",
          "Coding with passion.",
        ]}
             typingSpeed={80}
             deletingSpeed={50}
             pauseTime={1500}
             className="text-3xl font-bold  text-[#dad6d6]"
            />
            <p className="text-gray-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non laudantium adipisci mollitia aperiam, maxime aliquam nihil et iusto in excepturi rerum nam odio fugit quam magnam autem. Quisquam, provident!</p>
            <p className="text-gray-50 pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non laudantium adipisci mollitia aperiam, maxime aliquam nihil et iusto in excepturi rerum nam odio fugit quam magnam autem. Quisquam, provident!</p>
        </div>
        </div>
    )
}
