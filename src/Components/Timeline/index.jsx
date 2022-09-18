import React from 'react'

const timeline = [
    {
        title: 'software developer',
        imageLink: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        joined_date: '12 January, 2021',
        desc: 'Building ShareChat for Bharat, India’s leading social media platform that operates exclusively in Indic languages having more than 160 Million MAU (Monthly Active Users)',
        projectLink: 'https://unsplash.com'
    },
    {
        title: 'software developer',
        imageLink: 'https://images.unsplash.com/photo-1662581872277-0fd0bf3ae8f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
        joined_date: '12 January, 2020',
        desc: 'Building ShareChat for Bharat, India’s leading social media platform that operates exclusively in Indic languages having more than 160 Million MAU (Monthly Active Users)',
        projectLink: 'https://unsplash.com'
    },
    {
        title: 'software developer',
        imageLink: 'https://images.unsplash.com/photo-1663431262170-b94c02b712cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        joined_date: '12 January, 2019',
        desc: 'Building ShareChat for Bharat, India’s leading social media platform that operates exclusively in Indic languages having more than 160 Million MAU (Monthly Active Users)',
        projectLink: 'https://unsplash.com'
    },
]

const Timeline = () => {
    return (
        <div id='timeline' className=''>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col gap-3">
                    <h1 className='uppercase text-center font-semibold'>Timeline</h1>
                    <p className='text-center text-3xl font-bold capitalize'>My journey so far</p>
                    <p className='text-center font-medium'>All my academic and professional experience with some milestones achieved are summed up here:</p>
                </div>
                <div className="flex flex-col gap-3 lg:gap-5 my-8 relative">
                    <div className="absolute left-7 lg:left-[54%] xl:left-[53.1%] -top-4 h-full w-1 bg-[#d7e4ed]"></div>
                    {timeline && timeline.map((item, index) => (
                        <div key={index} className={`flex gap-3 z-10 relative ${index % 2 === 0 ? 'flex-row-reverse lg:flex-row' : 'flex-row-reverse lg:flex-row-reverse'}`}>
                            <div className="bg-gray-100 px-3 py-3 flex flex-col gap-2 rounded-lg shadow-lg lg:w-2/5">
                                <p className='text-blue-600 text-lg font-semibold capitalize'>{item.title}</p>
                                <p className='text-gray-600'>{item.desc}</p>
                                <p className='text-gray-400'>{item.joined_date}</p>
                            </div>
                            <div className="h-16 lg:h-20 w-16 lg:w-20 flex-shrink-0 rounded-full bg-white shadow- shadow-gray-400 p-1 lg:absolute left-[50%]">
                                <img src={item.imageLink} className="h-full w-full rounded-full" alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline