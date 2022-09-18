import React from 'react'
import Contact from '../../Components/Contact'
import Projects from '../../Components/Projects'
import Timeline from '../../Components/Timeline'

function Home() {
    return (
        <div className='my-5'>
            <div className="max-w-7xl mx-auto bg-gray-50">

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