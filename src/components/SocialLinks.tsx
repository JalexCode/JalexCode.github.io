import { socialLinks, SocialLinksType } from '../data/personalInfo'

const SocialLinks = () => {
    return (
        <div className='flex mt-10 space-x-4 cursor-pointer'>
            {socialLinks.map((socialLink: SocialLinksType, index: number) => (
                <a key={index} href={socialLink.url}>
                    {socialLink.icon({size:32, title: socialLink.title, className: "social-links"})}
                </a>
            ))}
        </div>
    )
}


export default SocialLinks;