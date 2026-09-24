import React from 'react'
import IconBox2 from '../../../../components/IconBox2/IconBox2'
import RecommendedIcon from '../../../../public/Assets/about/icons/Recommended.svg'
import SoldIcon from '../../../../public/Assets/about/icons/Sold.svg'
import DownloadedIcon from '../../../../public/Assets/about/icons/Downloaded.svg'
import RatedIcon from '../../../../public/Assets/about/icons/Rated.svg'
import PakistanMapIMG from '../../../../public/Assets/about/PakistanMap.webp'
import Image from 'next/image'


const Progress = () => {
  return (
    <div className="w-full flex justify-center items-center px-5">
    <div className='md:w-full md:max-w-[1150px] '>
        <h4 className='heading4' data-aos="fade-up">Numbers that Speak for Themselves</h4>
        <div className="flex md:flex-nowrap flex-wrap md:gap-10 gap-5 md:mt-10 mt-8 md:justify-between">
            <div className='w-[40%] md:w-auto' data-aos="zoom-in" data-aos-duration="5000">
            <IconBox2 key='01' icon={RecommendedIcon} text="Recommended by" heading='70,000+' subHeading='Mechanics' />
            </div>
            <div className='w-[40%] md:w-auto' data-aos="zoom-in" data-aos-duration="1000">
            <IconBox2 key='02' icon={SoldIcon} text="Sold by over" heading='25,000+' subHeading='Retailers' />
            </div>
            <div className='w-[40%] md:w-auto' data-aos="zoom-in" data-aos-duration="2000">
            <IconBox2 key='03' icon={DownloadedIcon} text="Downloaded Over" heading='100K+' subHeading='Users on Play Store' />
            </div>
            <div className='w-[40%] md:w-auto' data-aos="zoom-in" data-aos-duration="3000">
            <IconBox2 key='04' icon={RatedIcon} text="Highly Rated with" heading='14.1K' subHeading='Reviews on Play Store' />
            </div>
        </div>
        <Image className='md:my-40 my-10' src={PakistanMapIMG} alt='Pakistan Map' data-aos="zoom-out" data-parallax='0.15'/>
    </div>
    </div>
  )
}

export default Progress