import React from 'react'
import Contact from '../../Components/Contact'
import Projects from '../../Components/Projects'

function Home() {
    return (
        <div className='my-5'>
            <div className="max-w-7xl mx-auto bg-gray-50">

                {/* projects */}
                <Projects />

                {/* contact form */}
                <Contact />
            </div>
        </div>
    )
}

export default Home