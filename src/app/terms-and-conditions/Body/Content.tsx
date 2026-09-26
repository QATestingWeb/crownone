import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
    faBook, faUserCheck, faUserGear, faScrewdriverWrench, faCartShopping, faTruckFast,
    faRotateLeft, faCopyright, faScaleBalanced, faShieldHalved, faPenToSquare,
    faEnvelope, faPhone, faLocationDot, faCheck, faCircleExclamation, faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

type Block =
    | { type: 'p'; text: React.ReactNode }
    | { type: 'list'; items: React.ReactNode[] }
    | { type: 'sub'; title: string; intro?: string; items: string[] }
    | { type: 'link'; label: string; href: string }

type Tone = 'default' | 'warm' | 'dark'

interface Section {
    id: string;
    title: string;
    icon: IconDefinition;
    tone?: Tone;
    blocks: Block[];
}

const sections: Section[] = [
    {
        id: 'definitions', title: 'Definitions', icon: faBook,
        blocks: [{
            type: 'list', items: [
                '"Crown One" refers to our B2B platform designed for retailers and mechanics to buy and sell automotive parts.',
                '"User" refers to anyone accessing or using our services.',
                '"We," "Us," and "Our" refer to Crown One and its affiliated entities.',
                '"Services" refer to the website, mobile app, and all features provided by Crown One.',
            ],
        }],
    },
    {
        id: 'eligibility', title: 'Eligibility', icon: faUserCheck,
        blocks: [
            { type: 'p', text: 'To use Crown One, you must:' },
            {
                type: 'list', items: [
                    'Provide accurate business details if registering as a retailer or mechanic.',
                    'Use the platform for legitimate business purposes only.',
                ],
            },
        ],
    },
    {
        id: 'user-account', title: 'User Account', icon: faUserGear,
        blocks: [
            {
                type: 'sub', title: 'Account Registration', items: [
                    'You must create an account to access certain features.',
                    'Provide accurate and up-to-date information.',
                    'You are responsible for maintaining account confidentiality.',
                ],
            },
            {
                type: 'sub', title: 'Account Termination', intro: 'We reserve the right to suspend or terminate accounts that:', items: [
                    'Violate these Terms and Conditions.',
                    'Engage in fraudulent activities.',
                    'Misuse or manipulate the platform.',
                ],
            },
        ],
    },
    {
        id: 'use-of-services', title: 'Use of Services', icon: faScrewdriverWrench,
        blocks: [
            { type: 'p', text: 'By using Crown One, you agree to:' },
            {
                type: 'list', items: [
                    'Use the platform only for legal transactions related to automotive parts.',
                    'Not attempt to hack, disrupt, or manipulate the website or app.',
                    'Not misuse or distribute false information about products.',
                ],
            },
        ],
    },
    {
        id: 'ordering-payments', title: 'Ordering & Payments', icon: faCartShopping,
        blocks: [
            {
                type: 'sub', title: 'Placing Orders', items: [
                    'Orders are processed based on product availability.',
                    'We reserve the right to cancel or modify any order.',
                ],
            },
            {
                type: 'sub', title: 'Pricing & Payments', items: [
                    'Prices are subject to change without prior notice.',
                    'All transactions must be completed through our secure payment gateway.',
                ],
            },
        ],
    },
    {
        id: 'shipping-delivery', title: 'Shipping & Delivery', icon: faTruckFast,
        blocks: [{
            type: 'list', items: [
                'We aim to deliver products on time, but delays may occur due to unforeseen circumstances.',
                'Shipping fees, delivery times, and tracking details will be provided at checkout.',
                'You must provide an accurate shipping address to avoid delivery issues.',
            ],
        }],
    },
    {
        id: 'returns-refunds', title: 'Returns & Refunds', icon: faRotateLeft, tone: 'warm',
        blocks: [{
            type: 'list', items: [
                'Returns are accepted only for defective or incorrect products.',
                'Refund requests must be made within [number of days] from the delivery date.',
                'Approved refunds will be processed within [number of days].',
            ],
        }],
    },
    {
        id: 'intellectual-property', title: 'Intellectual Property', icon: faCopyright,
        blocks: [{
            type: 'list', items: [
                'All content, logos, trademarks, and images on Crown One are protected by copyright laws.',
                'You may not copy, modify, or distribute our content without permission.',
            ],
        }],
    },
    {
        id: 'limitation-of-liability', title: 'Limitation of Liability', icon: faScaleBalanced, tone: 'dark',
        blocks: [
            { type: 'p', text: 'We are not responsible for:' },
            {
                type: 'list', items: [
                    'Any loss or damage resulting from third-party services.',
                    'Technical glitches, errors, or downtimes on the platform.',
                    'Unauthorized use of your account.',
                ],
            },
        ],
    },
    {
        id: 'privacy-policy', title: 'Privacy Policy', icon: faShieldHalved,
        blocks: [
            { type: 'p', text: 'By using our services, you agree to our Privacy Policy. We take data security seriously and use industry-standard protection measures.' },
            { type: 'link', label: 'Read our Privacy Policy', href: '/privacy-policy' },
        ],
    },
    {
        id: 'changes-to-terms', title: 'Changes to Terms', icon: faPenToSquare, tone: 'warm',
        blocks: [{
            type: 'p', text: 'We reserve the right to modify or update these Terms and Conditions at any time. Changes will be posted on this page, and your continued use of our services implies acceptance of the updates.',
        }],
    },
]

const contacts = [
    { icon: faEnvelope, label: 'Email', value: 'info@crownone.app', href: 'mailto:info@crownone.app' },
    { icon: faPhone, label: 'Phone', value: '021-111-000-348', href: 'tel:021111000348' },
    { icon: faLocationDot, label: 'Address', value: 'Suite # 120, Office Wing, 1st floor, Park Towers, Block 5 Clifton' },
]

// Plain-language summary shown above the full terms; the sections below remain the binding text.
const keyPoints = [
    'Provide accurate business details when you register.',
    'Use Crown One for legitimate business purposes only.',
    'Returns are accepted only for defective or incorrect products.',
    'Prices may change without prior notice.',
]

const TONES: Record<Tone, { card: string; title: string; text: string; number: string; sub: string; dot: string }> = {
    default: { card: 'bg-white border-gray-30/60', title: 'text-black-100', text: 'text-gray-50', number: 'text-gray-30', sub: 'bg-gray-10', dot: 'bg-orange-400' },
    warm: { card: 'bg-[#fff4ec] border-[#ffd9c2]', title: 'text-black-100', text: 'text-gray-50', number: 'text-[#ffc9a8]', sub: 'bg-white', dot: 'bg-orange-400' },
    dark: { card: 'bg-black-70 border-black-70', title: 'text-white', text: 'text-white/70', number: 'text-white/15', sub: 'bg-white/5', dot: 'bg-orange-400' },
}

const DOT_GRID: React.CSSProperties = {
    backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1.2px, transparent 1.2px)',
    backgroundSize: '22px 22px',
    WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 70%)',
    maskImage: 'linear-gradient(to right, black 0%, transparent 70%)',
}

const BulletList = ({ items, tone }: { items: React.ReactNode[]; tone: Tone }) => (
    <ul className='flex flex-col gap-3'>
        {items.map((item, i) => (
            <li key={i} className={`flex items-start gap-3 ${TONES[tone].text}`}>
                <span className={`shrink-0 w-1.5 h-1.5 rounded-full mt-[9px] ${TONES[tone].dot}`} />
                <span>{item}</span>
            </li>
        ))}
    </ul>
)

const SectionCard = ({ section, index }: { section: Section; index: number }) => {
    const tone = section.tone ?? 'default'
    const t = TONES[tone]
    return (
        <section id={section.id} className='break-inside-avoid md:mb-6 mb-4 scroll-mt-8' data-aos='fade-up'>
            <div className={`group rounded-[24px] border md:p-8 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${t.card}`}>
                <div className='flex items-start justify-between'>
                    <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff8a4c] to-[#fe4f11] text-white flex items-center justify-center shadow-lg shadow-orange-400/30 transition-transform duration-300 group-hover:rotate-6'>
                        <FontAwesomeIcon icon={section.icon} className='w-5 h-5' />
                    </div>
                    <span className={`font-extrabold text-[36px] leading-none ${t.number}`}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className={`heading6 md:!text-[22px] mt-5 ${t.title}`}>{section.title}</h3>
                <div className='flex flex-col gap-4 mt-4'>
                    {section.blocks.map((block, j) => {
                        if (block.type === 'p') return <p key={j} className={t.text}>{block.text}</p>
                        if (block.type === 'list') return <BulletList key={j} items={block.items} tone={tone} />
                        if (block.type === 'link') return (
                            <Link key={j} href={block.href} className='self-start inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff7438] to-[#fe4f11] text-white text-[14px] font-semibold hover:gap-3 transition-all duration-300'>
                                {block.label}
                                <FontAwesomeIcon icon={faArrowRight} className='w-3.5 h-3.5' />
                            </Link>
                        )
                        return (
                            <div key={j} className={`rounded-2xl p-4 ${t.sub}`}>
                                <h4 className={`font-semibold mb-3 ${t.title}`}>{block.title}</h4>
                                {block.intro && <p className={`${t.text} mb-3`}>{block.intro}</p>}
                                <BulletList items={block.items} tone={tone} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

const Content = () => {
    return (
        <div className='w-full flex justify-center bg-gray-10 px-5 md:pt-12 pt-8 md:pb-24 pb-12'>
            <div className='w-full max-w-[1150px]'>
                {/* Intro + key points */}
                <div className='grid md:grid-cols-[1.35fr_1fr] grid-cols-1 md:gap-6 gap-4'>
                    <div className='rounded-[24px] bg-white border border-gray-30/60 shadow-sm md:p-10 p-6 flex flex-col justify-between' data-aos='fade-up'>
                        <div>
                            <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff4ec] text-orange-400 text-[13px] font-semibold uppercase tracking-wider'>
                                <span className='w-2 h-2 rounded-full bg-orange-400' />
                                Please read carefully
                            </span>
                            <p className='md:!text-[21px] !text-[17px] md:leading-[34px] leading-[27px] font-medium text-black-50 md:mt-6 mt-4'>
                                Welcome to Crown One! These Terms and Conditions govern your use of our website and mobile application. By accessing or using Crown One, you agree to comply with these terms.
                            </p>
                        </div>
                        <div className='flex items-start gap-3 md:mt-8 mt-6 pt-6 border-t border-gray-30/60'>
                            <FontAwesomeIcon icon={faCircleExclamation} className='shrink-0 w-5 h-5 mt-[1px] text-orange-400' />
                            <p className='text-gray-50'>If you do not agree with any part of these Terms and Conditions, please refrain from using our services.</p>
                        </div>
                    </div>

                    <div
                        className='relative overflow-hidden rounded-[24px] shadow-xl md:p-10 p-6 text-white'
                        style={{ background: 'linear-gradient(135deg, #ff8a4c 0%, #fe4f11 100%)' }}
                        data-aos='fade-up'
                    >
                        <div className='absolute inset-0' style={DOT_GRID} />
                        <div className='absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-white/15 blur-3xl' />
                        <div className='relative'>
                            <h2 className='heading6 md:!text-[22px]'>At a glance</h2>
                            <ul className='flex flex-col gap-4 md:mt-6 mt-4'>
                                {keyPoints.map((point) => (
                                    <li key={point} className='flex items-start gap-3'>
                                        <span className='shrink-0 w-6 h-6 rounded-full bg-white text-orange-400 flex items-center justify-center'>
                                            <FontAwesomeIcon icon={faCheck} className='w-3 h-3' />
                                        </span>
                                        <span className='text-[15px] font-medium'>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className='!text-[12px] text-white/75 md:mt-6 mt-5'>Summary for convenience only. The full terms below apply.</p>
                        </div>
                    </div>
                </div>

                {/* Jump links */}
                <nav className='flex flex-wrap items-center gap-2 md:mt-10 mt-8 md:mb-8 mb-6' data-aos='fade-up'>
                    <span className='text-[13px] font-semibold uppercase tracking-wider text-gray-90 mr-2'>Jump to</span>
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className='px-4 py-2 rounded-full bg-white border border-gray-30/60 text-[13px] font-medium text-black-50 hover:border-orange-400 hover:text-orange-400 transition-colors'
                        >
                            {section.title}
                        </a>
                    ))}
                </nav>

                {/* Sections */}
                <div className='md:columns-2 md:gap-6'>
                    {sections.map((section, i) => <SectionCard key={section.id} section={section} index={i} />)}
                </div>

                {/* Contact */}
                <section id='contact-us' className='md:mt-4 mt-2 rounded-[24px] bg-white border border-gray-30/60 shadow-sm md:p-10 p-6 grid md:grid-cols-[1fr_2fr] grid-cols-1 md:gap-10 gap-6 md:items-center' data-aos='fade-up'>
                    <div>
                        <h3 className='heading5'>Still have <span className='text-orange-400'>questions?</span></h3>
                        <p className='text-gray-50 mt-3'>If you have any questions about these Terms and Conditions, contact us at:</p>
                    </div>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
                        {contacts.map((contact) => {
                            const inner = (
                                <>
                                    <span className='w-10 h-10 rounded-full bg-[#fff4ec] text-orange-400 flex items-center justify-center'>
                                        <FontAwesomeIcon icon={contact.icon} className='w-4 h-4' />
                                    </span>
                                    <span className='block text-[12px] uppercase tracking-wider text-gray-90 mt-3'>{contact.label}</span>
                                    <span className='block text-[14px] font-semibold text-black-50 mt-1'>{contact.value}</span>
                                </>
                            )
                            const className = 'rounded-2xl bg-gray-10 border border-transparent p-5'
                            return contact.href
                                ? <a key={contact.label} href={contact.href} className={`${className} hover:border-orange-400/60 hover:bg-[#fff4ec] transition-colors`}>{inner}</a>
                                : <div key={contact.label} className={className}>{inner}</div>
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Content
