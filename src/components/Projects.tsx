import ProjectCard from "./ProjectCard"
import projects from "../data/projects"
const Projects = () => {
  return (
    <section className='bg-white'>
      <div>
        <h2 className="sections-title mb-8">Projects</h2>
      </div>
      <div className="grid grid-cols-2 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project}/>
        ))}
      </div>
    </section>
  )
}

export default Projects
