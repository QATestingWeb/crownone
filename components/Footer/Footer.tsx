import Image from 'next/image';
import React from 'react';
import FooterLogo from '../../public/Assets/Footer-Logo.svg';
import facebookIcon from '../../public/Assets/icons/Facebook.svg';
import linkedinIcon from '../../public/Assets/icons/Linkedin.svg';
import instagramIcon from '../../public/Assets/icons/IG.svg';
import twitterIcon from '../../public/Assets/icons/X.svg';
import youtubeIcon from '../../public/Assets/icons/YT.svg';
import Link from 'next/link';


export const socialIcons = [
    { src: facebookIcon, alt: 'Facebook', link: 'https://facebook.com/crowncrlf' },
    { src: linkedinIcon, alt: 'LinkedIn', link: 'https://linkedin.com/company/crowncrlf/posts/?feedView=all' },
    { src: instagramIcon, alt: 'Instagram', link: 'https://instagram.com/crowncrlf' },
    { src: youtubeIcon, alt: 'YouTube', link: 'https://youtube.com/@crowncrlf' },

];

const footerLinks = [
    {
        heading: 'About Us',
        links: [
            { label: 'Blog', href: '/blog' },
            { label: 'About Us', href: '/about-us' },
        ],
    },
    {
        heading: 'Help & Support',
        links: [
            { label: 'Help & Support', href: '/help-and-support' },
            { label: 'Contact', href: '/contact-us' },
            { label: 'FAQS', href: '/faqs' },
        ],
    },
    {
        heading: 'Legal',
        links: [
            { label: 'Terms & Conditions', href: '/terms-and-conditions' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
        ],
    },
];

const Footer: React.FC = () => {
    return (
        <footer className='relative w-full bg-black-100 overflow-hidden flex justify-center md:px-10 px-5'>
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff7438] to-[#fe4f11]' />
            <div className='absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-[#ff7438]/10 blur-3xl pointer-events-none' />

            <div className='relative w-full max-w-[1150px] md:pt-20 pt-14 md:pb-8 pb-6'>
                <div className='flex md:flex-row flex-col justify-between md:gap-10 gap-10' data-aos-desktop="fade-up">
                    <div className='md:w-[34%]' data-aos-mobile="fade-in">
                        <Image src={FooterLogo} alt='Footer Logo' className='md:w-[260px] w-[210px] h-auto' />
                        <p className='text-white/60 md:mt-5 mt-4 max-w-[300px]'>Empowering retailers, mechanics and riders across Pakistan with one app.</p>
                        <div className='flex gap-3 md:mt-6 mt-5'>
                            {socialIcons.map((icon) => (
                                <a
                                    key={icon.alt}
                                    href={icon.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={icon.alt}
                                    className='w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-orange-400 hover:border-orange-400 hover:-translate-y-1 transition-all duration-300'
                                >
                                    <Image src={icon.src} alt={icon.alt} className='w-[18px] h-[18px]' />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className='md:w-[60%] grid grid-cols-2 min-[640px]:grid-cols-3 gap-8'>
                        {footerLinks.map((column) => (
                            <div key={column.heading} className='text-white' data-aos-mobile="fade-up">
                                <h3 className='font-bold text-lg'>{column.heading}</h3>
                                <span className='block w-8 h-[3px] rounded-full bg-orange-400 mt-2 mb-4' />
                                <ul className='flex flex-col gap-3 md:text-[15px] text-[13px]'>
                                    {column.links.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className='text-white/70 hover:text-orange-400 inline-block hover:translate-x-1 transition-all duration-300'>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='border-t border-white/10 md:mt-16 mt-10 pt-6 flex md:flex-row flex-col md:items-center justify-between gap-2 text-white/60'>
                    <p className='md:!text-[14px] !text-[12px]'>© {new Date().getFullYear()} <a href='https://crowngroup.com.pk/' className='text-white hover:text-orange-400 transition-colors'>Crown Group</a>. All Rights Reserved.</p>
                    <p className='md:!text-[14px] !text-[12px]'>A Crown Group initiative</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
