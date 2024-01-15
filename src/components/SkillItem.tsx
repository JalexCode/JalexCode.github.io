import { useState } from "react";
import ProgressBar from "./ProgressBar";

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
            <img src={image} className="w-10 h-10 mr-1" />
            <ProgressBar title={text} percent={percent} visible={true}/>
        </div>
    )
}

export default SkillItem
