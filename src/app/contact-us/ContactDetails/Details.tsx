import React from 'react'
import Image from 'next/image'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { socialIcons } from '../../../../components/Footer/Footer';

const contactItems = [
  {
    icon: FaMapMarkerAlt,
    label: 'Visit us',
    value: 'Suite # 120, Office Wing, 1st Floor, Park Towers, Clifton, Karachi, Pakistan.',
    href: 'https://www.google.com/maps/search/?api=1&query=Park+Towers+Clifton+Karachi',
  },
  { icon: FaPhone, label: 'Call us', value: '021 111 000 FIT (348)', href: 'tel:021111000348' },
  { icon: FaEnvelope, label: 'Email us', value: 'info@crowngroup.com.pk', href: 'mailto:info@crowngroup.com.pk' },
];

const Details = () => {
  return (
    <div className='relative overflow-hidden md:col-span-2 bg-black-70 text-white md:p-10 p-6 flex flex-col justify-between gap-10' data-aos-desktop="fade-right" data-aos-mobile="fade-up">
        {/* Decorative glows */}
        <div className='absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-400 opacity-30 blur-3xl pointer-events-none' />
        <div className='absolute -bottom-24 -left-16 w-56 h-56 rounded-full bg-orange-400 opacity-20 blur-3xl pointer-events-none' />

        <div className='relative'>
            <p className='text-orange-400 text-[13px] font-semibold uppercase tracking-[0.2em]'>Contact</p>
            <h3 className='md:text-[34px] text-[26px] font-bold leading-tight mt-2'>Get in touch</h3>
            <p className='text-white/70 mt-3'>Have a question about Crown One? Send us a message and our team will get back to you as soon as possible.</p>
        </div>

        <ul className='relative flex flex-col gap-4'>
            {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                    <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className='group flex items-start gap-4 p-4 rounded-20 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-400/60 transition-colors duration-300'
                    >
                        <span className='shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300' style={{ background: 'linear-gradient(135deg, #ff8a4c 0%, #fe4f11 100%)' }}>
                            <Icon />
                        </span>
                        <span>
                            <span className='block text-[12px] uppercase tracking-wider text-white/50'>{label}</span>
                            <span className='block text-[14px] md:text-[15px] mt-0.5'>{value}</span>
                        </span>
                    </a>
                </li>
            ))}
        </ul>

        <div className='relative flex gap-4'>
            {socialIcons.map((icon) => (
                <a key={icon.alt} href={icon.link} target='_blank' rel='noopener noreferrer' aria-label={icon.alt} className='opacity-70 hover:opacity-100 hover:-translate-y-1 transition-all duration-300'>
                    <Image src={icon.src} alt={icon.alt} />
                </a>
            ))}
        </div>
    </div>
  )
}

export default Details
