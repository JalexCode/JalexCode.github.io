import NavBar from './NavBar'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'

const Main = () => {
    return (
        <div>
            <NavBar />
            <div>
                <Hero />
                <Skills />
                <Projects/>
            </div>
        </div>
    )
}

export default Main
