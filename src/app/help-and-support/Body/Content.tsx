import React from 'react'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const topics = [
    {
        title: 'Getting Started',
        description: 'Download Crown One from the App Store or Google Play, register with your business details and start exploring the catalog.',
    },
    {
        title: 'Orders & Delivery',
        description: 'Browse the catalog, add parts to your cart and place orders. Track order status and view your order history in the app.',
    },
    {
        title: 'Cash Wallet & Points',
        description: 'Earn points through QR scans and rewards, track them securely in your Cash Wallet, and use them for transfers and top-ups.',
    },
    {
        title: 'Inaam Bazaar & QR Scans',
        description: 'Scan genuine Crown products to earn daily rewards, spin the wheel and take part in exclusive schemes and offers.',
    },
    {
        title: 'Warranty Claims',
        description: 'Submit and track warranty claims for eligible Crown products directly through the app.',
    },
    {
        title: 'Account & Privacy',
        description: 'Keep your profile and business details up to date. Learn how we collect, use and protect your information.',
        link: '/privacy-policy',
        linkText: 'Read Privacy Policy',
    },
];

const Content = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-[1150px] flex flex-col gap-10 md:py-20 py-10 px-5">
                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h2 className='heading1'>How can we help?</h2>
                    <p>Find help with the most common topics below. If you can&apos;t find what you&apos;re looking for, check our <Link href='/faqs' className='text-orange-600 hover:underline'>FAQs</Link> or get in touch with our support team.</p>
                </div>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                    {topics.map((topic, index) => (
                        <div key={index} className='flex flex-col gap-2 p-5 rounded-10 bg-gray-10 border-b-2 border-orange-400' data-aos="fade-up" data-tilt='8'>
                            <h3 className='heading6'>{topic.title}</h3>
                            <p className='md:text-[15px] text-[13px]'>{topic.description}</p>
                            {topic.link && (
                                <Link href={topic.link} className='text-orange-600 hover:underline md:text-[15px] text-[13px] mt-auto'>{topic.linkText}</Link>
                            )}
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Contact Support</h3>
                    <p>Our team is here to help. Reach out through any of the channels below or use our <Link href='/contact-us' className='text-orange-600 hover:underline'>contact form</Link>.</p>
                    <ul className='flex flex-col gap-4 mt-2'>
                        <li className='flex gap-2 text-[13px] md:text-[15px]'><FaEnvelope className='text-orange-600'/>info@crownone.app</li>
                        <li className='flex gap-2 text-[13px] md:text-[15px]'><FaPhone className='text-orange-600'/>021-111-000-348</li>
                        <li className='flex gap-2 text-[13px] md:text-[15px]'><FaMapMarkerAlt className='text-orange-600'/>Suite # 120, Office Wing, 1st Floor, Park Towers, Clifton, Karachi, Pakistan.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Content
