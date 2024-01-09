import { socialLinks, SocialLinksType } from '../data/personalInfo'

const SocialLinks = () => {
    return (
        <div className='flex space-x-4 cursor-pointer lg:justify-start ssm:justify-between'>
            {socialLinks.map((socialLink: SocialLinksType, index: number) => (
                <a key={index} href={socialLink.url} className='bg-transparent'>
                    {socialLink.icon({size:32, title: socialLink.title, className: "social-links"})}
                </a>
            ))}
        </div>
    )
}


export default SocialLinks;