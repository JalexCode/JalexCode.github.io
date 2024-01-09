import Lottie from 'lottie-react'
import reactAnimation from '../assets/lotties/react.json';
import SocialLinks from './SocialLinks';
import { personalInfo } from '../data/personalInfo';
const Hero = () => {
    return (
        <section id="aboutme" className='bg-indigo-600 lg:pt-48 ssm:pt-28 pb-60'>
            <div className='flex justify-around items-center px-10 ssm:pt-10 lg:space-x-10 lg:flex-row ssm:flex-col-reverse text-white animate-moveUp'>
                {/* About Me */}
                <div className='w-1/2 ssm:w-fit ssm:items-center ssm:justify-center z-10'>
                    {/* About me && Social Links */}
                    <div className='relative z-1'>
                        <div className='flex lg:flex-row ssm:flex-col lg:text-5xl ssm:text-2xl text-slate-300'>
                            <p className=''>Hello there!👋 </p>
                            <p>I'm</p>
                        </div>
                        <h1 className='text-white lg:text-7xl ssm:text-4xl'>{personalInfo.name}</h1>
                        <hr />
                        <p className='text-2xl lg:mt-10 ssm:mt-4 text-slate-300'>
                            {personalInfo.aboutMe}
                        </p>
                        <div className='mt-10'>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
                {/* Lottie Animation */}
                <div className='absolute z-0 lg:block ssm:hidden' style={{ top: '75%', left: '45%', transform: 'translate(-70%, -50%)' }}>
                    <Lottie
                        loop={false}
                        autoplay={true}
                        animationData={reactAnimation}
                        className='opacity-20'
                    />
                </div>
                {/* My picture */}
                <div className='w-1/2 ssm:w-full justify-center items-center lg:mb-0 ssm:mb-5 z-40'>
                    <img decoding="async" data-nimg="1" src={personalInfo.heroPic} loading='lazy' alt='JalexCode Picture' width={250} height={250} className='rounded-full w-full border-8 border-white' />
                </div>
            </div>
        </section>
    )
}

export default Hero
