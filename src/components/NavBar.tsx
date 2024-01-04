import { AiOutlineClose } from 'react-icons/ai'
const NavBar = () => {
  const items = ["About Me", "Experience", "Skills", "Projects"]
  return (
    <>
      <div className='bg-indigo-500 p-10 block ssm:space-y-4'>
        <div className="flex justify-between items-center">
          {/* Javier Alejandro */}
          <div className="text-white font-mono text-3xl flex items-center">Javier Alejandro</div>
          {/* Menu Bar */}
          <div className="space-x-4 lg:block ssm:hidden">
            {items.map((element, index) => (
              <a key={index} className="nav-bar-menu-item">{element}</a>
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
      </div>
    </>
  )
}
export default NavBar