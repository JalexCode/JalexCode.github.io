import { experience } from '../data/experience'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  return (
    <section id="experience" className='bg-white pt-28 px-4 my-40 mx-20 justify-center items-center w-fit relative'>
      <h2 className="sections-title mb-8 text-2xl font-bold">Experience</h2>
      <div className="flex flex-wrap z-1">
        {experience.map((experience, index) => (
        //   <ProjectCard key={index} project={experience} />
        <ExperienceCard key={index} experience={experience}/>
        ))}
      </div>
    </section>
  )
}

export default Experience
