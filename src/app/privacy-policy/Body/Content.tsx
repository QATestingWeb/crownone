import React from 'react'

const Content = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-[1150px] flex flex-col gap-10 md:py-20 py-10 px-5">
                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h2 className='heading1'>Introduction</h2>
                    <p>
                    Welcome to Crown One. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and mobile application.</p>                    
                    <p>By accessing or using Crown One, you agree to the terms outlined in this Privacy Policy.</p>                    
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Information We Collect</h3>
                    <p>We collect various types of information to improve our services, including:</p>

                    <h4 className='heading6 mt-2'>1. Personal Information</h4>
                    <ul className='list-inside list-disc '>
                        <li>Name</li>
                        <li>Contact details</li>
                        <li>Business information</li>
                    </ul>

                    <h4 className='heading6 mt-1'>2. Non-Personal Information</h4>
                    <ul className='list-inside list-disc '>
                        <li>Device information (IP address, browser type, operating system)</li>
                        <li>Usage data (pages visited, interactions, and preferences)</li>
                    </ul>

                    <h4 className='heading6 mt-1'>3. Payment Information</h4>
                    <p>If you make purchases through our app, we may collect payment-related information, but we do not store credit card details. Transactions are securely processed by third-party payment providers.</p>
                </div>

                
                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>How We Use Your Information</h3>
                    <p>We use the collected information to:</p>                   
                    <ul className='list-inside list-disc '>
                        <li><b>Enhance User Experience</b> – Provide a seamless shopping experience for automotive parts.</li>
                        <li><b>Order Processing</b> – Process purchases, payments, and order history tracking.</li>
                        <li><b>Marketing & Promotions</b> – Send exclusive deals, offers, and updates (only with your consent).</li>
                        <li><b>Improve Services</b> – Analyze usage trends and improve app functionality.</li>
                        <li><b>Security & Fraud Prevention</b> – Protect against unauthorized access and fraud.</li>
                    </ul>            
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>How We Protect Your Information</h3>
                    <p>We implement strict security measures to protect your data, including:</p>                   
                    <ul className='list-inside list-disc '>
                        <li><b>Encryption & Secure Servers</b> – Your information is stored using secure encryption protocols.</li>
                        <li><b>Limited Access</b> – Only authorized personnel have access to sensitive data.</li>
                        <li><b>Regular Monitoring</b> – We continuously monitor our systems to prevent data breaches.</li>                        
                    </ul>            
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Third-Party Services</h3>
                    <p>We may share limited information with trusted third parties, including:</p>                   
                    <ul className='list-inside list-disc '>
                        <li><b>Payment Processors</b> – To facilitate secure transactions.</li>
                        <li><b>Shipping & Logistics Partners</b> – To ensure timely order delivery.</li>  
                        <li><b>Analytics Providers</b> – To improve website and app performance.</li>           
                    </ul>            
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Cookies & Tracking Technologies</h3>
                    <p>We use cookies and similar tracking technologies to enhance user experience and collect usage data. You can manage cookie preferences through your browser settings.</p>                            
                </div>
                
                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Your Rights & Choices</h3>
                    <p>You have the right to:</p>                   
                    <ul className='list-inside list-disc '>
                        <li><b>Access Your Data</b> – Request a copy of the personal data we hold.</li>
                        <li><b>Opt-Out of Marketing</b> – Unsubscribe from promotional emails at any time.</li>
                        <li><b>Request Data Deletion</b> – Ask us to delete your personal data, subject to legal obligations.</li>
                    </ul>            
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Changes to This Privacy Policy</h3>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically.</p>                            
                </div>
                          
                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, you can contact us at:</p>
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