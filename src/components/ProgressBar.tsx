import { twMerge } from "tailwind-merge";

interface ProgressBarProps {
    title: string;
    percent: number;
    visible: boolean;
    color?: string;
}

const ProgressBar = ({ title, percent, visible, color = 'indigo' }: ProgressBarProps) => {
    const backClassName = twMerge(`bg-${color}-200`, "rounded-full h-2.5 dark:bg-gray-700")
    const progressClassName = twMerge(`bg-${color}-500 dark:bg-${color}-400`, "h-2.5 rounded-full")

    return (
        <div className="w-full">
            <div
                className="mb-1 text-start text-lg text-slate-700 dark:dark:text-slate-300 text">{title}</div>
            {visible ? (
                <div className={backClassName}>
                    <div className={progressClassName} style={{ width: `${percent}%` }}></div>
                </div>
            ) : ""}
        </div>
    )
}

export default ProgressBar
