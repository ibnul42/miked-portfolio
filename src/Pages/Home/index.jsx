import React from 'react'
import Contact from '../../Components/Contact'

function Home() {
    return (
        <div className='my-5'>
            <div className="max-w-7xl mx-auto bg-gray-50">

                {/* contact form */}
                <Contact />
            </div>
        </div>
    )
}

export default Home