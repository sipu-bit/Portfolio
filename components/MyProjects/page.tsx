import { BsRocketTakeoff } from "react-icons/bs";
import Heading1 from "../Headings/Heading1";
import AnimatedCards from "../ui/AnimatedCards";

export default function Projects() {
    return (
        <div className="min-h-[60vh] flex flex-col justify-start items-start py-12">
            <div className="">
                <Heading1 icon={BsRocketTakeoff} text="Projects" />
            </div>
            <div className="text-white">
                <AnimatedCards/>
            </div>
        </div>
    )
}