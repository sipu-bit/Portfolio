import Image from "next/image";
import { ColorPicker } from "../../styles/color";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
    return (
        <div style={{ backgroundColor: ColorPicker.bg }} className="w-full flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col 2xl:justify-between xl:justify-between lg:justify-between md:justify-around justify-start items-center 2xl:px-16 xl:px-14 lg:px-16  px-4 py-6 h-auto text-[#8d8b8b]">
            <div className="flex items-center gap-3">
                <Image src='/my-image.jpg' alt="profile" width={50} height={50} className="object-contain rounded-full" />
                <h2>Sipu Rana</h2>
            </div>
            <div className="flex py-6 gap-7">
                <Link href="https://www.linkedin.com/in/sipu-rana-72b56b242/" className="p-2 border border-[#3e3e3e] rounded-lg hover:bg-[#3e3e3e]/50 transition">
                    <TbBrandLinkedin className="w-5 h-5 text-[#ece8e8]" />
                </Link>
                <Link href="https://www.instagram.com/sagar_sipu_07/" className="p-2 border border-[#3e3e3e] rounded-lg hover:bg-[#3e3e3e]/50 transition">
                    <FaInstagram className="w-5 h-5 text-[#ece8e8]" />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100075259404065" className="p-2 border border-[#3e3e3e] rounded-lg hover:bg-[#3e3e3e]/50 transition">
                    <LuFacebook className="w-5 h-5 text-[#ece8e8]" />
                </Link>
                <Link href="https://github.com/Sipu-982?tab=repositories" className="p-2 border border-[#3e3e3e] rounded-lg hover:bg-[#3e3e3e]/50 transition">
                    <IoLogoGithub className="w-5 h-5 text-[#ece8e8]" />
                </Link>          </div>
            <div className=""><Link href='/'>Contact Me</Link></div>
        </div>
    )
}