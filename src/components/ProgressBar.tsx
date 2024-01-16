interface ProgressBarProps {
    title: string;
    percent: number;
    visible: boolean;
}
// function clasificate(rate: number): string {
//     if (rate > 0 && rate < 25) {
//         return "Still learning"
//     } else if (rate > 25 && rate < 50) {
//         return "Good"
//     } else if (rate > 50 && rate < 75) {
//         return "Advanced"
//     } else {
//         return "Pro"
//     }
// }

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
