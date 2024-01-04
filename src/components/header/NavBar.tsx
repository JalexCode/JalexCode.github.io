const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-10 lg:flex-row bg-indigo-500">
        <div className="text-white font-mono text-3xl tracking-wider flex items-center">JalexCode</div>
        <div className="space-x-4 ">
          <a className="nav-bar-menu-item">About Me</a>
          <a className="nav-bar-menu-item">Experience</a>
          <a className="nav-bar-menu-item">Skills</a>
          <a className="nav-bar-menu-item">Projects</a>
        </div>
      </div>
    </>
  )
}
export default NavBar