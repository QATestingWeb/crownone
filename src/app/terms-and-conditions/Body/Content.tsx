import React from 'react'
import {
    faBook, faUserCheck, faUserGear, faScrewdriverWrench, faCartShopping, faTruckFast,
    faRotateLeft, faCopyright, faScaleBalanced, faShieldHalved, faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'
import LegalPage, { LegalSection } from '../../../../components/LegalPage/LegalPage'

const sections: LegalSection[] = [
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

// Plain-language summary shown above the full terms; the sections below remain the binding text.
const keyPoints = [
    'Provide accurate business details when you register.',
    'Use Crown One for legitimate business purposes only.',
    'Returns are accepted only for defective or incorrect products.',
    'Prices may change without prior notice.',
]

const Content = () => (
    <LegalPage
        intro='Welcome to Crown One! These Terms and Conditions govern your use of our website and mobile application. By accessing or using Crown One, you agree to comply with these terms.'
        notice='If you do not agree with any part of these Terms and Conditions, please refrain from using our services.'
        keyPoints={keyPoints}
        sections={sections}
        contactText='If you have any questions about these Terms and Conditions, contact us at:'
    />
)

export default Content
