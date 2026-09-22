import Image from 'next/image';
import React from 'react';
import FooterLogo from '../../public/Assets/Footer-Logo.svg';
import facebookIcon from '../../public/Assets/icons/Facebook.svg';
import linkedinIcon from '../../public/Assets/icons/Linkedin.svg';
import instagramIcon from '../../public/Assets/icons/IG.svg';
import twitterIcon from '../../public/Assets/icons/X.svg';
import youtubeIcon from '../../public/Assets/icons/YT.svg';
import Link from 'next/link';


const socialIcons = [
    { src: facebookIcon, alt: 'Facebook', link: 'https://facebook.com/crowncrlf' },
    { src: linkedinIcon, alt: 'LinkedIn', link: 'https://linkedin.com/company/crowncrlf/posts/?feedView=all' },
    { src: instagramIcon, alt: 'Instagram', link: 'https://instagram.com/crowncrlf' },
    { src: youtubeIcon, alt: 'YouTube', link: 'https://youtube.com/@crowncrlf' },

];

const Footer: React.FC = () => {
    return (
        <div className='w-full bg-black-100 flex justify-center items-center md:py-[150px] py-20 md:px-10 px-5'>
            <div className="w-lg flex md:flex-row flex-col justify-between gap-10" data-aos-desktop="fade-up">
                <div className='md:w-[30%]' data-aos-mobile="fade-in">
                    <Image src={FooterLogo} alt='Footer Logo' />
                    <div className="flex my-5 gap-5">
                        {socialIcons.map((icon, index) => (
                           <a href={icon.link}> <Image  key={index} src={icon.src} alt={icon.alt} /></a>
                        ))}
                    </div>
                    <p className='text-white'>© 2025 <a href='https://crowngroup.com.pk/'>Crown Group</a>. All Rights Reserved.</p>
                </div>
                <div className='text-white md:w-[20%]'>
                    <h3 className='font-bold text-xl mb-2' data-aos-mobile="fade-up">About Us</h3>
                    <h4 className='md:text-[15px] text-[13px] cursor-pointer' data-aos-mobile="fade-up">
                        <Link href='/coming-soon' className='hover:text-orange-400 block mb-2' >Blog</Link>
                        {/* <Link href='/coming-soon' className='hover:text-orange-400 block mb-2' >Careers</Link> */}
                        <Link href='/about-us' className='hover:text-orange-400 block mb-2' >About Us</Link>
                    </h4>
                </div>
                
                <div className='text-white md:w-[20%]'>
                    <h3 className='font-bold text-xl mb-2' data-aos-mobile="fade-up">Help & Support</h3>
                    <h4 className='md:text-[15px] text-[13px] cursor-pointer' data-aos-mobile="fade-up">
                        <Link href='/coming-soon' className='hover:text-orange-400 block mb-2' >Help & Support</Link>
                        <Link href='/contact-us' className='hover:text-orange-400 block mb-2' >Contact </Link>
                        <Link href='/coming-soon' className='hover:text-orange-400 block mb-2' >FAQS</Link>
                    </h4>
                </div>
                <div className='text-white md:w-[20%]'>
                    <h3 className='font-bold text-xl mb-2' data-aos-mobile="fade-up">Legal</h3>
                    <h4 className='md:text-[15px] text-[13px] cursor-pointer' data-aos-mobile="fade-up">
                        <Link href='/coming-soon' className='hover:text-orange-400 block mb-2' >Terms & Conditions</Link>
                        <Link href='/coming-soon' className='hover:text-orange-400 block mb-2' >Privacy Policy</Link>
                        <Link href='/coming-soon' className='hover:text-orange-400 block mb-2' >Warranty Policy</Link>
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Footer;