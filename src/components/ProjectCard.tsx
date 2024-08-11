import ReactMarkdown from 'react-markdown';
import { Project } from '../data/projects';
import { GoLinkExternal } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import ImageModal from './ImageModal';
// import { AiOutlineGithub } from 'react-icons/ai';

interface ProjectCardProps {
    idx: number;
    project: Project;
}

const ProjectCard = ({ project, idx }: ProjectCardProps) => {
    const [isScreenshotsExpanded, setIsScreenshotsExpanded] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (imageSrc: string) => setSelectedImage(imageSrc);
    const closeModal = () => setSelectedImage(null);
    return (
        <div className='relative z-1 project-card
        sssm:justify-center ssm:justify-center sssm:items-center ssm:items-center lg:justify-around
        flex sssm:flex-col ssm:flex-col lg:flex-row p-5
        hover-trigger transition-all hover:scale-105 shadow-2xl hover:shadow-black
        '>
            {/* Cinta roja "Latest" */}
            <div className="absolute top-0 right-0">
                {idx === 0 &&
                    <div className="bg-red-600 text-white text-xs font-bold uppercase px-2 py-1 transform rotate-45 translate-x-6 translate-y-3 w-full"
                        style={{ clipPath: 'polygon(25% 0, 75% 0, 100% 100%, 0 100%)' }}>
                        <span className='m-5'>Latest</span>
                    </div>
                }

            </div>
            <div className='rounded-full flex flex-shrink-0 sssm:mr-0 ssm:mr-0 sssm:mb-4 ssm:mb-4 lg:mr-4 sssm:-mt-10 ssm:-mt-10 lg:mt-0'>
                <img src={project.iconPath} className='h-24 min-h-24 object-cover transition-all hover-target' />
            </div>

            <div className='flex flex-col gap-2 sssm:text-center ssm:text-center lg:text-start h-full flex-grow'>
                <h3 className='font-bold sssm:text-lg ssm:text-lg lg:text-xl dark:text-slate-200'>{project.name}</h3>
                <h4 className=' sssm:text-md ssm:text-md lg:text-lg dark:text-slate-300 -mt-2'>{project.type}</h4>
                <ReactMarkdown className='font-sans lg:text-md text-slate-500 dark:text-slate-300'>{project.markdownDescription}</ReactMarkdown>
                {project.prodUrl &&
                    <div className='flex flex-col'>
                        <div className='text-slate-400 dark:text-slate-300 text-sm mt-auto'>Product Links:</div>
                        <div className='flex flex-wrap gap-4 sssm:justify-center ssm:justify-center lg:justify-start sssm:items-center lg:items-start'>
                            {project.prodUrl?.map((link, index) => (
                                <div key={index} className='text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-slate-300 flex flex-row gap-1 items-center justify-center cursor-pointer' onClick={() => window.open(link.url)}>
                                    <GoLinkExternal />
                                    <span>{link.name}</span>
                                </div>
                            ))}
                        </div>

                    </div>}
                <div className='flex flex-col'>
                    <div className='text-slate-400 dark:text-slate-300 text-sm mt-auto mb-2'>Technologies tags:</div>
                    <div className='flex flex-wrap gap-2 sssm:justify-center ssm:justify-center lg:justify-start sssm:items-center lg:items-start'>
                        {project.usedTechs?.map((tech, index) => (
                            <div key={index} className='tag-badges'>{tech}</div>
                        ))}
                    </div>
                </div>
                {project.screenShots &&
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row items-center cursor-pointer mt-2 mb-2 ' onClick={() => setIsScreenshotsExpanded(!isScreenshotsExpanded)}>
                            <div className='text-slate-400 dark:text-slate-300 text-sm'>Screenshots</div>
                            {isScreenshotsExpanded ? <IoIosArrowUp className={"ml-2 h-4 w-4 text-slate-400 dark:text-slate-300"} /> :
                                <IoIosArrowDown className={"ml-2 h-4 w-4 text-slate-400 dark:text-slate-300"} />}
                        </div>
                        {isScreenshotsExpanded &&
                            <div className='flex flex-wrap gap-2 sssm:justify-center ssm:justify-center lg:justify-start sssm:items-center lg:items-start'>
                                <Bounce triggerOnce>
                                    {project.screenShots?.map((screenshot, index) => (
                                        <div key={index} className='screenshot-badges'>
                                            <img src={screenshot}
                                                loading="lazy"
                                                decoding='async'
                                                alt='Screenshot Thumbnail'
                                                onClick={() => openModal(screenshot)}
                                                className='rounded-lg h-24 min-h-24 object-cover transition-all' />
                                        </div>
                                    ))}
                                </Bounce>
                            </div>}
                        {selectedImage && (
                            <ImageModal imageSrc={selectedImage} onClose={closeModal} />
                        )}
                    </div>}
            </div>
            {/* <div className='absolute bottom-0 left-0 right-0 bg-black justify-center items-center rounded-br-3xl rounded-bl-3xl h-0 transition-all hover-bottom-bar-target'>
                <AiOutlineGithub className='text-white mx-auto my-auto' size={24} />
            </div> */}
        </div>
    );
};

export default ProjectCard;
