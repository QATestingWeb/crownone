"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-common-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
gsap.registerPlugin(useGSAP);

interface ButtonProps {
  iconName: IconName | any;
  iconColor: string;
  textColor: string;
  buttonText: string;
  bgColorStart: string | any; 
  bgColorEnd: string | any;   
  hoverBgColorStart: string | any;
  hoverBgColorEnd: string | any;  
  order: string | any;
  link: string | any; 
}

const Button: React.FC<ButtonProps> = ({
  iconName,
  iconColor,
  textColor,
  buttonText,
  bgColorStart,
  bgColorEnd,
  hoverBgColorStart,
  hoverBgColorEnd,
  order,
  link, 
}) => {
  
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { contextSafe } = useGSAP({ scope: buttonRef });

  // Magnetic hover: the button drifts towards the cursor and springs back on leave.
  const handleMagnetMove = contextSafe((e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect();
    gsap.to(e.currentTarget, {
      x: (e.clientX - rect.left - rect.width / 2) * 0.3,
      y: (e.clientY - rect.top - rect.height / 2) * 0.3,
      duration: 0.4,
      ease: 'power3.out',
    });
  });

  const handleMagnetLeave = contextSafe((e: React.PointerEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.currentTarget as HTMLButtonElement).style.backgroundImage = `linear-gradient(to bottom, ${hoverBgColorStart}, ${hoverBgColorEnd})`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.currentTarget as HTMLButtonElement).style.backgroundImage = `linear-gradient(to bottom, ${bgColorStart}, ${bgColorEnd})`;
  };

  const buttonContent = (
    <button
      ref={buttonRef}
      type="button"
      className="rounded-10 flex items-center justify-center md:gap-5 gap-1 py-2 px-3 md:px-5 transition-colors duration-300 ease-in-out md:text-[16px] text-[12px]"
      style={{
        backgroundImage: `linear-gradient(to bottom, ${bgColorStart}, ${bgColorEnd})`,
        color: textColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerMove={handleMagnetMove}
      onPointerLeave={handleMagnetLeave}
    >
      {buttonText}
      <FontAwesomeIcon icon={['fas', iconName]} className={`w-5 ${order}`} color={iconColor} />
    </button>
  );

  return link ? (
    <Link href={link}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default Button;