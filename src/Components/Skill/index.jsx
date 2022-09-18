import React from 'react'
const skills = [
    {
        title: 'Kotlin',
        expert: 80,
    },
    {
        title: 'Android',
        expert: 70,
    },
    {
        title: 'Firebase',
        expert: 60,
    },
    {
        title: 'Java',
        expert: 60,
    },
    {
        title: 'Cloud',
        expert: 55,
    },
    {
        title: 'AWS',
        expert: 65,
    },
    {
        title: 'Dart',
        expert: 75,
    }
]

const Skill = () => {
    return (
        <div id='skill' className=''>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col gap-3">
                    <h1 className='uppercase text-center font-semibold'>Skills</h1>
                    <p className='text-center text-3xl font-bold capitalize'>Technical expertise</p>
                    <p className='text-center font-medium'>Always ready to try hands-on new and emerging technologies</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
                    {skills && skills.map((item, index) => (
                        <div key={index} className="col-span-1 flex flex-col gap-2">
                            <div className="flex justify-between">
                                <p className='font-semibold text-lg'>{item.title}</p>
                                <p className='pt-1 font-medium'>{item.expert}%</p>
                            </div>
                            <div className="relative">
                                <div className="absolute h-4 w-full bg-gray-400 rounded"></div>
                                <div className="absolute h-4 bg-indigo-500 rounded" style={{ width: `${item.expert}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skill