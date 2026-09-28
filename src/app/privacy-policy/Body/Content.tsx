import React from 'react'
import {
    faDatabase, faChartLine, faLock, faHandshake, faCookieBite, faUserShield, faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'
import LegalPage, { LegalSection } from '../../../../components/LegalPage/LegalPage'

const sections: LegalSection[] = [
    {
        id: 'information-we-collect', title: 'Information We Collect', icon: faDatabase,
        blocks: [
            { type: 'p', text: 'We collect various types of information to improve our services, including:' },
            { type: 'sub', title: 'Personal Information', items: ['Name', 'Contact details', 'Business information'] },
            {
                type: 'sub', title: 'Non-Personal Information', items: [
                    'Device information (IP address, browser type, operating system)',
                    'Usage data (pages visited, interactions, and preferences)',
                ],
            },
            {
                type: 'sub', title: 'Payment Information',
                intro: 'If you make purchases through our app, we may collect payment-related information, but we do not store credit card details. Transactions are securely processed by third-party payment providers.',
            },
        ],
    },
    {
        id: 'how-we-use-your-information', title: 'How We Use Your Information', icon: faChartLine,
        blocks: [
            { type: 'p', text: 'We use the collected information to:' },
            {
                type: 'list', items: [
                    <><b className='text-black-50'>Enhance User Experience</b> – Provide a seamless shopping experience for automotive parts.</>,
                    <><b className='text-black-50'>Order Processing</b> – Process purchases, payments, and order history tracking.</>,
                    <><b className='text-black-50'>Marketing &amp; Promotions</b> – Send exclusive deals, offers, and updates (only with your consent).</>,
                    <><b className='text-black-50'>Improve Services</b> – Analyze usage trends and improve app functionality.</>,
                    <><b className='text-black-50'>Security &amp; Fraud Prevention</b> – Protect against unauthorized access and fraud.</>,
                ],
            },
        ],
    },
    {
        id: 'how-we-protect-your-information', title: 'How We Protect Your Information', icon: faLock, tone: 'dark',
        blocks: [
            { type: 'p', text: 'We implement strict security measures to protect your data, including:' },
            {
                type: 'list', items: [
                    <><b className='text-white'>Encryption &amp; Secure Servers</b> – Your information is stored using secure encryption protocols.</>,
                    <><b className='text-white'>Limited Access</b> – Only authorized personnel have access to sensitive data.</>,
                    <><b className='text-white'>Regular Monitoring</b> – We continuously monitor our systems to prevent data breaches.</>,
                ],
            },
        ],
    },
    {
        id: 'third-party-services', title: 'Third-Party Services', icon: faHandshake,
        blocks: [
            { type: 'p', text: 'We may share limited information with trusted third parties, including:' },
            {
                type: 'list', items: [
                    <><b className='text-black-50'>Payment Processors</b> – To facilitate secure transactions.</>,
                    <><b className='text-black-50'>Shipping &amp; Logistics Partners</b> – To ensure timely order delivery.</>,
                    <><b className='text-black-50'>Analytics Providers</b> – To improve website and app performance.</>,
                ],
            },
        ],
    },
    {
        id: 'cookies-tracking', title: 'Cookies & Tracking Technologies', icon: faCookieBite,
        blocks: [{
            type: 'p', text: 'We use cookies and similar tracking technologies to enhance user experience and collect usage data. You can manage cookie preferences through your browser settings.',
        }],
    },
    {
        id: 'your-rights-choices', title: 'Your Rights & Choices', icon: faUserShield, tone: 'warm',
        blocks: [
            { type: 'p', text: 'You have the right to:' },
            {
                type: 'list', items: [
                    <><b className='text-black-50'>Access Your Data</b> – Request a copy of the personal data we hold.</>,
                    <><b className='text-black-50'>Opt-Out of Marketing</b> – Unsubscribe from promotional emails at any time.</>,
                    <><b className='text-black-50'>Request Data Deletion</b> – Ask us to delete your personal data, subject to legal obligations.</>,
                ],
            },
        ],
    },
    {
        id: 'changes-to-this-policy', title: 'Changes to This Privacy Policy', icon: faPenToSquare, tone: 'warm',
        blocks: [{
            type: 'p', text: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.',
        }],
    },
]

// Plain-language summary shown above the full policy; the sections below remain the binding text.
const keyPoints = [
    'We never store your credit card details.',
    'Marketing messages are sent only with your consent.',
    'Your data is encrypted and access is restricted.',
    'You can request access to or deletion of your data.',
]

const Content = () => (
    <LegalPage
        intro='Welcome to Crown One. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and mobile application.'
        notice='By accessing or using Crown One, you agree to the terms outlined in this Privacy Policy.'
        keyPoints={keyPoints}
        sections={sections}
        contactText='If you have any questions about this Privacy Policy, you can contact us at:'
    />
)

export default Content
