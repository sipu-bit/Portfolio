import Heading1 from "../Headings/Heading1";
import { FaRegPaperPlane } from "react-icons/fa6";
import Heading2 from "../Headings/Heading2";
import Address from "../address/page";
import ContactForm from "../contact-form/page";
import AOSWrapper from "../ui/FadeUp";

export default function ContactSection() {
    return (
        <div className="min-h-[50vh] py-12">
              <AOSWrapper duration={1200} easing="ease-out" once={true}><div data-aos="zoom-in" className=""><Heading1 text="Contact" icon={FaRegPaperPlane} className="text-4xl" /></div></AOSWrapper> 
              <AOSWrapper duration={1200} easing="ease-out" once={true}><div data-aos="zoom-in" className=""><Heading2 text="Get In Touch" /></div></AOSWrapper> 
            <div className="w-full flex flex-row gap-6">
            <Address/>
             <ContactForm/>
            </div>
        </div>
    )
}