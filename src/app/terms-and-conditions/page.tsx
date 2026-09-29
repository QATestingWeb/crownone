import React from 'react'
import type { Metadata } from 'next'
import PageBanner from '../../../components/PageBanner/PageBanner'
import Content from './Body/Content'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms and conditions for using the Crown One website and app.',
  alternates: { canonical: '/terms-and-conditions' },
}

const page = () => {
  return (
    <div>
        <PageBanner title='Terms & Conditions' subtitle='The rules for using the Crown One website and app.' curveColor='#F6F6F6' />
        <Content />
    </div>
  )
}

export default page
