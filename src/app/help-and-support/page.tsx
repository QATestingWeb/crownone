import React from 'react'
import type { Metadata } from 'next'
import PageBanner from '../../../components/PageBanner/PageBanner'
import Content from './Body/Content'

export const metadata: Metadata = {
  title: 'Help & Support',
  description: 'Get help with the Crown One app, from account setup and orders to rewards, transfers and top-ups.',
  alternates: { canonical: '/help-and-support' },
}

const page = () => {
  return (
    <div>
        <PageBanner title='Help & Support' />
        <Content />
    </div>
  )
}

export default page
