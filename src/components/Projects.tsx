import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import Lottie from 'lottie-react'
import rocketAnimation from '../assets/lotties/rocket-purple.json';

const Projects = () => {
  return (
    <section className='bg-white p-4 my-52 mx-20 justify-center items-center w-fit relative'>
      <div className='absolute top-0 left-0 -mt-20 ml-40 z-0'>
        <Lottie
          loop={true}
          autoplay={true}
          animationData={rocketAnimation}
          className='opacity-80 animate-fadeInUp'
          style={{ height: '200px' }}
        />
      </div>
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
