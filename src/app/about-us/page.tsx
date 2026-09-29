import React from 'react'
import type { Metadata } from 'next'
import PageBanner from '../../../components/PageBanner/PageBanner'
import Hero from './Hero/Hero'
import Legacy from './Legacy/Legacy'
import ChooseUs from './WhyChooseUs/ChooseUs'
import Progress from './Progress/Progress'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the team behind Crown One and learn why we built an app for retailers and mechanics across Pakistan.',
  alternates: { canonical: '/about-us' },
}

const Page = () => {
  return (
    <div>
        <PageBanner curveColor='#F6F6F6' title='About Us' subtitle='The team behind Crown One and why we built it.' />
        <Hero />
        <Legacy />
        <ChooseUs />
        <Progress />
    </div>
  )
}

export default Page