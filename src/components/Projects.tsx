import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className='bg-white px-4 pt-28 my-52 mx-20 justify-center items-center w-fit relative'>
      <div className="z-1">
        <h2 className="sections-title mb-8 text-2xl font-bold">Projects</h2>
      </div>
      <div className="grid grid-cols-2 gap-10 z-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
