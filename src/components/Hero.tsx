import Lottie from 'lottie-react'
import reactAnimation from '../assets/lotties/react.json';
import SocialLinks from './SocialLinks';
import { personalInfo } from '../data/personalInfo';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section id="aboutme" className='bg-indigo-600 dark:bg-slate-800 sssm:pt-32 ssm:pt-28 lg:pt-48 sssm:pb-0 lg:pb-60'>
            <div className='flex justify-around items-center w-full 
            sssm:pt-10 ssm:pt-10 smm:pt-10 md:pt-10 lg:pt-0
            md:space-x-10 lg:space-x-10 md:flex-row lg:flex-row sssm:flex-col-reverse ssm:flex-col-reverse text-white animate-moveUp'>
                {/* About Me */}
                <div className='sssm:w-fit ssm:w-fit lg:w-1/2 sssm:items-center ssm:items-center sssm:justify-center ssm:justify-center z-10'>
                    {/* About me && Social Links */}
                    <div className='relative z-1'>
                        <div className='flex sssm:flex-col ssm:flex-col md:flex-row lg:flex-row sssm:text-2xl ssm:text-2xl md:text-5xl lg:text-5xl text-slate-300'>
                            <p className=''>Hello there!👋 </p>
                            <p>I'm</p>
                        </div>
                        <h1 className='text-white sssm:text-4xl ssm:text-4xl md:text-7xl lg:text-7xl'>
                            <TypeAnimation sequence={[
                                personalInfo.name,
                                2000,
                                personalInfo.nick,
                                2000,
                            ]}
                                wrapper="span"
                                speed={50}
                                className=''
                                repeat={Infinity}
                            />
                        </h1>
                        <hr className='lg:block md:block sm:hidden ssm:hidden sssm:hidden' />
                        <section className='sssm:mt-4 ssm:mt-4 md:mt-10 lg:mt-10'>
                            
                            <p className='text-2xl text-slate-300'>
                                {personalInfo.aboutMe}
                            </p>
                            <div className='mt-10'>
                                <SocialLinks />
                            </div>
                        </section>
                    </div>
                </div>
                {/* Lottie Animation */}
                <div className='absolute z-0 sssm:hidden ssm:hidden md:block lg:block' style={{ top: '75%', left: '45%', transform: 'translate(-70%, -50%)' }}>
                    <Lottie
                        loop={false}
                        autoplay={true}
                        animationData={reactAnimation}
                        className='opacity-20'
                    />
                </div>
                {/* My picture */}
                <div className='sssm:w-full ssm:w-full md:w-full lg:w-1/3 justify-center items-center sssm:mb-5 ssm:mb-5 md:mb-0 lg:mb-0 z-40'>
                    <img decoding="async" data-nimg="1" src={personalInfo.heroPic} loading='lazy' alt='JalexCode Picture' width={250} height={250} className='rounded-full w-full border-0 transition-all duration-300 ease-in-out hover:border-8 hover:border-white' />
                </div>
            </div>
        </section>
    )
}

export default Hero
