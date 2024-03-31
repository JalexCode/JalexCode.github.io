import { AiOutlineClose } from 'react-icons/ai'
import JalexCode from '../assets/jalex.png'
import { useState } from 'react';
import { MdNightlight, MdLightMode } from "react-icons/md";
import {HiMenuAlt1} from "react-icons/hi";
import { useDarkMode } from '../context/DarkModeContext';
interface Sections {
  title: string,
  id: string,
}

const NavBar = () => {
  const items: Array<Sections> = [
    { title: "About Me", id: "aboutme" },
    { title: "Skills", id: "skills" },
    { title: "Projects", id: "projects" },
    { title: "Experience", id: "experience" },
  ]
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const [currentSection, setCurrentSection] = useState<string>(items[0].id)
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const { isDarkMode, toggleDarkMode  } = useDarkMode();
  return (
    <>
      <nav className='bg-indigo-600 dark:dark:bg-slate-800  px-10 py-5 sssm:py-10 ssm:py-10 sm:py-10 sssm:space-y-4 ssm:space-y-4 sm:space-y-4 h-fit w-screen sssm:w-screen ssm:w-screen sm:w-screen max-w-screen-xl backdrop-filter dark:backdrop-filter backdrop-blur-lg dark:backdrop-blur-lg bg-opacity-50 dark:bg-opacity-50 z-50 fixed'>
        <div className="flex justify-between items-center ssm:space-x-4 ">
          {/* X button to close menu */}
          <div className='lg:hidden md:hidden'>
            {toggleMenu ?
            <AiOutlineClose size={30} onClick={() => setToggleMenu(!toggleMenu)} className="navbar-items-icon" />
            : <HiMenuAlt1 size={30} onClick={() => setToggleMenu(!toggleMenu)} className="navbar-items-icon" />}
          </div>
          {/* Javier Alejandro */}
          <div onClick={() => scrollToSection(items[0].id)} className="items-center cursor-pointer">
            <img src={JalexCode} alt='JalexCode' width={250} />
          </div>
          {/* Menu Bar */}
          <div>
            <div className='flex lg:space-x-4 md:space-x-4'>
              <div className="flex flex-wrap space-x-4 sssm:hidden ssm:hidden sm:hidden md:block lg:block">
                {items.map((element: Sections, index) => (
                  <a key={index} className="menu-item" onClick={() => scrollToSection(element.id)}>{element.title}</a>
                ))}
              </div>
              {!isDarkMode ? <MdNightlight size={30} className="navbar-items-icon" onClick={() => toggleDarkMode ()}/> :
              <MdLightMode size={30} className="navbar-items-icon" onClick={() => toggleDarkMode ()}/>}
              
            </div>
          </div>
        </div>
        {/* Menu items list for responsive design */}
        {toggleMenu ? (<div className="flex justify-between sssm:block ssm:block md:hidden lg:hidden">
          <ul className='space-y-2'>
            {items.map((element, index) => (
              <li key={index} className="menu-list-item" onClick={() => scrollToSection(element.id)}>{element.title}</li>
            ))}
          </ul>
        </div>) : ""}
        
      </nav>
    </>
  )
}
export default NavBar