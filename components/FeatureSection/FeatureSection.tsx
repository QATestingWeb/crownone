import React from 'react';
import Image from 'next/image';
import { features } from '../../src/app/Home/data';

const FeatureSection: React.FC = () => {
  return (
    <div className="w-full flex justify-center px-5" id='features'>
      <div className="w-lg relative">
        <h2
          className="heading2 text-black-100 text-center"
          data-aos-desktop="fade-up"
          data-aos-mobile="fade-up"
        >
          Unlock Endless Benefits
        </h2>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-gray-100 p-8 md:p-20 rounded-lg mt-10 md:mt-40 h-auto md:h-[40vh] flex flex-col md:flex-row relative ${feature.order}`}
            data-tilt="3"
          >
            
            <div
              className="w-full md:w-[50%]"
              data-aos-desktop={feature.aosText}
              data-aos-mobile="fade-in"
            >
              <h2 className="heading2">{feature.title}</h2>
              <p className="mt-4">{feature.description}</p>
            </div>

            
            <div
              className={`md:absolute ${feature.position} md:w-[50%] flex justify-center items-center gap-5`}
              data-aos-desktop={feature.aosImage}
              data-aos-mobile="fade-up"
            >
              <Image
                src={feature.image}
                alt={feature.imageAlt}
                width={400} 
                height={400}
                className="w-[20vh] md:w-[40vh] object-contain mt-5 md:mt-0"
                placeholder="blur" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
