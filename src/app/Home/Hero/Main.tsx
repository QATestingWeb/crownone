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
      
      <div className=" flex items-center justify-center md:flex-row flex-col gap-4 pt-5 md:px-10 px-5 text-center">
        <div className="flex flex-col justify-center items-center text-black gap-3">
          <h2 className="heading2" data-split>Simplify Your Business, Maximize Your Potential</h2>
          <p>Manage payments, shop branding, complaints, and more – all in one app!</p>
          <div className='md:flex hidden'>
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
          <div className="md:flex hidden md:gap-10 gap-5">
            <a href="https://apps.apple.com/us/app/crown-one/id6449677909">
              <Image className="w-20 md:w-[25vh]" src={AppStoreIMG} alt="App Store" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.csi.crownfamily&hl=en">
              <Image className="w-20 md:w-[25vh]" src={PlayStoreIMG} alt="Play Store" />
            </a>
          
          </div>
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
