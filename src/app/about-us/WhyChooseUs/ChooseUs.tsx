"use client"
import React from 'react'
import IconBox from '../../../../components/IconBox/IconBox'
import InnovaticeIcon from '../../../../public/Assets/about/icons/Innovative.svg'
import EnhancedeIcon from '../../../../public/Assets/about/icons/Enhanced.svg'
import RewardingceIcon from '../../../../public/Assets/about/icons/Rewarding.svg'
import StreamlinedIcon from '../../../../public/Assets/about/icons/Streamlined.svg'
import ExclusiveIcon from '../../../../public/Assets/about/icons/Exclusive.svg'
import WideProductIcon from '../../../../public/Assets/about/icons/WideProduct.svg'
import CrownOneIMG from '../../../../public/Assets/about/CrownOneApp.webp'
import Image from 'next/image'


const ChooseUs = () => {
    return (
        <div className="flex justify-center px-5 md:py-20 py-10">
        <div className='md:w-full md:max-w-[1150px]'>
            <div className="flex flex-col md:flex-row">
                <div className='md:w-[50%] order-last md:order-first flex flex-col justify-end '>
                    <h3 className='heading3' data-aos="fade-up">Crown One</h3>
                    <p data-aos="fade-up">Crown One is a cutting-edge platform designed to revolutionize the way retailers, mechanics, and customers interact in the world of two-wheelers. As a pioneering initiative by Crown, a trusted leader in the automotive industry, Crown One seamlessly combines innovation, technology, and convenience to create an all-in-one solution for your everyday business and personal needs. <br /><br />

                        At its core, Crown One is about empowerment. We provide mechanics and retailers with tools to streamline their operations, enhance customer experiences, and unlock new opportunities for growth. From managing points with our Cash Wallet to handling warranty claims, branding your shop, and accessing exclusive deals through Bundle Buys, Crown One simplifies processes and builds trust at every step.
                    </p>
                    <h4 className='heading5 md:mt-20 mt-10' data-aos="fade-up">Why Choose Crown One?</h4>
                    <div className="flex  md:gap-10 gap-5 md:mt-10 mt-8">
                        <div className='w-[50%]' data-aos="zoom-in" data-aos-duration="1000">
                        <IconBox key='01' icon={InnovaticeIcon} heading='Innovative Features' text='Easily verify product authenticity, make QR-based claims, and enjoy exclusive rewards.'/>
                        </div>
                        <div className='w-[50%]' data-aos="zoom-in" data-aos-duration="2000">
                        <IconBox key='02' icon={EnhancedeIcon} heading='Enhanced Business Tools' text='Strengthen your shop’s identity with professional branding and stand out in your community.' />
                        </div>
                    </div>
                </div>
                <div className="md:w-[50%] md:block hidden">
                    <Image src={CrownOneIMG} alt='Crown One App' width={600} data-aos="zoom-out" data-parallax='0.1'/>
                </div>
            </div>
            <div className="flex md:flex-nowrap flex-wrap md:gap-20 gap-5 md:mt-10 mt-8">
                <div className=' w-[45%]' data-aos="zoom-in" data-aos-duration="500">
                    <IconBox key='03' icon={RewardingceIcon} heading='Rewarding Experiences' text='Participate in exciting activities like Spin & Win and redeem rewards through the Inaam Bazaar for Mechanics.' />
                </div>
                <div className=' w-[45%]' data-aos="zoom-in" data-aos-duration="1000">
                    <IconBox key='04' icon={StreamlinedIcon} heading='Streamlined Processes' text='Enjoy hassle-free claim and complaint management, ensuring quick resolutions.' />
                </div>
                <div className=' w-[45%]' data-aos="zoom-in" data-aos-duration="2000">
                    <IconBox key='05' icon={ExclusiveIcon} heading='Exclusive Savings' text='Maximize your budget with bundle deals and cashback offers designed for mechanics and retailers.' />
                </div>
                <div className=' w-[45%]' data-aos="zoom-in" data-aos-duration="3000">
                    <IconBox key='06' icon={WideProductIcon} heading='Wide Product Access' text='Browse and order a comprehensive range of Crown automotive parts tailored for your business needs.' />
                </div>
            </div>
            <p className='mt-10' data-aos="fade-up">Our platform connects thousands of users nationwide, creating a thriving community where businesses grow, customers trust, and rewards flow effortlessly. Crown One bridges the gap between traditional practices and modern digital tools, ensuring that you stay ahead in a competitive market.
            </p>
        </div>
        </div>
    )
}

export default ChooseUs