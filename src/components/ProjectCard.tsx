import ReactMarkdown from 'react-markdown';
// import { AiOutlineGithub } from 'react-icons/ai';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className='z-1 project-card lg:justify-around ssm:justify-center ssm:items-center flex lg:flex-row ssm:flex-col p-5 hover-trigger transition-all hover:scale-105 shadow-2xl hover:shadow-black'>
            <div className='flex flex-shrink-0 lg:mr-4 ssm:mr-0 ssm:mb-4 lg:mt-0 ssm:-mt-10 '>
                <img src={project.iconPath} className='h-24 min-h-24 object-cover transition-all hover-target' />
            </div>
            <div className='flex flex-col lg:text-start ssm:text-center h-full flex-grow'>
                <h3 className='font-bold lg:text-xl ssm:text-lg mb-2'>{project.name}</h3>
                <ReactMarkdown className='font-sans lg:text-md text-slate-500 mb-4'>{project.markdownDescription}</ReactMarkdown>
                <div className='text-slate-400 text-sm mt-auto mb-2'>Technologies tags:</div>
                <div className='flex flex-wrap gap-2 lg:justify-start ssm:justify-center lg:items-start ssm:items-center'>
                    {project.usedTechs?.map((tech, index) => (
                        <div key={index} className='tag-badges'>{tech}</div>
                    ))}
                </div>
            </div>
            {/* <div className='absolute bottom-0 left-0 right-0 bg-black justify-center items-center rounded-br-3xl rounded-bl-3xl h-0 transition-all hover-bottom-bar-target'>
                <AiOutlineGithub className='text-white mx-auto my-auto' size={24} />
            </div> */}
        </div>
    );
};

export default ProjectCard;
