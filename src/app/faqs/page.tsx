import React from 'react'
import PageBanner from '../../../components/PageBanner/PageBanner'
import Faqs from '../../../components/Faqs/Faqs'
import { allFaqsData } from './data'

const page = () => {
  return (
    <div>
        <PageBanner title='FAQs' subtitle='Answers to the most common questions about Crown One.' />
        <Faqs data={allFaqsData} />
    </div>
  )
}

export default page
