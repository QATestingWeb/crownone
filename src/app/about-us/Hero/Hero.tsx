"use client"
import Image from 'next/image'
import React from 'react'
import crownOneIMG from '../../../../public/Assets/about/CrownOneAbout.webp'


const Hero = () => {
    return (
        <div className="w-full flex justify-center items-center bg-gray-10 md:py-14 py-10 px-5">
            <div className='w-full max-w-[1150px] flex flex-col md:flex-row md:justify-between md:items-center md:gap-16 gap-10'>
                <div className='md:w-[55%]'>
                    <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-30/60 text-orange-400 text-[13px] font-semibold uppercase tracking-wider' data-aos="fade-up">
                        <span className='w-2 h-2 rounded-full bg-orange-400' />
                        About Crown One
                    </span>
                    <h2 className='heading1 mt-4 mb-4' data-split>Empowering <span className='text-orange-400'>Retailers, Mechanics,</span> and Riders.</h2>
                    <p className='text-gray-50' data-aos="fade-up">Streamline operations, unlock rewards, and access innovative tools
                        with Crown One your all-in-one solution for growth.</p>
                </div>

                <div className='relative flex justify-center md:w-[45%]' data-aos="fade-left">
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[420px] md:h-[420px] w-[260px] h-[260px] rounded-full bg-gradient-to-br from-[#ff8a4c]/25 to-[#fe4f11]/10 blur-2xl' />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[380px] md:h-[380px] w-[230px] h-[230px] rounded-full border-2 border-dashed border-orange-400/30' />
                    <Image src={crownOneIMG} alt='Crown One Image' className='relative md:w-[50vh] w-[170px]' data-tilt='10' />
                </div>
            </div>
        </div>
    )
}

export default Hero
