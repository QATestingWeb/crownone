import React from 'react'
import Image from 'next/image'
import FinancesIcon from '../../../../public/Assets/icons/Manage-Finances-Seamlessly.svg'
import ScanIcon from '../../../../public/Assets/icons/Scan-Smart.svg'
import SaveIcon from '../../../../public/Assets/icons/Save-big.svg'
import SpinIcon from '../../../../public/Assets/icons/SPin-and-win.svg'

// Bento layout: each row splits 3/5 + 2/5, alternating sides.
const benefits = [
    {
        icon: FinancesIcon, tag: 'Cash Wallet', title: 'Manage Finances Seamlessly',
        description: 'Track, transfer, and save your points effortlessly with our all-in-one Cash Wallet.',
        gradient: 'linear-gradient(135deg, #FFF1F1 0%, #FFFFFF 100%)', glow: 'bg-[#ffb4b4]', span: 'md:col-span-3', aos: 'fade-right',
    },
    {
        icon: ScanIcon, tag: 'QR Scan', title: 'Scan Smart',
        description: 'Verify product authenticity instantly using QR Scan technology.',
        gradient: 'linear-gradient(135deg, #FBFEE7 0%, #FFFFFF 100%)', glow: 'bg-[#e4f58a]', span: 'md:col-span-2', aos: 'fade-left',
    },
    {
        icon: SaveIcon, tag: 'Bundle Buys', title: 'Save Big',
        description: 'Enjoy exclusive deals on bundle buys and exciting cashback rewards.',
        gradient: 'linear-gradient(135deg, #FCF7EA 0%, #FFFFFF 100%)', glow: 'bg-[#f7dc8f]', span: 'md:col-span-2', aos: 'fade-right',
    },
    {
        icon: SpinIcon, tag: 'Rewards', title: 'Spin & Win',
        description: 'Get amazing prizes and perks with just a few taps.',
        gradient: 'linear-gradient(135deg, #F1F2FC 0%, #FFFFFF 100%)', glow: 'bg-[#c3c7f5]', span: 'md:col-span-3', aos: 'fade-left',
    },
]

const Benefits = () => {
    return (
        <div className="w-full flex justify-center md:px-10 px-5 md:py-24 py-14">
            <div className="w-full max-w-[1150px]">
                <div className='flex flex-col items-center text-center'>
                    <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-30/60 text-orange-400 text-[13px] font-semibold uppercase tracking-wider' data-aos="fade-up">
                        <span className='w-2 h-2 rounded-full bg-orange-400' />
                        Why Crown One
                    </span>
                    <h2 className='heading2 text-black-100 mt-4' data-split>Unlock Endless <span className='text-orange-400'>Benefits</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6 gap-4 md:mt-12 mt-8">
                    {benefits.map((benefit, i) => (
                        <div key={benefit.title} className={benefit.span} data-aos-desktop={benefit.aos} data-aos-mobile="fade-up">
                            <div
                                className='group relative h-full overflow-hidden rounded-[30px] border border-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center md:gap-6 gap-4 md:p-8 p-5'
                                style={{ background: benefit.gradient }}
                                data-tilt='6'
                            >
                                <div className={`absolute -top-16 -left-16 w-48 h-48 rounded-full ${benefit.glow} opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-70`} />
                                <div className='relative shrink-0 md:w-[120px] w-[80px]'>
                                    <Image
                                        src={benefit.icon}
                                        alt={benefit.title}
                                        className='w-full h-auto animate-float drop-shadow-xl transition-transform duration-500 group-hover:scale-110'
                                        style={{ animationDelay: `${i * 0.6}s` }}
                                    />
                                </div>
                                <div className='relative flex flex-col'>
                                    <span className='self-start px-3 py-1 rounded-full bg-white/80 border border-gray-30/60 text-[11px] font-semibold uppercase tracking-wider text-orange-400'>{benefit.tag}</span>
                                    <h4 className='md:text-[22px] text-[17px] font-bold leading-tight text-black-100 mt-3'>{benefit.title}</h4>
                                    <p className='text-gray-50 mt-2'>{benefit.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Benefits
