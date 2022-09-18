import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeId, setActiveId] = useState('#home')
    // const navLinkStyles = ({ isActive }) => {
    //     return {
    //       color: isActive ? "#6366f1" : "black",
    //       borderBottom: isActive ? "3px solid #6366f1" : null,
    //     };
    //   };
    const links = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skill', link: '#skill' },
        { name: 'Timeline', link: '#timeline' },
        { name: 'Projects', link: '#projects' },
        { name: 'Blog', link: '#blog' },
        { name: 'Contact', link: '#contact' },
    ]
    return (
        <div className="bg-purple-500">
            <div className='max-w-7xl mx-auto px-3 text-white shadow-lg flex justify-between'>
                <div className="flex items-center my-5">
                    <p className="font-bold text-4xl">Logo</p>
                </div>
                <div className="h-[56px] w-16 absolute top-4 right-5 flex flex-col justify-around items-center rounded-lg cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
                    <div className={`w-12 h-2 rounded-2xl bg-white transition-all duration-500 ease-in ${open ? 'rotate-45 mt-7 mb-5' : ''}`}></div>
                    <div className={`w-12 h-2 rounded-2xl bg-white transition-all duration-500 ease-in ${open ? 'hidden mb-5' : ''}`}></div>
                    <div className={`w-12 h-2 rounded-2xl bg-white transition-all duration-500 ease-in ${open ? '-rotate-45 -mt-7 mb-5' : ''}`}></div>
                </div>
                <ul className={`flex flex-col md:flex-row items-start md:items-center justify-center absolute left-0 md:static w-full md:w-auto transition-all duration-500 ease-in ${open ? 'opacity-100 top-20 bg-black' : 'opacity-0 md:opacity-100 top-[-500px] z-[-1]'} z-[-1] md:z-auto`}>
                    {links.map((item, index) => (
                        <a href='#!' key={index}
                            className={`px-3 text-2xl font-semibold py-5 md:my-0 w-full cursor-pointer hover:text-indigo-300 ${activeId === item.link ? 'text-indigo-800 border-l-4 md:border-l-0 md:border-b-4 border-indigo-800' : ''}`}
                            // style={navLinkStyles}
                            onClick={() => setActiveId(item.link)}
                        >{item.name}</a>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar