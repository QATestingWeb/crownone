import Image from 'next/image';
import React from 'react';


interface GradientContainerProps {
  imageSrc: string;
  title: string;
  description: string;
  gradient: string; 
  width: string; 
  aos: string;

}


const GradientContainer: React.FC<GradientContainerProps> = ({ imageSrc, title, description, gradient, width, aos }) => {
  return (
    <div className={`flex px-5 py-20 rounded-30 w-[100%] md:w-[${width}]`} style={{ background: gradient }} data-aos-desktop={aos} data-aos-mobile="fade-up" data-tilt='6'>
      <div className='w-[30%]'>
        <Image src={imageSrc} alt={title} width={180} height={100} />
      </div>
      <div className='flex flex-col justify-center w-[70%]'>
        <h4 className='text-xl font-bold'>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GradientContainer;