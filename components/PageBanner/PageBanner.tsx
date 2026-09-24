import React from 'react';
import Scene3D from '../Scene3D/Scene3D';

interface PageBannerProps {
    title: string;
    subtitle?: string;
}

// Contained, rounded banner card used at the top of inner pages. Top padding clears the absolutely positioned header.
const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle }) => {
    return (
        <div className='w-full flex justify-center px-5 md:pt-[110px] pt-[90px]'>
            <div
                className='relative overflow-hidden w-full max-w-[1150px] md:h-[230px] h-[170px] rounded-[30px] shadow-xl flex flex-col justify-center md:px-12 px-6'
                style={{ background: 'linear-gradient(135deg, #ff8a4c 0%, #fe4f11 100%)' }}
            >
                <Scene3D />
                <div className='relative text-white'>
                    <h1 className='font-bold md:text-[48px] text-[28px] md:leading-[56px] leading-[34px]' data-split>{title}</h1>
                    {subtitle && <p className='md:text-[16px] text-[13px] md:mt-4 mt-2 text-white/90' data-aos='fade-up'>{subtitle}</p>}
                </div>
            </div>
        </div>
    );
}

export default PageBanner;
