import { ExperienceType } from '../data/experience'
import UCLogo from '/images/uc-logo.png'

interface ExperienceCardProps {
    experience: ExperienceType;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
        <div className="rounded-3xl shadow-2xl w-fit">
            <div className="h-36 rounded-tr-3xl rounded-tl-3xl shadow-xl" style={{ backgroundColor: "rgb(20, 124, 244)" }}>
                <div className="flex justify-center items-center flex-col">
                    <a target="_blank" href={experience.webLink}>
                        <h3 className="text-2xl mb-2 font-bold text-white mt-12">{experience.workName}</h3>
                    </a>
                    <div className="shadow-xl rounded-full">
                        <img alt={experience.workName} loading="lazy" width="120" height="120" decoding="async" data-nimg="1" src={experience.image} />
                    </div>
                </div>
            </div>
            <div className="p-6 mt-14 flex justify-center items-center flex-col">
                <h2 className="text-3xl opacity-70 mb-2 text-center">{experience.role}</h2>
                <h2 className="mb-2 opacity-100">{experience.place}</h2>
                <div className="flex justify-center flex-col">
                    <p className="text-center">{experience.workingPeriod}</p>
                </div>
                <p className="mt-5 pl-2 pr-2 hidden lg:flex opacity-70">
                    {experience.description}
                </p>
            </div>
        </div>
    )
}

export default ExperienceCard
