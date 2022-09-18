import React, { useState } from 'react'

const About = () => {

    const [lifeText, setLifeText] = useState('Aut inveniam viam aut faciam.')
    const onMouseEnter = () => {
        setLifeText('I shall either find a way or make one.')
    }
    const onMouseLeave = () => {
        setLifeText('Aut inveniam viam aut faciam.')
    }
    return (
        <div id='about' className=''>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-5">
                    <div className="col-span-1">
                        <img src="https://images.unsplash.com/photo-1492567291473-fe3dfc175b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80" className='w-full h-full object-cover' alt="" />
                    </div>
                    <div className="col-span-1 flex flex-col gap-3 justify-center">
                        <h1 className='uppercase text-center font-semibold'>About Me</h1>
                        <p className='text-center text-3xl font-bold capitalize'>Software Engineer</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci exercitationem et magni possimus? Fugit perspiciatis dolore sint cum quibusdam vitae saepe ex minima, nobis et alias, non perferendis rerum dolores!</p>
                        <p className='uppercase my-2 text-center font-semibold'>Life Philosophy</p>
                        <p className='text-blue-500 text-center text-xl cursor-help' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{lifeText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About