import { Fade } from 'react-awesome-reveal'
import { experience } from '../data/experience'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <section id="experience" className='bg-white dark:bg-slate-600 pt-40 my-40 sssm:px-10 lg:px-20 justify-center items-center w-fit'>
      <h2 className="sections-title mb-10 text-2xl font-bold">Experience</h2>
      <div className="flex flex-wrap gap-8 z-1">
        <Fade triggerOnce>
        {experience.map((experience, index) => (
        <ExperienceCard key={index} experience={experience}/>
        ))}
        </Fade>
      </div>
    </section>
  )
}

export default Experience
