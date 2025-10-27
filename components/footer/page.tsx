import Image from "next/image";
import { ColorPicker } from "../ui/color";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";

export default function Footer(){
    return(
        <div style={{backgroundColor:ColorPicker.bg}} className="w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col 2xl:justify-between xl:justify-between lg:justify-between md:justify-around justify-start items-center 2xl:px-16 xl:px-14 lg:px-16  px-4 py-6 h-auto text-[#8d8b8b]">
        <div className="flex items-center gap-3">
            <Image src='/my-image.jpg' alt="profile" width={50} height={50} className="object-contain rounded-full"/>
            <h2>Sipu Rana</h2>
        </div>
        <div className="flex py-6 gap-7">
            <span className="p-2 border border-[#3e3e3e] rounded-lg"><TbBrandLinkedin  className="w-5 h-5 text-[#ece8e8] "/></span>
            <span className="p-2 border border-[#3e3e3e] rounded-lg"><FaInstagram  className="w-5 h-5 text-[#ece8e8]"/></span>
            <span className="p-2 border border-[#3e3e3e] rounded-lg"><LuFacebook  className="w-5 h-5 text-[#ece8e8]"/></span>
             <span className="p-2 border border-[#3e3e3e] rounded-lg"><IoLogoGithub className="w-5 h-5 text-[#ece8e8]"/></span>
          </div>
        <div className=""><Link href='/'>Contact Me</Link></div>
        </div>
    )
}