import SocialLinks from "./SocialLinks";

function getCurrentYear(): string {
  const now = new Date();
  const year: string = String(now.getFullYear());
  return year;
}


const Footer = () => {
  return (
    <div className="flex lg:flex-row ssm:flex-col bg-indigo-600 p-8 h-fit w-full justify-between items-center text-white relative">
      <div className="lg:justify-start ssm:justify-center lg:items-start ssm:items-center">
        <div className="text-sm font-bold mb-2 lg:text-start ssm:text-center">Contact me!</div>
        <SocialLinks />
      </div>
      <div className="lg:w-fit ssm:w-full lg:mt-0 ssm:mt-4 text-center">Copyright © {getCurrentYear()} - Todos los derechos reservados</div>
    </div>
  )
}

export default Footer;