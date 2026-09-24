import React from 'react'
import CrownLogo from '../../../../public/Assets/about/Crown Group Logo.svg'
import Image from 'next/image'
import Button from '../../../../components/Button/Button'
import CrownLegacyIMG from '../../../../public/Assets/about/Crown-Group-Legacy.webp' 

const Legacy = () => {
    return (
        <div className="w-full flex justify-center items-center px-5 md:py-10 py-0">
        <div className='md:w-full md:max-w-[1150px] flex flex-col items-center'>
        <div className=' flex-col gap-4 md:flex-row flex '>
            <div className='md:w-[50%]' data-aos="fade-up">
                <Image src={CrownLogo} alt='Crown Group of Companies' />
                <h2 className='heading2 mt-4'>The Crown Group  Legacy</h2>
            </div>
            <div className='md:w-[50%]' data-aos="fade-up">
                <p className='md:mb-10 mb-4'>As a leading name in the two-wheeler industry, Crown has been delivering quality automotive products for decades. With a strong legacy of innovation and reliability, Crown is committed to empowering retailers, mechanics, and riders through groundbreaking solutions like Crown One.</p>                
                <Button
                    key='b-2'
                    iconName="arrow-right"
                    iconColor="white"
                    buttonText="Learn More About Crown Group"
                    bgColorStart="#ff7438"
                    bgColorEnd="#fe4f11"
                    hoverBgColorStart="#fe4f11"
                    hoverBgColorEnd="#ff7438"
                    textColor="white"
                    order='order-last'
                    link='https://crowngroup.com.pk/'
                    
                />
                
            </div>
            </div>            
            <Image className='md:mt-20 mt-10 w-[100%]' src={CrownLegacyIMG} alt='Crown Group Legacy' data-aos="zoom-in-up" data-parallax='0.15'/>
        </div>
        </div>
    )
}

export default Legacy