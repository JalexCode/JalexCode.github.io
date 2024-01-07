import { experience } from '../data/experience'
import ExperienceCard from './ExperienceCard'
const Experience = () => {
  return (
    <section className='bg-white p-4 my-52 mx-20 justify-center items-center w-fit relative'>
      <div className="z-1">
        <h2 className="sections-title mb-8 text-2xl font-bold">Experience</h2>
      </div>
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
