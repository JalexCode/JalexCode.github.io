import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className='bg-white pt-40 my-52 lg:mx-20 ssm:mx-10 justify-center items-center w-fit relative'>
      <div className="z-1">
        <h2 className="sections-title mb-8 text-2xl font-bold">Projects</h2>
      </div>
      <div className="lg:grid ssm:flex lg:grid-cols-2 ssm:flex-col lg:gap-10 ssm:gap-24 lg:mt-0 ssm:mt-10 z-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
