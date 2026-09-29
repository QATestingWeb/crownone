import React from 'react'
import type { Metadata } from 'next'
import PageBanner from '../../../components/PageBanner/PageBanner'
import Contact from './ContactDetails/Contact'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Questions, feedback or support? Get in touch with the Crown One team by phone, email or our contact form.',
  alternates: { canonical: '/contact-us' },
}




const page = () => {
  return (
    <div >
        <PageBanner title='Contact Us' subtitle='Questions, feedback or support — our team is here to help.' />
        <Contact />      
    </div>
  )
}

export default page