import React from 'react'
import {
    faUserCheck, faWallet, faRotateLeft, faCopyright, faServer, faScaleBalanced,
    faBan, faPenToSquare, faGavel,
} from '@fortawesome/free-solid-svg-icons'
import LegalPage, { LegalSection } from '../../../../components/LegalPage/LegalPage'

const sections: LegalSection[] = [
    {
        id: 'use-of-crown-one', title: 'Use of Crown ONE', icon: faUserCheck,
        blocks: [
            { type: 'p', text: 'Crown ONE is intended for use in Pakistan and provides users with access to its products, services, transactions, digital wallet, and other available features.' },
            { type: 'p', text: 'You agree to use Crown ONE lawfully and responsibly. You must not use the service for fraudulent, unauthorized, or unlawful activities or attempt to interfere with its operation or security.' },
        ],
    },
    {
        id: 'account-and-wallet', title: 'Account and Wallet', icon: faWallet,
        blocks: [
            { type: 'p', text: 'Where an account is required, you are responsible for providing accurate information and keeping your login credentials, PINs, passwords, and verification codes secure.' },
            { type: 'p', text: 'Crown ONE may provide a digital wallet that can be used for eligible transactions and services available through the platform.' },
            { type: 'p', text: 'You are responsible for reviewing your wallet balance and transactions and for ensuring that transactions made through your account are authorized.' },
            { type: 'p', text: 'We may restrict or suspend wallet access or transactions where reasonably necessary for security, fraud prevention, suspected unauthorized activity, technical issues, or compliance with applicable laws.' },
        ],
    },
    {
        id: 'purchases-returns-refunds', title: 'Purchases, Returns and Refunds', icon: faRotateLeft,
        blocks: [
            { type: 'p', text: 'All purchases made through Crown ONE are subject to the applicable prices, charges, and transaction conditions displayed at the time of purchase.' },
            { type: 'p', text: 'If a product or transaction is eligible for a return or refund, the request must be made in accordance with the applicable return and refund conditions communicated by Crown ONE.' },
            { type: 'p', text: 'Approved refunds may, depending on the nature of the transaction, be credited to your Crown ONE Wallet or returned through the original payment method or another available method.' },
            { type: 'p', text: 'Certain products, services, offers, or transactions may not be eligible for return or refund, or may be subject to specific conditions.' },
            { type: 'p', text: 'We reserve the right to review refund and return requests to prevent fraud, misuse, or unauthorized transactions.' },
        ],
    },
    {
        id: 'intellectual-property', title: 'Intellectual Property', icon: faCopyright,
        blocks: [
            { type: 'p', text: 'Crown ONE and its content, including its name, logo, trademarks, designs, text, graphics, images, software, and other materials, are owned by or licensed to Crown Group of Companies unless otherwise stated.' },
            { type: 'p', text: 'You may not copy, reproduce, modify, distribute, or commercially use any Crown ONE content or branding without our prior written permission, except where permitted by law.' },
        ],
    },
    {
        id: 'service-availability', title: 'Service Availability', icon: faServer,
        blocks: [
            { type: 'p', text: 'We aim to keep Crown ONE available and functional; however, temporary interruptions may occur due to maintenance, technical issues, network problems, updates, or circumstances beyond our reasonable control.' },
            { type: 'p', text: 'Crown ONE is provided on an "AS IS" and "AS AVAILABLE" basis to the maximum extent permitted by applicable law.' },
        ],
    },
    {
        id: 'limitation-of-liability', title: 'Limitation of Liability', icon: faScaleBalanced,
        blocks: [
            { type: 'p', text: 'To the maximum extent permitted by applicable law, Crown Group of Companies shall not be liable for indirect, incidental, special, or consequential losses arising from or relating to your use of, or inability to use, Crown ONE.' },
            { type: 'p', text: 'Our total liability in connection with Crown ONE shall, to the maximum extent permitted by law, be limited to the amount actually paid by you through the relevant service or transaction, or USD 100 if you have not purchased anything through Crown ONE.' },
            { type: 'p', text: 'Nothing in these Terms limits any liability that cannot legally be limited under applicable law.' },
        ],
    },
    {
        id: 'suspension-and-termination', title: 'Suspension and Termination', icon: faBan,
        blocks: [
            { type: 'p', text: 'We may suspend or terminate your access to Crown ONE if you violate these Terms & Conditions, engage in fraudulent or unauthorized activity, or where reasonably necessary for security, legal, or operational reasons.' },
            { type: 'p', text: 'You may stop using Crown ONE at any time.' },
        ],
    },
    {
        id: 'changes-to-these-terms', title: 'Changes to These Terms', icon: faPenToSquare,
        blocks: [
            { type: 'p', text: 'We may update these Terms & Conditions from time to time. If we make material changes, we may provide reasonable notice through Crown ONE or another appropriate method.' },
            { type: 'p', text: 'Your continued use of Crown ONE after the updated Terms become effective means that you accept the revised Terms.' },
        ],
    },
    {
        id: 'governing-law', title: 'Governing Law', icon: faGavel,
        blocks: [
            { type: 'p', text: 'These Terms & Conditions shall be governed by and interpreted in accordance with the laws of Pakistan.' },
            { type: 'p', text: 'Any dispute concerning Crown ONE should first be brought to our attention so that we can attempt to resolve it informally.' },
        ],
    },
]

// Plain-language summary shown above the full terms; the sections below remain the binding text.
const keyPoints = [
    'Crown ONE is intended for use in Pakistan.',
    'Keep your login credentials, PINs and verification codes secure.',
    'Approved refunds may be credited to your Crown ONE Wallet or original payment method.',
    'These Terms are governed by the laws of Pakistan.',
]

const Content = () => (
    <LegalPage
        intro='Welcome to Crown ONE. These Terms & Conditions govern your use of the Crown ONE website, application, digital wallet, and related services.'
        lastUpdated='29 September 2026'
        notice='By accessing or using Crown ONE, you agree to these Terms & Conditions. If you do not agree with these Terms, please do not use Crown ONE.'
        keyPoints={keyPoints}
        sections={sections}
        contactText='If you have any questions, concerns, or complaints regarding these Terms & Conditions or Crown ONE, please contact us:'
    />
)

export default Content
