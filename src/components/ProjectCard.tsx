import React from 'react'
import Project from '../data/projects'
import ReactMarkdown from 'react-markdown';

interface ProjectCardProps {
    project: Project;
  }

const ProjectCard = ({project}:ProjectCardProps) => {
    return (
        <div className='project-card justify-around'>
            <div className='mr-5 items-center p-4 my-auto w-full h-full'>
                <img src={project.iconPath} className='rounded-xl'/>
            </div>
            <div className='flex flex-col p-4 text-start'>
                <h3 className='font-bold text-xl'>{project.name}</h3>
                <ReactMarkdown className='font-sans text-md text-slate-500'>{project.markdownDescription}</ReactMarkdown>
                <div className='grid grid-cols-3 gap-4'>
                    {project.usedTechs?.map((tech, index) => (
                        <div key={index} className='w-full mr-3 mt-2 text-center rounded-md bg-slate-400 text-slate-100 text-base p-x-2 p-y-6'>{tech}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
