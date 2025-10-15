import Image from "next/image";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import MovingButton from "../ui/MovingButton";
import { ColorPicker } from "../ui/color";
import AOSWrapper from "../ui/FadeUp";

export default function Profile(){
    return(
      <>
      <AOSWrapper duration={1200} easing="ease-out" once={true}>
        <div style={{backgroundColor:ColorPicker.bg}} data-aos="fade-up" className="text-white  border border-[#3e3e3e] rounded-xl h-auto pb-8">
          <div className="w-full p-4">
            <Image src='/my-image.jpg' alt="profile" width={100} height={100} className="w-full h-auto rounded-xl border border-[#3e3e3e]"/>
          </div>
          <div className="w-full flex justify-center items-center">
            <h2 className="text-[#ece8e8] text-3xl">Sipu Rana</h2>
          </div>
          <div className="w-full flex justify-center items-center py-6 gap-7">
            <span className="p-2 border border-[#3e3e3e] rounded-lg"><TbBrandLinkedin  className="w-5 h-5 text-[#ece8e8] "/></span>
            <span className="p-2 border border-[#3e3e3e] rounded-lg"><FaInstagram  className="w-5 h-5 text-[#ece8e8]"/></span>
            <span className="p-2 border border-[#3e3e3e] rounded-lg"><LuFacebook  className="w-5 h-5 text-[#ece8e8]"/></span>
             <span className="p-2 border border-[#3e3e3e] rounded-lg"><IoLogoGithub className="w-5 h-5 text-[#ece8e8]"/></span>
          </div>
          <div className="flex gap-2 justify-center pt-6 items-center">
            <Link href='/' className="py-2 px-6 bg-[#3e3e3e] rounded-md">DownLoad CV</Link>
            <Link href='/'><MovingButton text="Contact Me"/></Link>
          </div>
        </div>
        </AOSWrapper>
        </>
    )
}