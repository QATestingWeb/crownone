import React from 'react';
import type { Metadata } from 'next';
import BannerIMG from '../../../public/Assets/home/HeroBanner.webp';

export const metadata: Metadata = {
  title: 'Coming Soon',
  robots: { index: false, follow: true },
};

const ComingSoonPage = () => {
  return (
    <div className='md:h-[100vh] h-[50vh]' style={{
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        backgroundImage: `url(${BannerIMG.src})`,
        height: '100%',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        filter: 'blur(8px)',
        transform: 'scale(1.1)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: -1,
      }}></div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #fff4ed 20%, #ffa571 100%)',
        zIndex: -1,
      }}></div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: 'white',
        textAlign: 'center',
        flexDirection: 'column',
      }}>
        <h1 className='font-bold md:text-[85px] text-[40px] text-orange-400 stroke-black-100'>Coming Soon</h1>
        <p className='text-black-70 md:text-[22px] text-[16px]'>We are working hard to bring you something amazing. Stay tuned!</p>
      </div>
    </div>
  );
}

export default ComingSoonPage;