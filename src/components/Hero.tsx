import { BsFacebook, BsInstagram, BsTelegram, BsGithub, BsLinkedin, BsEnvelopeAtFill } from 'react-icons/bs'
import HeroPic from '/avatar.jpg'
import Lottie from 'lottie-react'
import reactAnimation from '../assets/lotties/react.json';

const Hero = () => {
    return (
        <section className='bg-indigo-600 pt-20 pb-96 '>
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
                        <h1 className='text-white text-6xl'>Javier Alejandro</h1>
                        <hr />
                        <p className='text-xl mt-10 text-slate-300 font-sans'>
                            I'm a Software Engineer and Front-End Developer passionate about creating innovative, useful and aesthetic applications. I enjoy learning new technologies and turning my ideas into products.
                        </p>
                        <div className='flex mt-10 space-x-4 cursor-pointer'>
                            <BsGithub size={32} title="Feel free to check my repos" className="social-links" />
                            <BsLinkedin size={32} title="Let's connect!" className="social-links" />
                            <BsFacebook size={32} title="Get to know me closer" className="social-links" />
                            <BsInstagram size={32} title="See my posts" className="social-links" />
                            <BsTelegram size={32} title="Let's chat!" className="social-links" />
                            <BsEnvelopeAtFill size={32} title="Send me an email" className="social-links" />
                        </div>
                    </div>

                </div>
                {/* My picture */}
                <div className='w-1/2 items-center ssm:w-fit'>
                    <img src={HeroPic} alt='JalexCode Image' width={250} height={250} className='rounded-full w-full border-8 border-white transition-opacity duration-500' />
                </div>
            </div>
        </section>
    )
}

export default Hero
