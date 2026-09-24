import React from 'react'

const Content = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-[1150px] flex flex-col gap-10 md:py-20 py-10 px-5">
                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h2 className='heading1'>Introduction</h2>
                    <p>
                    Welcome to Crown One! These Terms and Conditions govern your use of our website and mobile application. By accessing or using Crown One, you agree to comply with these terms.</p>                    
                    <p>If you do not agree with any part of these Terms and Conditions, please refrain from using our services.</p>                    
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Definitions</h3>                                   
                    <ul className='list-inside list-disc '>
                        <li>"Crown One" refers to our B2B platform designed for retailers and mechanics to buy and sell automotive parts.</li>
                        <li>"User" refers to anyone accessing or using our services.</li>
                        <li>"We," "Us," and "Our" refer to Crown One and its affiliated entities.</li>
                        <li>"Services" refer to the website, mobile app, and all features provided by Crown One.</li>
                    </ul>
                    </div>                
                
                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Eligibility</h3>
                    <p>To use Crown One, you must:</p>                   
                    <ul className='list-inside list-disc '>                        
                        <li>Provide accurate business details if registering as a retailer or mechanic.</li>
                        <li>Use the platform for legitimate business purposes only.</li>
                    </ul>            
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>User Account</h3>

                    <h4 className='heading6 mt-2'>1. Account Registration</h4>                                      
                    <ul className='list-inside list-disc '>
                        <li>You must create an account to access certain features.</li>
                        <li>Provide accurate and up-to-date information.</li>
                        <li>You are responsible for maintaining account confidentiality.</li>
                    </ul>    

                      <h4 className='heading6'>2. Account Termination</h4>   
                      <p>We reserve the right to suspend or terminate accounts that:</p>                                   
                    <ul className='list-inside list-disc '>
                        <li>Violate these Terms and Conditions.</li>
                        <li>Engage in fraudulent activities.</li>
                        <li>Misuse or manipulate the platform.</li>
                    </ul>            
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Use of Services</h3>
                    <p>By using Crown One, you agree to:</p>                   
                    <ul className='list-inside list-disc '>
                        <li>Use the platform only for legal transactions related to automotive parts.</li>
                        <li>Not attempt to hack, disrupt, or manipulate the website or app.</li>
                        <li>Not misuse or distribute false information about products.</li>
                    </ul>            
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Ordering & Payments</h3>

                    <h4 className='heading6 mt-2'>1. Placing Orders</h4>                                      
                    <ul className='list-inside list-disc '>
                        <li>Orders are processed based on product availability.</li>
                        <li>We reserve the right to cancel or modify any order.</li>                        
                    </ul>    

                      <h4 className='heading6'>2. Pricing & Payments</h4>                         
                    <ul className='list-inside list-disc '>
                        <li>Prices are subject to change without prior notice.</li>
                        <li>All transactions must be completed through our secure payment gateway.</li>
                    </ul>            
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Shipping & Delivery</h3>
                    <ul className='list-inside list-disc '>
                        <li>We aim to deliver products on time, but delays may occur due to unforeseen circumstances.</li>
                        <li>Shipping fees, delivery times, and tracking details will be provided at checkout.</li>
                        <li>You must provide an accurate shipping address to avoid delivery issues.</li>
                    </ul>
                </div>
                
                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Returns & Refunds</h3> 
                    <ul className='list-inside list-disc '>
                        <li>Returns are accepted only for defective or incorrect products.</li>
                        <li>Refund requests must be made within [number of days] from the delivery date.</li>
                        <li>Approved refunds will be processed within [number of days].</li>
                    </ul>            
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Intellectual Property</h3> 
                    <ul className='list-inside list-disc '>
                        <li>All content, logos, trademarks, and images on Crown One are protected by copyright laws.</li>
                        <li>You may not copy, modify, or distribute our content without permission.</li>
                    </ul>            
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Limitation of Liability</h3> 
                    <p>We are not responsible for:</p>
                    <ul className='list-inside list-disc '>
                        <li>Any loss or damage resulting from third-party services.</li>
                        <li>Technical glitches, errors, or downtimes on the platform.</li>
                        <li>Unauthorized use of your account.</li>
                    </ul>            
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Privacy Policy</h3> 
                    <p>By using our services, you agree to our [Privacy Policy]. We take data security seriously and use industry-standard protection measures.</p>                             
                </div>

                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Changes to Terms</h3> 
                    <p>We reserve the right to modify or update these Terms and Conditions at any time. Changes will be posted on this page, and your continued use of our services implies acceptance of the updates.</p>                             
                </div>
                          
                <div className='flex flex-col gap-2' data-aos="fade-up">
                    <h3 className='heading5'>Contact Us</h3>
                    <p>If you have any questions about these Terms and Conditions, contact us at:</p>
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