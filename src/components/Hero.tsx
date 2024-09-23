import Lottie from 'lottie-react'
import reactAnimation from '../assets/lotties/react.json';
import SocialLinks from './SocialLinks';
import { personalInfo } from '../data/personalInfo';
import { TypeAnimation } from 'react-type-animation';
import { Fade, Slide } from "react-awesome-reveal";
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { ResumeButtons } from './ResumeButtons';

const Hero = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    useEffect(() => {
        if (!hasAnimated) {
            setTimeout(() => {
                setHasAnimated(true)
            }, 1000);
        }
    }, [hasAnimated])

    return (
        <section id="aboutme" className='bg-indigo-600 dark:bg-slate-800 sssm:pt-32 ssm:pt-28 lg:pt-36 sssm:pb-0
        lg:px-0 md:px-0 sm:px-10 ssm:px-10 sssm:px-10'>
            <Slide direction='up' triggerOnce>
                <Fade triggerOnce>
                    <div className='flex justify-around items-center w-full 
            sssm:pt-10 ssm:pt-10 smm:pt-10 md:pt-10 lg:pt-0
           md:flex-row lg:flex-row sssm:flex-col-reverse ssm:flex-col-reverse text-white'>
                        {/* About Me */}
                        <div className='sssm:w-fit ssm:w-fit lg:w-1/2 sssm:items-center ssm:items-center sssm:justify-center ssm:justify-center z-10'>
                            {/* About me && Social Links */}
                            <div className='relative z-1'>
                                <Slide delay={100} triggerOnce cascade damping={0.1}>
                                    <div id='greetings' className='flex sssm:flex-col ssm:flex-col md:flex-row lg:flex-row sssm:text-2xl ssm:text-2xl md:text-5xl lg:text-5xl text-slate-300'>
                                        <p className=''>Hello there!👋 </p>
                                        <p>I'm</p>
                                    </div>
                                    <h1 id='myname' className='text-white sssm:text-4xl ssm:text-4xl md:text-7xl lg:text-7xl'>
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
                                </Slide>
                                <hr className='lg:block md:block sm:hidden ssm:hidden sssm:hidden' />
                                <div id='whoami' className='sssm:mt-4 ssm:mt-4 md:mt-10 lg:mt-10'>

                                    <p className='text-2xl text-slate-300'>
                                        {personalInfo.aboutMe}
                                    </p>
                                    <div id='sociallinks' className='flex flex-col mt-10 mb-4 justify-start items-start space-y-4'>
                                        <SocialLinks />
                                        {/* <ResumeButtons /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Lottie Animation */}
                        <div className='absolute z-0 sssm:hidden ssm:hidden md:block lg:block' style={{ top: '75%', left: '45%', transform: 'translate(-55%, -68%)' }}>
                            <Lottie
                                loop={false}
                                autoplay={true}
                                animationData={reactAnimation}
                                className='opacity-10'
                            />
                        </div>
                        {/* My picture */}
                        <div className='group relative z-40 lg:w-[28%] md:lg:w-[20%] sm:lg:w-full ssm:w-full sssm:w-full
                        mt-0 ssm:mt-2 sssm:mt-5
                        ssm:mb-10 sssm:mb-10
                        '>
                            <img
                                decoding="async"
                                data-nimg="1"
                                src='/profile_bg.png'
                                loading='lazy'
                                alt='JalexCode Picture'
                                className={twMerge(`absolute inset-0 w-full object-cover transition-transform ease-in-out duration-500
                                lg:translate-y-0 ssm:translate-y-4 sssm:-translate-y-2`, hasAnimated && 'scale-[102%]')}
                                style={{ transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                            />
                            <img
                                decoding="async"
                                data-nimg="1"
                                src='/profile_hero.webp'
                                loading='lazy'
                                alt='JalexCode Picture'
                                className={twMerge(`w-full transition-transform ease-in-out duration-500
                                -mt-1`, hasAnimated && 'scale-110 lg:-translate-y-6 lg:-translate-x-1 ssm:-translate-y-1 sssm:-translate-y-2')}
                                style={{ clipPath: 'inset(0 0 -20% 0)', transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
                            />
                        </div>

                    </div>
                </Fade>
            </Slide>
        </section>
    )
}

export default Hero
