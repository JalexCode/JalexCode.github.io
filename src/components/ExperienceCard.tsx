import { ExperienceType } from '../data/experience'

interface ExperienceCardProps {
    experience: ExperienceType;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
        <div className="rounded-3xl shadow-2xl w-fit transition-all hover:scale-105 hover:shadow-black">
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
                <h2 className="text-3xl opacity-70 mb-2 text-center font-bold">{experience.role}</h2>
                <h2 className="mb-2 text-slate-600">{experience.place}</h2>
                <p className="text-center text-slate-600">{experience.workingPeriod}</p>
                <p className="mt-5 px-2 hidden lg:flex opacity-70">
                    {experience.description}
                </p>
                <div className='mt-8 bottom-0 '>
                    <div className='flex flex-wrap gap-2'>
                        {experience.skills.map((skill, index) => (
                            <div key={index} className='tag-badges'>{skill}</div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExperienceCard
