"use client"
import Logo from '../../public/Assets/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import Button from '../Button/Button';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

library.add(faArrowRight);
gsap.registerPlugin(useGSAP);

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [downloadLink, setDownloadLink] = useState('');
    const menuRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    useGSAP(() => {
        if (!isMenuOpen || !menuRef.current) return;
        gsap.timeline()
            .from(menuRef.current, { autoAlpha: 0, y: -16, scale: 0.96, transformOrigin: '50% 0%', duration: 0.35, ease: 'power3.out' })
            .from(menuRef.current.children, { autoAlpha: 0, y: -8, stagger: 0.05, duration: 0.25 }, '-=0.15');
    }, { dependencies: [isMenuOpen] });

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => setIsMenuOpen(false);

    // Close the menu whenever the route changes (e.g. browser back).
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const userAgent = navigator.userAgent;

        if (/android/i.test(userAgent)) {
            setDownloadLink('https://play.google.com/store/apps/details?id=com.csi.crownfamily&hl=en');
        }

        if (/iPad|iPhone|iPod/.test(userAgent)) {
            setDownloadLink('https://apps.apple.com/us/app/crown-one/id6449677909');
        }
    }, []);

    return (
        <div className='w-full flex justify-center items-center py-5 md:px-10 px-5 absolute' style={{zIndex: '9999'}}>
            <div className="md:w-lg justify-between flex items-center">
                <div className='md:w-[20%] w-[40%] relative z-[1000]' data-aos-desktop="fade-right" data-aos-mobile="fade-in">
                    <Link href='/'> <Image className='w-[70%] md:w-auto' src={Logo} alt="Logo"/> </Link>
                </div>
                <div className="md:w-[20%] md:flex hidden justify-center">
                <Link href="/" className="relative hover:text-orange-400 w-full text-center">
                        Home
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/about-us" className="relative hover:text-orange-400 w-full text-center">
                    About Us
                        <span className="underline-curve"></span>
                    </Link>
                    <Link href="/contact-us" className="relative hover:text-orange-400  w-full text-center">
                        Contact Us
                        <span className="underline-curve"></span>
                    </Link>
                </div>
                <div className='md:w-[20%] w-[50%]  md:flex relative z-[1000]' data-aos-desktop="fade-left">
                    <div className='md:flex hidden'>
                    <Button     
                        key='b-1'                    
                        iconName="arrow-right"
                        iconColor="white"
                        buttonText="Log in With Portal"
                        bgColorStart="#ff7438"
                        bgColorEnd="#fe4f11"
                        hoverBgColorStart="#fe4f11"
                        hoverBgColorEnd="#ff7438"
                        textColor="white"                        
                        order='order-last'
                        link='https://web.crownone.app/'
                    />
                    </div>
                    <div className='md:hidden flex '>
                    <Button     
                        key='b-01'                    
                        iconName="arrow-right"
                        iconColor="white"
                        buttonText="Download Our App"
                        bgColorStart="#ff7438"
                        bgColorEnd="#fe4f11"
                        hoverBgColorStart="#fe4f11"
                        hoverBgColorEnd="#ff7438"
                        textColor="white"                        
                        order='order-last'
                        link={downloadLink}
                    />
                    </div>
                </div>
                <div className="sm:flex md:hidden flex items-center relative z-[1000]">
                    <button
                        className="w-10 h-10 rounded-full flex items-center justify-center text-orange-400 bg-white/80 backdrop-blur shadow-md border border-gray-30/60 focus:outline-none"
                        onClick={handleMenuToggle}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                <>
                <div className="md:hidden fixed inset-0 bg-black-100/30 backdrop-blur-sm" style={{ zIndex: 998 }} onClick={closeMenu} aria-hidden="true" />
                <nav ref={menuRef} className="md:hidden absolute left-5 right-5 top-[76px] flex flex-col gap-1 p-3 rounded-[24px] bg-white shadow-2xl border border-gray-30/60" style={{ zIndex: 999 }}>
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={closeMenu}
                                className={`flex items-center justify-between px-4 py-3 rounded-[16px] text-[16px] font-medium transition-colors ${isActive ? 'bg-orange-400/10 text-orange-600' : 'text-black-70 hover:bg-gray-100'}`}
                            >
                                {label}
                                <FontAwesomeIcon icon={faArrowRight} className={`w-3.5 ${isActive ? 'text-orange-600' : 'text-gray-20'}`} />
                            </Link>
                        );
                    })}
                    <a
                        href="https://web.crownone.app/"
                        onClick={closeMenu}
                        className="mt-2 flex items-center justify-center gap-3 rounded-full py-3 text-white font-semibold"
                        style={{ background: 'linear-gradient(135deg, #ff8a4c 0%, #fe4f11 100%)' }}
                    >
                        Log in With Portal
                        <FontAwesomeIcon icon={faArrowRight} className="w-3.5" />
                    </a>
                </nav>
                </>
            )}
            </div>

        </div>
    );
};

export default Header;