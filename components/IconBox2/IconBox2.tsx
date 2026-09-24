import Image from 'next/image'
import React from 'react'


interface IconBox2Props{
    icon: any;
    heading: string;
    text: string;
    subHeading: string;
}


 const IconBox2: React.FC<IconBox2Props> = ({icon, heading, text, subHeading}) => {
  return (
    <div className='flex flex-col md:gap-3 gap-2'>
        <Image src={icon} alt={heading}/>
        <p>{text}</p>
        <h3 className='heading3' data-count>{heading}</h3>
        <h6>{subHeading}</h6>        
    </div>
  )
}

export default IconBox2;