"use client"
import React from 'react'
import InnovaticeIcon from '../../../../public/Assets/about/icons/Innovative.svg'
import EnhancedeIcon from '../../../../public/Assets/about/icons/Enhanced.svg'
import RewardingceIcon from '../../../../public/Assets/about/icons/Rewarding.svg'
import StreamlinedIcon from '../../../../public/Assets/about/icons/Streamlined.svg'
import ExclusiveIcon from '../../../../public/Assets/about/icons/Exclusive.svg'
import WideProductIcon from '../../../../public/Assets/about/icons/WideProduct.svg'
import CrownOneIMG from '../../../../public/Assets/about/CrownOneApp.webp'
import Image from 'next/image'

const features = [
    { icon: InnovaticeIcon, heading: 'Innovative Features', text: 'Easily verify product authenticity through QR scanning, earn cash rewards, and enjoy exclusive benefits.' },
    { icon: EnhancedeIcon, heading: 'Business Branding', text: 'Give your shop a professional look and help it stand out in your area.' },
    { icon: RewardingceIcon, heading: 'Rewarding Experiences', text: 'Enjoy Spin & Win, earn rewards and redeem them at Inaam Bazaar for Mechanics.' },
    { icon: StreamlinedIcon, heading: 'Streamlined Processes', text: 'Submit claims and complaints easily and get quick solutions.' },
    { icon: ExclusiveIcon, heading: 'Exclusive Savings', text: 'Get bundle deals and special Rewards to save more on your purchases.' },
    { icon: WideProductIcon, heading: 'Wide Product Access', text: 'Browse and order a wide range of genuine Crown automotive parts for your business.' },
]

const Pill = ({ label }: { label: string }) => (
    <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-30/60 text-orange-400 text-[13px] font-semibold uppercase tracking-wider' data-aos="fade-up">
        <span className='w-2 h-2 rounded-full bg-orange-400' />
        {label}
    </span>
)

const ChooseUs = () => {
    return (
        <div className="flex justify-center px-5 md:py-20 py-12">
        <div className='w-full max-w-[1150px]'>
            {/* Intro */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-16 gap-10">
                <div className='md:w-[55%]'>
                    <Pill label='Who We Are' />
                    <h3 className='heading3 mt-4' data-split>Crown <span className='text-orange-400'>One</span></h3>
                    <span className='block md:w-20 w-14 h-1 rounded-full bg-gradient-to-r from-[#ff7438] to-[#fe4f11] md:mt-5 mt-3' />
                    <p className='text-gray-50 md:mt-6 mt-4' data-aos="fade-up">Crown One is a cutting-edge platform designed to revolutionize the way retailers, mechanics, and customers interact in the world of two-wheelers. As a pioneering initiative by Crown, a trusted leader in the automotive industry, Crown One seamlessly combines innovation, technology, and convenience to create an all-in-one solution for your everyday business and personal needs.</p>
                    <p className='text-gray-50 mt-4 md:pl-5 pl-4 border-l-4 border-orange-400' data-aos="fade-up">At its core, Crown One is about empowerment. We provide mechanics and retailers with tools to streamline their operations, enhance customer experiences, and unlock new opportunities for growth. From managing points with our Cash Wallet to handling warranty claims, branding your shop, and accessing exclusive deals through Bundle Buys, Crown One simplifies processes and builds trust at every step.</p>
                </div>
                <div className='relative flex justify-center md:w-[45%]' data-aos="fade-left">
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[440px] md:h-[440px] w-[280px] h-[280px] rounded-full bg-gradient-to-br from-[#ff8a4c]/25 to-[#fe4f11]/10 blur-2xl' />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[400px] md:h-[400px] w-[250px] h-[250px] rounded-full border-2 border-dashed border-orange-400/30' />
                    <Image className='relative md:w-[500px] w-[280px] h-auto' src={CrownOneIMG} alt='Crown One App' data-tilt='8' />
                </div>
            </div>

            {/* Why choose */}
            <div className='flex flex-col items-center text-center md:mt-24 mt-14'>
                <Pill label='Why Crown One' />
                <h4 className='heading4 mt-4' data-split>Why Choose <span className='text-orange-400'>Crown One?</span></h4>
            </div>
            <div className="grid grid-cols-1 min-[640px]:grid-cols-2 md:grid-cols-3 md:gap-6 gap-4 md:mt-12 mt-8">
                {features.map((feature, i) => (
                    <div key={feature.heading} data-aos="zoom-in" data-aos-duration={String(800 + i * 300)}>
                        <div
                            className='group relative h-full flex flex-col gap-3 md:p-7 p-5 rounded-20 bg-white border border-gray-30/60 shadow-sm hover:shadow-xl hover:border-orange-400/60 transition-all duration-300 overflow-hidden'
                            data-tilt='6'
                        >
                            <div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff8a4c] to-[#fe4f11] shadow-lg shadow-orange-400/30 flex items-center justify-center transition-transform duration-300 group-hover:rotate-6'>
                                <Image className='w-7 h-7 brightness-0 invert' src={feature.icon} alt={feature.heading} />
                            </div>
                            <h6 className='heading6 mt-2'>{feature.heading}</h6>
                            <p className='text-gray-90'>{feature.text}</p>
                            <span className='absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#ff7438] to-[#fe4f11] transition-all duration-500' />
                        </div>
                    </div>
                ))}
            </div>

            {/* Closing statement */}
            <div
                className='relative overflow-hidden rounded-[30px] shadow-xl md:mt-16 mt-10 md:px-12 md:py-10 px-6 py-8'
                style={{ background: 'linear-gradient(135deg, #ff8a4c 0%, #fe4f11 100%)' }}
                data-aos="fade-up"
            >
                <div
                    className='absolute inset-0'
                    style={{
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1.2px, transparent 1.2px)',
                        backgroundSize: '22px 22px',
                        WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
                        maskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
                    }}
                />
                <div className='absolute -bottom-32 -right-20 w-[380px] h-[380px] rounded-full bg-white/15 blur-3xl' />
                <p className='relative text-white md:!text-[18px] md:leading-[30px] leading-[24px]'>
                    Our platform brings together thousands of users nationwide, building a strong community where businesses grow, customers build trust, and rewards are earned with ease. Crown One connects traditional business practices with modern digital solutions, helping you stay connected, competitive, and ready for the future.
                </p>
            </div>
        </div>
        </div>
    )
}

export default ChooseUs
