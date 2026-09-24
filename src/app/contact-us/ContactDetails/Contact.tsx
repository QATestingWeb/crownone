import React from 'react'
import Details from './Details'
import Form from './Form'
import CallToAction from '@/app/Home/CTA/CallToAction'

const Contact = () => {
  return (
    <div className='md:w-full block md:flex md:flex-col items-center justify-center '>
        <div className="w-full md:max-w-[1150px] md:py-20 py-10 px-5">
            <div className='grid md:grid-cols-5 grid-cols-1 rounded-[30px] overflow-hidden shadow-xl border border-gray-30/50 bg-white'>
                <Details />
                <Form recaptchaSiteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} />
            </div>
        </div>
        <CallToAction />
    </div>
  )
}

export default Contact
