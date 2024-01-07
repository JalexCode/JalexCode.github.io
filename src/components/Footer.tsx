import SocialLinks from "./SocialLinks";

function getCurrentYear():string {
    const now = new Date();
    const year:string = String(now.getFullYear()); 
    return year;
  }
  

const Footer = () => {
  return (
    <div className="flex flex-col bg-indigo-600 p-2 w-full justify-center items-center space-y-4 text-white">
      <SocialLinks/>    
      <div>Copyright © {getCurrentYear()} - Todos los derechos reservados</div>
    </div>
  )
}

export default Footer;