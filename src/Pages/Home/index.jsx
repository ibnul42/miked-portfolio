import React from 'react'
import About from '../../Components/About'
import Contact from '../../Components/Contact'
import Projects from '../../Components/Projects'
import Skill from '../../Components/Skill'
import Timeline from '../../Components/Timeline'

function Home() {
    return (
        <div className='my-5'>
            <div className="max-w-7xl mx-auto bg-gray-50">

                {/* about me */}
                <About />

                {/* skill */}
                <Skill />

                {/* timeline */}
                <Timeline />

                {/* projects */}
                <Projects />

                {/* contact form */}
                <Contact />
            </div>
        </div>
    )
}

export default Home