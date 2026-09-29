import React from 'react'
import {
    faDatabase, faChartLine, faWallet, faLock, faUserShield, faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'
import LegalPage, { LegalSection } from '../../../../components/LegalPage/LegalPage'

const sections: LegalSection[] = [
    {
        id: 'information-we-collect', title: 'Information We Collect', icon: faDatabase,
        blocks: [
            { type: 'p', text: 'Depending on how you use Crown ONE, we may collect:' },
            {
                type: 'list', items: [
                    'Your name, phone number, email address, and other contact details.',
                    'Account and profile information.',
                    'Information related to purchases, payments, orders, returns, and refunds.',
                    'Crown ONE Wallet and transaction information.',
                    'Information you provide when contacting or communicating with us.',
                    'Technical information such as IP address, browser type, device information, and website usage data.',
                ],
            },
            { type: 'p', text: 'We collect information that is reasonably necessary to provide and improve our services.' },
        ],
    },
    {
        id: 'how-we-use-your-information', title: 'How We Use Your Information', icon: faChartLine,
        blocks: [
            { type: 'p', text: 'We may use your information to:' },
            {
                type: 'list', items: [
                    'Provide and manage Crown ONE and your account.',
                    'Process payments, wallet transactions, orders, returns, and refunds.',
                    'Communicate with you about your account, transactions, and services.',
                    'Respond to your questions and requests.',
                    'Maintain security and prevent fraud or unauthorized activity.',
                    'Improve our products, services, website, and user experience.',
                    'Comply with applicable laws and legal requirements.',
                ],
            },
            { type: 'p', text: 'We may also send you relevant offers or promotional communications where permitted. You may opt out of promotional communications where applicable.' },
        ],
    },
    {
        id: 'wallet-transactions-sharing', title: 'Wallet, Transactions and Sharing', icon: faWallet,
        blocks: [
            { type: 'p', text: 'Information relating to your Crown ONE Wallet and transactions may be collected and maintained to process transactions, provide wallet services, prevent fraud, maintain records, and comply with applicable requirements.' },
            { type: 'p', text: <b className='text-black-50'>We do not sell your personal information.</b> },
            { type: 'p', text: 'We may share information with service providers, payment or transaction partners, companies within our group, or government and legal authorities where necessary to provide our services, protect Crown ONE, process transactions, or comply with applicable law.' },
            { type: 'p', text: 'We may also share information where you have provided your consent.' },
        ],
    },
    {
        id: 'cookies-security', title: 'Cookies and Security', icon: faLock,
        blocks: [
            { type: 'p', text: 'We may use cookies and similar technologies to operate and improve our website, remember preferences, and understand website usage.' },
            { type: 'p', text: 'We take reasonable measures to protect your personal information against unauthorized access, misuse, loss, or disclosure. However, no method of electronic storage or transmission is completely secure.' },
        ],
    },
    {
        id: 'your-information-retention', title: 'Your Information and Retention', icon: faUserShield,
        blocks: [
            { type: 'p', text: 'You may contact us to request access to, correction of, or deletion of your personal information, subject to applicable law.' },
            { type: 'p', text: 'We retain information only for as long as reasonably necessary to provide our services, maintain transaction records, meet legal obligations, resolve disputes, and protect our rights.' },
        ],
    },
    {
        id: 'changes-contact-us', title: 'Changes and Contact Us', icon: faPenToSquare,
        blocks: [
            { type: 'p', text: 'We may update this Privacy Policy from time to time. Any changes will be reflected by updating the "Last Updated" date above.' },
            { type: 'p', text: 'If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us using the details below.' },
            { type: 'link', label: 'Contact details', href: '#contact-us' },
        ],
    },
]

// Plain-language summary shown above the full policy; the sections below remain the binding text.
const keyPoints = [
    'We do not sell your personal information.',
    'We only collect what is reasonably necessary to provide our services.',
    'You can opt out of promotional communications.',
    'You can request access to, correction of, or deletion of your data.',
]

const Content = () => (
    <LegalPage
        intro='Crown Group of Companies ("Company", "We", "Us", or "Our") respects your privacy and is committed to protecting your personal information.'
        lastUpdated='29 September 2026'
        notice='This Privacy Policy explains how we collect, use, and protect information when you use Crown ONE and its related services.'
        keyPoints={keyPoints}
        sections={sections}
        contactText='If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:'
    />
)

export default Content
