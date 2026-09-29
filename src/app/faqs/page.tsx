import React from 'react'
import type { Metadata } from 'next'
import PageBanner from '../../../components/PageBanner/PageBanner'
import Faqs from '../../../components/Faqs/Faqs'
import { allFaqsData } from './data'

export const metadata: Metadata = {
  title: 'FAQs',
  description: 'Answers to the most common questions about Crown One: ordering, rewards, Cash Wallet, accounts and more.',
  alternates: { canonical: '/faqs' },
}

const page = () => {
  return (
    <div>
        <PageBanner title='FAQs' subtitle='Answers to the most common questions about Crown One.' />
        <Faqs data={allFaqsData} />
    </div>
  )
}

export default page
