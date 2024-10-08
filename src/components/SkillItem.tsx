import { useState } from "react";
import ProgressBar from "./ProgressBar";
import { clasificate } from "../data/util";

interface SkillItemProps {
    image: string
    text: string;
    percent: number;
    bgColor?: string;
}

const SkillItem = ({ image, text, percent, bgColor }: SkillItemProps) => {
    const [pressed, setPressed] = useState<boolean>(false)
    return (
        <div className="skill-item" title={clasificate(percent)} onClick={() => setPressed(!pressed)}>
            <img src={image}
            alt={text}
            className="w-10 h-10 mr-1"
            loading="lazy"
            decoding='async' />
            {/* <span className="mb-1 text-start text-lg text-slate-700 dark:dark:text-slate-300 text">{text}</span> */}
            <ProgressBar title={text} percent={percent} visible={true} color={bgColor} />
        </div>
    )
}

export default SkillItem