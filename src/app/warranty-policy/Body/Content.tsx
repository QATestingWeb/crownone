import React from 'react'
import Link from 'next/link'

const Content = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-[1150px] flex flex-col gap-10 md:py-20 py-10 px-5">
                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h2 className='heading1'>Introduction</h2>
                    <p>At Crown, we stand behind the quality of our automotive parts. This Warranty Policy explains which products are covered, what the warranty includes and how retailers and mechanics can submit a warranty claim through the Crown One app.</p>
                    <p>By submitting a warranty claim, you agree to the terms outlined in this Warranty Policy.</p>
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Warranty Coverage</h3>
                    <ul className='list-inside list-disc '>
                        <li>The warranty covers manufacturing defects in material and workmanship of genuine Crown products.</li>
                        <li>The warranty period for each product is as stated on its packaging or warranty card, starting from the date of purchase.</li>
                        <li>Only products purchased from Crown or its authorized dealers and retailers are eligible.</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>What Is Not Covered</h3>
                    <ul className='list-inside list-disc '>
                        <li>Normal wear and tear.</li>
                        <li>Damage caused by accidents, misuse, negligence or improper installation.</li>
                        <li>Products that have been modified, tampered with or repaired by unauthorized persons.</li>
                        <li>Damage resulting from the use of non-genuine parts alongside Crown products.</li>
                        <li>Products with missing, damaged or unreadable QR codes or product labels.</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>How to Make a Warranty Claim</h3>
                    <h4 className='heading6 mt-2'>1. Verify the Product</h4>
                    <p>Scan the product&apos;s QR code in the Crown One app to confirm that it is a genuine Crown product.</p>

                    <h4 className='heading6 mt-1'>2. Submit Your Claim</h4>
                    <p>Submit a warranty claim from the app with a description of the issue and any supporting photos.</p>

                    <h4 className='heading6 mt-1'>3. Inspection</h4>
                    <p>Our team may request that the product be returned for inspection to confirm the defect.</p>

                    <h4 className='heading6 mt-1'>4. Resolution</h4>
                    <p>You can track the status of your claim in the app. Approved claims will be resolved by repair or replacement of the defective product.</p>
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Required Documents</h3>
                    <ul className='list-inside list-disc '>
                        <li>Proof of purchase (invoice or order record in the Crown One app).</li>
                        <li>Warranty card, where applicable.</li>
                        <li>The defective product with its original label or QR code intact.</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Changes to This Policy</h3>
                    <p>We reserve the right to modify or update this Warranty Policy at any time. Changes will be posted on this page, and your continued use of our services implies acceptance of the updates.</p>
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Contact Us</h3>
                    <p>If you have any questions about this Warranty Policy, see our <Link href='/faqs' className='text-orange-600 hover:underline'>FAQs</Link> or contact us at:</p>
                    <ul className='flex flex-col gap-2 mt-2'>
                        <li><b>Email:</b> info@crownone.app</li>
                        <li><b>Phone:</b> 021-111-000-348</li>
                        <li><b>Address:</b> Suite # 120, Office Wing, 1st floor, Park Towers, Block 5 Clifton</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Content
