import { BiPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ColorPicker } from "../../styles/color";
import AOSWrapper from "../ui/FadeUp";

export default function Address(){
    const infos =[
        {icon:<BiPhoneCall size={25}/>,heading:"Contact No",count:'9827505917'},
        {icon:<IoIosMail size={25}/>,heading:"Email",count:'sipurana38@gmail.com'},
        {icon:<FaMapMarkerAlt size={25}/>,heading:"Address",count:'Bhubaneswar,Odisha'},
    ]
    return(
        <AOSWrapper duration={1200} once={true} easing="ease-out">
        <div data-aos="zoom-in" className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full">
           {infos.map((items,index)=>(
            <div className="w-full  px-3 h-18 rounded-lg flex gap-6 items-center mt-4" key={index} style={{backgroundColor:ColorPicker.bg}}>
                <div className="">
                 <div className="" style={{color:ColorPicker.primary}}>{items.icon}</div>
                </div>
                <div className="flex flex-col text-lg">
                    <span style={{color:ColorPicker.secondary}}>{items.heading}</span>
                    <span className="text-[#636262]">{items.count}</span>
                </div>
            </div>
           ))}
        </div>
        </AOSWrapper>
    )
}