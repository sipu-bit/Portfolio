import { BsRocketTakeoff } from "react-icons/bs";
import Heading1 from "../Headings/Heading1";
import AnimatedCards from "../ui/AnimatedCards";
import AOSWrapper from "../ui/FadeUp";

export default function Projects() {
    
    return (
        <div className="min-h-[60vh] flex flex-col justify-start items-start py-12">
              <AOSWrapper duration={1200} easing="ease-out" once={false}><div data-aos="zoom-in" className=""><Heading1 text="Projects" icon={BsRocketTakeoff} className="text-4xl" /></div></AOSWrapper> 
            <div className="text-white">
                <AnimatedCards/>
            </div>
        </div>
    )
}