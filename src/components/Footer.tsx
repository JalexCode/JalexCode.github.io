import SocialLinks from "./SocialLinks";

function getCurrentYear(): string {
  const now = new Date();
  const year: string = String(now.getFullYear());
  return year;
}


const Footer = () => {
  return (
    <div className="flex sssm:flex-col ssm:flex-col lg:flex-row bg-indigo-600 p-8 h-fit w-full justify-between items-center text-white relative">
      <div className="sssm:justify-center ssm:justify-center lg:justify-start ssm:items-center sssm:items-center lg:items-start">
        <div className="text-sm font-bold mb-2 sssm:text-center ssm:text-center lg:text-start">Contact me!</div>
        <SocialLinks />
      </div>
      <div className="ssm:w-full lg:w-fit ssm:mt-4 sssm:mt-4 lg:mt-0 text-center">Copyright © {getCurrentYear()} - Todos los derechos reservados</div>
    </div>
  )
}

export default Footer;