import NavBar from './NavBar'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Footer from './Footer'
import { useEffect } from 'react'
import { useDarkMode } from '../context/DarkModeContext'

const Main = () => {
    const { isDarkMode } = useDarkMode();
    // setDarkMode(localStorage.getItem('darkMode') === 'true')
    useEffect(() => {
        localStorage.setItem('darkMode', String(isDarkMode));
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [isDarkMode]);
    return (
        <div>
            <NavBar />
            <div>
                <Hero />
                <Skills />
                <Projects />
                <Experience />
                <Footer />
            </div>
        </div>
    )
}

export default Main
