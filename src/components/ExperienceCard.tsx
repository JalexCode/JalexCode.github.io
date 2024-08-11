import { useState } from 'react';
import { ExperienceType } from '../data/experience'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
interface ExperienceCardProps {
    experience: ExperienceType;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    const [pressed, setPressed] = useState<boolean>(false)
    return (
        <div className={`bg-white dark:bg-slate-500 rounded-3xl shadow-2xl lg:w-1/3 md:w-1/2 w-full hover:scale-105 hover:shadow-black transition-all duration-500 ease-in-out`}>
            <div
                className="h-36 rounded-tr-3xl rounded-tl-3xl shadow-xl"
                style={{
                    backgroundColor: experience.color,
                    boxShadow: `0 0 1em ${experience.color}`  // Cambiar de filter a boxShadow
                }}>
                <div className="flex justify-center items-center flex-col">
                    <a target="_blank" href={experience.webLink}>
                        <h3 className="lg:text-2xl ssm:text-xl text-center mb-2 font-bold text-white mt-12">
                            {experience.workplaceName}
                        </h3>
                    </a>
                    <div className="shadow-xl rounded-full">
                        <img
                            className="rounded-full"
                            alt={experience.workplaceName}
                            loading="lazy"
                            width="120"
                            height="120"
                            decoding="async"
                            data-nimg="1"
                            src={experience.image}
                        />
                    </div>
                </div>
            </div>

            <div className="p-6 lg:mt-14 ssm:mt-24 sssm:mt-20 flex justify-center items-center flex-col">
                <h2 className="lg:text-3xl ssm:text-2xl opacity-70 mb-2 text-center font-bold dark:text-slate-200">{experience.role}</h2>
                <h2 className="mb-2 text-slate-600 dark:text-slate-300">{experience.place}</h2>
                <p className="text-center text-slate-600 dark:text-slate-300">{experience.workingPeriod}</p>
                <p className={`dark:text-slate-300 mt-5 px-2 lg:flex ${pressed ? '' : 'sssm:hidden ssm:hidden'} opacity-70 transition-all duration-500 ease-in-out`}>
                    {experience.description}
                </p>
                <div className='flex space-x-2 my-5 text-slate-600 dark:text-slate-300 items-center justify-center lg:hidden' onClick={() => setPressed(!pressed)}>
                    <span className='font-sans'>{pressed ? 'Mostrar menos' : 'Mostrar más'}</span>
                    {pressed ? <IoIosArrowUp size={20} className={"text-slate-400 dark:text-slate-300"} /> : <IoIosArrowDown size={20} className={"text-slate-400 dark:text-slate-300"} />}</div>
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
