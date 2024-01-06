import ReactMarkdown from 'react-markdown';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className='z-1 project-card justify-around p-5 hover-trigger transition-all hover:scale-105 shadow-2xl hover:shadow-4xl '>
            <div className='flex flex-shrink-0 mr-4'>
                <img src={project.iconPath} className='h-24 min-h-24 object-cover transition-all hover-target' />
            </div>
            <div className='flex flex-col text-start h-full flex-grow'>
                <h3 className='font-bold text-xl mb-2'>{project.name}</h3>
                <ReactMarkdown className='font-sans text-md text-slate-500 mb-4'>{project.markdownDescription}</ReactMarkdown>
                <div className='text-slate-400 text-sm mt-auto mb-2'>Technologies tags:</div>
                <div className='flex flex-wrap gap-2'>
                    {project.usedTechs?.map((tech, index) => (
                        <div key={index} className='tag-badges'>{tech}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
