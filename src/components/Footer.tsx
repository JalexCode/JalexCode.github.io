import SocialLinks from "./SocialLinks";

function getCurrentYear(): string {
  const now = new Date();
  const year: string = String(now.getFullYear());
  return year;
}


const Footer = () => {
  return (
    <div className="flex bg-indigo-600 p-8 h-fit w-full justify-between items-center text-white relative">
      <div className="justify-start items-start">
        <div className="text-sm font-bold mb-2">Contact me!</div>
        <SocialLinks />
      </div>
      <div>Copyright © {getCurrentYear()} - Todos los derechos reservados</div>
    </div>
  )
}

export default Footer;