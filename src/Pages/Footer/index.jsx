import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsFillPinMapFill, BsFillTelephonePlusFill } from 'react-icons/bs'
import { AiFillSkype } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

function Footer() {
    return (
        <div className='bg-blue-500'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
                    <div className="col-span-1 flex flex-col gap-5">
                        <p className='text-white text-2xl font-semibold'>React out me here</p>
                        <p className='text-[rgba(255,255,255,0.7)] font-medium'>Feel free to ping me for volunteering, discussing your ideas or grabbing a cup of coffee.</p>
                        <div className="flex gap-3">
                            <a href="google.com" target="_blank"><FaFacebook className='h-8 w-8' fill='#84bdfb' /></a>
                            <a href="google.com" target="_blank"><FaLinkedin className='h-8 w-8' fill='#84bdfb' /></a>
                            <a href="google.com" target="_blank"><FaGithub className='h-8 w-8' fill='#84bdfb' /></a>

                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-5">
                        <p className='text-white text-2xl font-semibold'>Have a Question?</p>
                        <div className="flex flex-col gap-3 text-[rgba(255,255,255,0.7)]">
                            <p className='flex gap-3'><BsFillPinMapFill className='h-6 w-6' fill='rgba(255,255,255,0.5)' /> <span>	#11, 7th Block, 1st Main, 1st Cross, Kormangala, Bangalore, Karnataka, India PIN: 560095</span></p>
                            <p className='flex gap-3'><BsFillTelephonePlusFill className='h-5 w-5' fill='rgba(255,255,255,0.5)' /> <span>+123 456 789</span></p>
                            <p className='flex gap-3'><AiFillSkype className='h-6 w-6' fill='rgba(255,255,255,0.5)' /> <span>test012</span></p>
                            <p className='flex gap-3'><MdEmail className='h-6 w-6' fill='rgba(255,255,255,0.5)' /> <span>test@mail.com</span></p>
                        </div>
                    </div>
                </div>
                <p className='text-center text-white my-8'>Made with <span className='text-red-400 text-xl'>&hearts;</span> by John</p>
            </div>
        </div>
    )
}

export default Footer