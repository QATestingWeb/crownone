"use client"
import Image from 'next/image'
import React from 'react'
import crownOneIMG from '../../../../public/Assets/about/CrownOneAbout.webp'


const Hero = () => {
    return (
            <div className="w-full flex justify-center items-center md:py-20 py-10 px-5" >
        <div className='md:w-full md:max-w-[1150px] md:flex justify-between items-center '>
            <div className='md:w-[50%]'data-aos="fade-right" >
                <h2 className='heading1 mb-4' data-split>Empowering <span className='text-orange-400'>Retailers, Mechanics,</span> and Riders.</h2>
                <p>Streamline operations, unlock rewards, and access innovative tools
                    with Crown One your all-in-one solution for growth.</p>
            </div>
            <div className='flex md:justify-end justify-center md:mt-0 mt-8' data-aos="fade-left">
                <Image src={crownOneIMG} alt='Crown One Image' className='md:w-[50vh] w-[170px]' data-tilt='10'/>
            </div>
            </div>
        </div>

    )
}

export default Hero
