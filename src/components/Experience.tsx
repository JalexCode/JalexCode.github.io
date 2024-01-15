import { experience } from '../data/experience'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <section id="experience" className='bg-white pt-40 my-40 sssm:px-10 lg:px-20 justify-center items-center w-fit'>
      <h2 className="sections-title mb-10 text-2xl font-bold">Experience</h2>
      <div className="flex flex-wrap z-1">
        {experience.map((experience, index) => (
        <ExperienceCard key={index} experience={experience}/>
        ))}
      </div>
    </section>
  )
}

export default Experience
