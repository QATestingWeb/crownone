import React from 'react'
import type { Metadata } from 'next'
import PageBanner from '../../../components/PageBanner/PageBanner'
import Content from './Body/Content'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Crown One collects, uses and protects your personal information.',
  alternates: { canonical: '/privacy-policy' },
}

const page = () => {
  return (
    <div>
        <PageBanner title='Privacy Policy' subtitle='How we collect, use and protect your information.' curveColor='#F6F6F6' />
        <Content />
    </div>
  )
}

export default page
