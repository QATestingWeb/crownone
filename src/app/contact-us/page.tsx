import React from 'react'
import PageBanner from '../../../components/PageBanner/PageBanner'
import Contact from './ContactDetails/Contact'




const page = () => {
  return (
    <div >
        <PageBanner title='Contact Us' subtitle='Questions, feedback or support — our team is here to help.' />
        <Contact />      
    </div>
  )
}

export default page