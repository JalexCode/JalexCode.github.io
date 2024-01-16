import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className='bg-white dark:bg-slate-600 pt-40 sssm:mt-32 sm:mt-32 lg:mt-52 sssm:mx-10 ssm:mx-10 lg:mx-20 justify-center items-center w-fit relative'>
      <div className="mb-16">
        <h2 className="sections-title text-2xl font-bold">Projects</h2>
      </div>
      <div className="sssm:flex ssm:flex lg:grid sssm:flex-col ssm:flex-col lg:grid-cols-2 sssm:gap-24 ssm:gap-24 lg:gap-10 sssm:mt-10 ssm:mt-10 lg:mt-0 z-1">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
