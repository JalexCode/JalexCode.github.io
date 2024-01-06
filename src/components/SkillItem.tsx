import { useState } from "react";
import ProgressBar from "./ProgressBar";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface SkillItemProps {
    image: string // Tipo JSX.Element para el elemento SVG
    text: string;
    percent: number;
    bgColor: string;
}

const SkillItem = ({ image, text, percent, bgColor }: SkillItemProps) => {
    const [pressed, setPressed] = useState<boolean>(false)
    console.log(bgColor)
    return (
        <div className="skill-item" onClick={()  =>  setPressed(!pressed)}> 
        {/* {`flex w-full justify-start space-x-4 items-center rounded-lg bg-transparent hover:${bgColor === "blue" ? "bg-blue-100" : bgColor === "green" ? "bg-green-100" : bgColor === "red" ? "bg-red-100" : bgColor === "yellow" ? "bg-yellow-100" : bgColor === "orange" ? "bg-orange-100" : bgColor === "indigo" ? "bg-indigo-100" :  "bg-gray-100"} transition-colors duration-300 ease-in-out px-2 py-2 cursor-pointer`} */}
            <img src={image} className="w-10 h-10 mr-1" />
            <ProgressBar title={text} percent={percent} visible={true}/>
            {/* {pressed ? <IoIosArrowUp size={30} className={"text-slate-400"}/> : <IoIosArrowDown size={30} className={"text-slate-500"}/>} */}
        </div>
    )
}

export default SkillItem
