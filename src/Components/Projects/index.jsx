import React from 'react'

const projectList = [
    {
        title: 'Project 01',
        imageLink: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'Web Application',
        projectLink: 'https://unsplash.com'
    },
    {
        title: 'Project 02',
        imageLink: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'Mobile Application',
        projectLink: 'https://unsplash.com'
    },
    {
        title: 'Project 03',
        imageLink: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80',
        type: 'Android',
        projectLink: 'https://unsplash.com'
    },
    {
        title: 'Project 04',
        imageLink: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        type: 'Desktop Application',
        projectLink: 'https://unsplash.com'
    }
]

const Projects = () => {
    return (
        <div id='projects'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col gap-3">
                    <h1 className='uppercase text-center font-semibold'>Accomplishments</h1>
                    <p className='text-center text-3xl font-bold capitalize'>My projects</p>
                    <p className='text-center font-medium'>Some of my projects are as follow</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
                    {projectList && projectList.map((item, index) => (
                        <div key={index} className="col-span-1 bg-none rounded-xl overflow-hidden cursor-pointer relative flex justify-center items-center">
                            <img src={item.imageLink} className="opacity-100 hover:opacity-20" alt={item.title} />
                            <div className="absolute flex flex-col gap-3 justify-center text-center opacity-0 hover:opacity-80 h-full w-full hover:bg-indigo-800 transition-all">
                                <a href={item.projectLink} target="_blank" className='text-white text-3xl font-semibold hover:scale-110 transition-all'>{item.title}</a>
                                <p className='text-white text-sm font-medium'>{item.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects