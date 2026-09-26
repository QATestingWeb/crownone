"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../../../components/Button/Button';
import Scene3D from '../../../../components/Scene3D/Scene3D';
import AppStoreIMG from '../../../../public/Assets/icons/App Store.svg';
import PlayStoreIMG from '../../../../public/Assets/icons/Play Store.svg';
import FeatureIMG1 from '../../../../public/Assets/home/CrownOneHero1.webp';
import FeatureIMG2 from '../../../../public/Assets/home/CrownOneHero2.webp';
import FeatureIMG3 from '../../../../public/Assets/home/CrownOneHero3.webp';
import FeatureIMG4 from '../../../../public/Assets/home/CrownOneHero4.webp';
import FeatureIMG5 from '../../../../public/Assets/home/CrownOneHero5.webp';
import FeatureIMG6 from '../../../../public/Assets/home/CrownOneHero6.webp';

const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
  };

  const calculateParallax = (offset: number) => ({
    transform: `translate(${(mousePos.x * offset) / 200}px, ${(mousePos.y * offset) / 200}px)`,
    transition: 'transform 0.2s ease-out',
  });

  return (
    <div
      className="w-full flex flex-col items-center justify-center md:pt-[0vh] container hero-banner relative isolate"
    >
      <Scene3D variant="hero" className="-z-10" />
       <div className='w-full md:mt-[10vh] mt-20 flex justify-center items-center'>
      <video
        className="w-full md:h-[70vh] h-[32vh] object-cover"
        autoPlay
        loop        
        playsInline
        muted                  
      >
        <source src="/Assets/Crowne-One-Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      
      {/* Kept narrower than the 3D scene's clear column (HERO_CLEAR_PX) so floating parts never cross the text */}
      <div className="w-full max-w-[900px] flex flex-col items-center text-center md:pt-12 pt-8 px-5">
        <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-gray-30/60 shadow-sm text-orange-400 md:text-[13px] text-[11px] font-semibold uppercase tracking-wider' data-aos="fade-up">
          <span className='w-2 h-2 rounded-full bg-orange-400' />
          One app for retailers &amp; mechanics
        </span>
        <h2 className="heading2 md:!leading-[60px] mt-5 text-black-100" data-split>
          Simplify Your Business, <span className='text-orange-400'>Maximize Your Potential</span>
        </h2>
        <p className='text-gray-50 md:!text-[18px] mt-4 max-w-[700px]' data-aos="fade-up">Manage payments, shop branding, complaints, and more – all in one app!</p>

        <div className="flex items-center justify-center md:gap-5 gap-3 md:mt-8 mt-6" data-aos="fade-up">
          <a href="https://apps.apple.com/us/app/crown-one/id6449677909" className='hover:-translate-y-1 transition-transform duration-300'>
            <Image className="md:w-[180px] w-[140px] h-auto" src={AppStoreIMG} alt="App Store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.csi.crownfamily&hl=en" className='hover:-translate-y-1 transition-transform duration-300'>
            <Image className="md:w-[180px] w-[140px] h-auto" src={PlayStoreIMG} alt="Play Store" />
          </a>
        </div>

        <div className='md:mt-4 mt-3' data-aos="fade-up">
          <Button
            iconName="arrow-right"
            iconColor="#ff7438"
            buttonText="Explore More Features"
            bgColorStart="transparent"
            bgColorEnd="transparent"
            hoverBgColorStart="transparent"
            hoverBgColorEnd="transparent"
            textColor="#ff7438"
            order="order-last"
            link="#features"
          />
        </div>

        <div className='flex items-center justify-center md:gap-10 gap-5 md:mt-6 mt-5 md:px-8 px-5 md:py-4 py-3 rounded-full bg-white/80 backdrop-blur border border-gray-30/60 shadow-sm' data-aos="fade-up">
          {[
            { value: '70,000+', label: 'Mechanics' },
            { value: '25,000+', label: 'Retailers' },
            { value: '100K+', label: 'Downloads' },
          ].map((stat, i) => (
            <div key={stat.label} className={`flex flex-col items-center ${i > 0 ? 'md:pl-10 pl-5 border-l border-gray-30/60' : ''}`}>
              <span className='font-extrabold md:text-[20px] text-[15px] text-orange-400 leading-tight'>{stat.value}</span>
              <span className='md:text-[13px] text-[11px] text-gray-90'>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      
      <div
        className="md:w-lg md:flex justify-around items-center relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Left Column */}
        <div className="md:block hidden">
          <div data-aos="zoom-in-down" data-aos-duration="2000">
            <div style={calculateParallax(-9)}>
              <Image src={FeatureIMG5} alt="Feature 5" />
            </div>
          </div>
          <div data-aos="zoom-out" data-aos-duration="2500">
            <div style={calculateParallax(-2)}>
              <Image src={FeatureIMG6} alt="Feature 6" />
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="flex justify-center relative ">
          <div data-aos="flip-left" data-aos-duration="1500">
            <Image className="md:w-[50vh] w-[40vh]" src={FeatureIMG1} alt="Feature 1" />
          </div>
          <div className='absolute md:top-40 top-20 left-auto right-auto' data-aos="fade-up" data-aos-duration="4000">
            <div
              className="md:w-auto w-[100%]" 
              style={calculateParallax(-2)}
            >
              <Image  src={FeatureIMG2} alt="Feature 2" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:block hidden">
          <div data-aos="zoom-out" data-aos-duration="2500">
            <div style={calculateParallax(2)}>
              <Image src={FeatureIMG3} alt="Feature 3" />
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="2000">
            <div style={calculateParallax(7)}>
              <Image src={FeatureIMG4} alt="Feature 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
