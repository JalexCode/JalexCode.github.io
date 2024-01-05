import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Skills from './Skills'

const Main = () => {
    return (
        <div className='bg-indigo-600'>
            <NavBar />
            <div className='pt-20'>
                <Hero />
                <Skills />
            </div>
        </div>
    )
}

export default Main
