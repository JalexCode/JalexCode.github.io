import { BsFacebook, BsInstagram, BsTelegram, BsGithub, BsLinkedin, BsEnvelopeAtFill } from 'react-icons/bs'
import { IoBriefcase } from "react-icons/io5";

export interface SocialLinksType {
    icon: (props: unknown) => JSX.Element
    title: string;
    url: string;
}

export interface PersonalInfoProps {
    aboutMe: string;
    name: string;
    heroPic: string;
}

export const personalInfo:PersonalInfoProps = {
    aboutMe: "I'm a Software Engineer and Front-End Developer passionate about creating innovative, useful and aesthetic applications. I enjoy learning new technologies and turning my ideas into products.",
    name: "Javier Alejandro",
    heroPic: "/avatar.jpg",
};

export const socialLinks: Array<SocialLinksType> = [
    {
        icon: BsGithub,
        title: 'Feel free to check my repos',
        url: 'https://github.com/JalexCode',
    },
    {
        icon: BsLinkedin,
        title: "Let's connect!",
        url: 'https://www.linkedin.com/in/javier-alejandro-gonz%C3%A1lez-casellas-050882181/',
    },
    {
        icon: BsFacebook,
        title: 'Get to know me closer',
        url: 'https://facebook.com/javyalejandro99',
    },
    {
        icon: BsInstagram,
        title: 'See my posts',
        url: 'https://instagram.com/jalexoasismusic',
    },
    {
        icon: BsTelegram,
        title: "Let's chat!",
        url: 'https://t.me/jalexcode',
    },
    {
        icon: BsEnvelopeAtFill,
        title: 'Send me an email',
        url: 'mailto:javierglez9910@gmail.com',
    },
    {
        icon: IoBriefcase,
        title: 'Get my resume',
        url: 'https://rxresu.me/javierglez9910/imported-from-linkedin-26062023032246',
    },
];