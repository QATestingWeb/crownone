import React from 'react'
import RecommendedIcon from '../../../../public/Assets/about/icons/Recommended.svg'
import SoldIcon from '../../../../public/Assets/about/icons/Sold.svg'
import DownloadedIcon from '../../../../public/Assets/about/icons/Downloaded.svg'
import RatedIcon from '../../../../public/Assets/about/icons/Rated.svg'
import PakistanMapIMG from '../../../../public/Assets/about/PakistanMap.webp'
import Image from 'next/image'

const stats = [
  { icon: RecommendedIcon, text: 'Recommended by', heading: '70,000+', subHeading: 'Mechanics', duration: '1000' },
  { icon: SoldIcon, text: 'Sold by over', heading: '25,000+', subHeading: 'Retailers', duration: '1500' },
  { icon: DownloadedIcon, text: 'Downloaded Over', heading: '100K+', subHeading: 'Users on Play Store', duration: '2000' },
  { icon: RatedIcon, text: 'Highly Rated with', heading: '15K', subHeading: 'Reviews on Play Store', duration: '2500' },
]

const Progress = () => {
  return (
    <div className="w-full flex justify-center bg-gray-100 md:mt-14 mt-8 md:py-16 py-10 px-5">
    <div className='w-full max-w-[1150px]'>
        <div>
            <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-30/60 text-orange-400 text-[13px] font-semibold uppercase tracking-wider' data-aos="fade-up">
                <span className='w-2 h-2 rounded-full bg-orange-400' />
                Our Reach
            </span>
            <h4 className='heading4 mt-4' data-split>Numbers that Speak for Themselves</h4>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-10 md:mt-10 mt-6'>
            <div className="grid grid-cols-2 md:gap-6 gap-4">
                {stats.map((stat) => (
                    <div key={stat.heading} data-aos="zoom-in" data-aos-duration={stat.duration}>
                        <div
                            className='group relative h-full flex flex-col md:gap-2 gap-1 md:p-6 p-4 rounded-20 bg-white border border-gray-30/60 shadow-sm hover:shadow-xl hover:border-orange-400/60 transition-all duration-300 overflow-hidden'
                            data-tilt="6"
                        >
                            <div className='md:w-14 md:h-14 w-12 h-12 mb-2 rounded-2xl bg-gradient-to-br from-[#ff8a4c] to-[#fe4f11] shadow-lg shadow-orange-400/30 flex items-center justify-center transition-transform duration-300 group-hover:rotate-6'>
                                <Image className='md:w-7 md:h-7 w-6 h-6 brightness-0 invert' src={stat.icon} alt={stat.subHeading} />
                            </div>
                            <p className='text-gray-90'>{stat.text}</p>
                            <h3 className='heading5 bg-gradient-to-r from-[#ff7438] to-[#fe4f11] bg-clip-text text-transparent' data-count>{stat.heading}</h3>
                            <h6 className='font-semibold text-black-50'>{stat.subHeading}</h6>
                            <span className='absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#ff7438] to-[#fe4f11] transition-all duration-500' />
                        </div>
                    </div>
                ))}
            </div>
            <div className='h-full' data-aos="zoom-out">
                <div className='relative h-full flex flex-col rounded-[30px] bg-white border border-gray-30/50 shadow-xl md:p-8 p-5 overflow-hidden'>
                    <div className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#ff7438]/10 blur-3xl' />
                    <div className='absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-[#fe4f11]/10 blur-3xl' />
                    <div className='relative flex-1 min-h-[280px]'>
                        <Image className='object-contain' src={PakistanMapIMG} alt='Pakistan Map' fill sizes='(min-width: 1024px) 540px, 100vw' />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Progress
