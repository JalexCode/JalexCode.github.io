import { AiOutlineClose } from 'react-icons/ai'
import JalexCode from '../assets/jalex.png'
// import { useState } from 'react';

interface Sections {
  title:string,
  id:string,
}

const NavBar = () => {
  const items:Array<Sections> = [
   {title:"About Me", id: "aboutme"},
   {title:"Skills", id: "skills"},
   {title:"Projects", id: "projects"},
   {title:"Experience", id: "experience"},
  ]
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const [currentSection, setCurrentSection] = useState<string>(items[0].id)
  return (
    <>
      <nav className='fixed bg-indigo-600 px-10 py-5 ssm:space-y-4 w-full backdrop-filter backdrop-blur-lg bg-opacity-50 z-50'>
        <div className="flex justify-between items-center">
          {/* Javier Alejandro */}
          <div onClick={() => scrollToSection(items[0].id)} className="text-white font-mono text-3xl flex items-center cursor-pointer">
            <img src={JalexCode} alt='JalexCode' width={250} />
          </div>
          {/* Menu Bar */}
          <div className="space-x-4 lg:block ssm:hidden">
            {items.map((element:Sections, index) => (
              <a key={index} className="menu-item" onClick={() => scrollToSection(element.id)}>{element.title}</a>
            ))}
          </div>
          {/* X button to close menu */}
          <div className="lg:hidden">
            <AiOutlineClose size={30} className="text-white" />
          </div>
        </div>
        {/* Menu items list for responsive design */}
        <div className="flex justify-between ssm:block lg:hidden">
          <ul>
            {items.map((element, index) => (
              <li key={index} className="text-white hover:bg-indigo-800 ">{element.title}</li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
export default NavBar