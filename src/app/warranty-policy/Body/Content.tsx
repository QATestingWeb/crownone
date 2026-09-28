import React from 'react'
import Link from 'next/link'
import {
    faShieldHalved, faBan, faListOl, faFileLines, faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'
import LegalPage, { LegalSection } from '../../../../components/LegalPage/LegalPage'

const sections: LegalSection[] = [
    {
        id: 'warranty-coverage', title: 'Warranty Coverage', icon: faShieldHalved,
        blocks: [{
            type: 'list', items: [
                'The warranty covers manufacturing defects in material and workmanship of genuine Crown products.',
                'The warranty period for each product is as stated on its packaging or warranty card, starting from the date of purchase.',
                'Only products purchased from Crown or its authorized dealers and retailers are eligible.',
            ],
        }],
    },
    {
        id: 'what-is-not-covered', title: 'What Is Not Covered', icon: faBan, tone: 'dark',
        blocks: [{
            type: 'list', items: [
                'Normal wear and tear.',
                'Damage caused by accidents, misuse, negligence or improper installation.',
                'Products that have been modified, tampered with or repaired by unauthorized persons.',
                'Damage resulting from the use of non-genuine parts alongside Crown products.',
                'Products with missing, damaged or unreadable QR codes or product labels.',
            ],
        }],
    },
    {
        id: 'how-to-make-a-claim', title: 'How to Make a Warranty Claim', icon: faListOl,
        blocks: [{
            type: 'steps', items: [
                { title: 'Verify the Product', text: 'Scan the product’s QR code in the Crown One app to confirm that it is a genuine Crown product.' },
                { title: 'Submit Your Claim', text: 'Submit a warranty claim from the app with a description of the issue and any supporting photos.' },
                { title: 'Inspection', text: 'Our team may request that the product be returned for inspection to confirm the defect.' },
                { title: 'Resolution', text: 'You can track the status of your claim in the app. Approved claims will be resolved by repair or replacement of the defective product.' },
            ],
        }],
    },
    {
        id: 'required-documents', title: 'Required Documents', icon: faFileLines, tone: 'warm',
        blocks: [{
            type: 'list', items: [
                'Proof of purchase (invoice or order record in the Crown One app).',
                'Warranty card, where applicable.',
                'The defective product with its original label or QR code intact.',
            ],
        }],
    },
    {
        id: 'changes-to-this-policy', title: 'Changes to This Policy', icon: faPenToSquare,
        blocks: [{
            type: 'p', text: 'We reserve the right to modify or update this Warranty Policy at any time. Changes will be posted on this page, and your continued use of our services implies acceptance of the updates.',
        }],
    },
]

// Plain-language summary shown above the full policy; the sections below remain the binding text.
const keyPoints = [
    'Covers manufacturing defects in genuine Crown products.',
    'Buy from Crown or its authorized dealers and retailers.',
    'Verify the product by QR scan, then claim in the Crown One app.',
    'Keep your proof of purchase and the product label or QR code.',
]

const Content = () => (
    <LegalPage
        intro='At Crown, we stand behind the quality of our automotive parts. This Warranty Policy explains which products are covered, what the warranty includes and how retailers and mechanics can submit a warranty claim through the Crown One app.'
        notice='By submitting a warranty claim, you agree to the terms outlined in this Warranty Policy.'
        keyPoints={keyPoints}
        sections={sections}
        contactText={<>If you have any questions about this Warranty Policy, see our <Link href='/faqs' className='text-orange-400 font-semibold hover:underline'>FAQs</Link> or contact us at:</>}
    />
)

export default Content
