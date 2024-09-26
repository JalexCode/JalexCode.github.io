import { experience } from '../data/experience'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <section id="experience" className='bg-white dark:bg-slate-600 pt-20 my-40 sssm:px-10 lg:px-20 justify-start items-center w-fit'>
      <h2 className="sections-title dark:text-white text-slate-300 mb-20">Experience</h2>
      <div className="flex flex-col lg:flex-row md:flex-row gap-8 z-1 lg:justify-start md:justify-center">
        {experience.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default Experience
