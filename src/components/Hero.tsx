import Lottie from 'lottie-react'
import reactAnimation from '../assets/lotties/react.json';
import SocialLinks from './SocialLinks';
import { personalInfo } from '../data/personalInfo';
const Hero = () => {
    return (
        <section id="aboutme" className='bg-indigo-600 pt-28 pb-96 '>
            <div className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white animate-moveUp'>
                {/* About Me */}
                <div className='w-1/2 ssm:w-fit'>
                    <div className='absolute z-0'>
                        <Lottie
                            loop={false}
                            autoplay={true}
                            animationData={reactAnimation}
                            className='opacity-20'
                        />
                    </div>
                    
                    <div className='relative z-1'>
                        <p className='text-4xl text-slate-300 mb-4'>Hello there!👋 I'm </p>
                        <h1 className='text-white text-6xl'>{personalInfo.name}</h1>
                        <hr />
                        <p className='text-xl mt-10 text-slate-300 font-sans'>
                            {personalInfo.aboutMe}
                        </p>
                        <SocialLinks/>
                    </div>

                </div>
                {/* My picture */}
                <div className='w-1/2 items-center ssm:w-fit'>
                    <img src={personalInfo.heroPic} alt='JalexCode Picture' width={250} height={250} className='rounded-full w-full border-8 border-white transition-opacity duration-500' />
                </div>
            </div>
        </section>
    )
}

export default Hero
