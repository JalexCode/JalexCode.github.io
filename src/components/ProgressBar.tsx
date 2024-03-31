interface ProgressBarProps {
    title: string;
    percent: number;
    visible: boolean;
}

const ProgressBar = ({ title, percent, visible }: ProgressBarProps) => {
    return (
        <div className="w-full">
            <div className="mb-1 text-start text-lg text-slate-700 dark:dark:text-slate-300 text">{title}</div>
            {visible ? (
                <div className="bg-indigo-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-indigo-500 dark:bg-indigo-400 h-2.5 rounded-full progress-bar" style={{ width: `${percent}%` }}></div>
                </div>
            ) : ""}
        </div>
    )
}

export default ProgressBar
