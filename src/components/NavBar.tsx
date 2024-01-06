import { AiOutlineClose } from 'react-icons/ai'
import JalexCode from '../assets/jalex.png'
const NavBar = () => {
  const items = ["About Me", "Skills", "Projects", "Experience"]
  return (
    <>    
      <nav className='fixed bg-indigo-600 px-10 py-5 ssm:space-y-4 w-full backdrop-filter backdrop-blur-lg bg-opacity-50 z-50'>
        <div className="flex justify-between items-center">
          {/* Javier Alejandro */}
          <div className="text-white font-mono text-3xl flex items-center">
            <img src={JalexCode} alt='JalexCode' width={250}/>
          </div>
          {/* Menu Bar */}
          <div className="space-x-4 lg:block ssm:hidden">
            {items.map((element, index) => (
              <a key={index} className="dynamic-bg-button">{element}</a>
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
              <li key={index} className="text-white hover:bg-indigo-800 ">{element}</li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
export default NavBar