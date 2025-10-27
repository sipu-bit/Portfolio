'use client';

import AnimatedCard from "@/components/ui/AnimatedCards";

const cardData = [
  { id: 1, image: "/netflix-app.jpg", title: "Netflix Clone", desc: "Full Stack Web Application", link: "#" },
  { id: 2, image: "/flipkart.jpg", title: "E-Commerce", desc: "Full Stack Web Application", link: "#" },
  { id: 3, image: "/solar-web.jpg", title: "Solar Enterprises", desc: "Full Stack E-Commerce Application", link: "#" },
  { id: 4, image: "/CRUD.jpg", title: "CRUD Application", desc: "Full Stack Web Application", link: "#" },
];

export default function Projects() {
  return (
    <section className="w-full bg-black py-16 px-4 sm:px-6 md:px-10">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {cardData.map((item) => (
          <AnimatedCard
            key={item.id}
            image={item.image}
            title={item.title}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
