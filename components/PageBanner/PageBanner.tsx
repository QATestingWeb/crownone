import React from 'react';
import Link from 'next/link';
import Scene3D from '../Scene3D/Scene3D';

interface PageBannerProps {
    title: string;
    subtitle?: string;
    curveColor?: string; // match the background of the section below the banner
}

const BANNER_GRADIENT = 'linear-gradient(135deg, #ff8a4c 0%, #fe4f11 100%)';

// Edge-to-edge banner used at the top of inner pages, with its text kept on the 1150px content grid.
// Top padding clears the absolutely positioned header.
const PageBanner: React.FC<PageBannerProps> = ({ title, subtitle, curveColor = 'white' }) => {
    return (
        <div className='w-full md:pt-[110px] pt-[90px]'>
            <div className='relative overflow-hidden w-full md:min-h-[330px] min-h-[240px] flex justify-center px-5 md:pt-10 pt-8' style={{ background: BANNER_GRADIENT }}>
                {/* Dot grid, fading out towards the right where the 3D parts float */}
                <div
                    className='absolute inset-0'
                    style={{
                        backgroundImage: 'radial-gradient(rgba(255,255,255,0.28) 1.2px, transparent 1.2px)',
                        backgroundSize: '22px 22px',
                        WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 65%)',
                        maskImage: 'linear-gradient(to right, black 0%, transparent 65%)',
                    }}
                />
                <div className='absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-white/15 blur-3xl' />
                <div className='absolute -bottom-40 right-[10%] w-[480px] h-[480px] rounded-full bg-[#ffb07a]/40 blur-3xl' />
                <Scene3D />

                <div className='relative w-full max-w-[1150px] flex flex-col justify-center text-white md:pb-10 pb-8'>
                    <nav className='inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-[13px] font-medium' data-aos='fade-up'>
                        <Link href='/' className='text-white/80 hover:text-white transition-colors'>Home</Link>
                        <span className='text-white/60'>/</span>
                        <span>{title}</span>
                    </nav>
                    <h1 className='font-bold md:text-[60px] text-[34px] md:leading-[68px] leading-[40px] md:mt-5 mt-3' data-split>{title}</h1>
                    <span className='block md:w-20 w-14 h-1 rounded-full bg-white md:mt-4 mt-3' />
                    {subtitle && <p className='md:text-[19px] text-[15px] md:mt-4 mt-3 text-white/90 max-w-[560px]' data-aos='fade-up'>{subtitle}</p>}
                </div>

                {/* Curved bottom edge blending into the page */}
                <svg className='absolute -bottom-px left-0 w-full md:h-[50px] h-[24px]' viewBox='0 0 1440 50' preserveAspectRatio='none' aria-hidden='true'>
                    <path d='M0,50 C360,0 1080,0 1440,50 Z' fill={curveColor} />
                </svg>
            </div>
        </div>
    );
}

export default PageBanner;
