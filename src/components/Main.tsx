import NavBar from './NavBar'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Footer from './Footer'

const Main = () => {
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
