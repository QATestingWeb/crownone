import React from 'react'
import PageBanner from '../../../components/PageBanner/PageBanner'
import Hero from './Hero/Hero'
import Legacy from './Legacy/Legacy'
import ChooseUs from './WhyChooseUs/ChooseUs'
import Progress from './Progress/Progress'

const Page = () => {
  return (
    <div>
        <PageBanner title='About Us' subtitle='The team behind Crown One and why we built it.' />
        <Hero />
        <Legacy />
        <ChooseUs />
        <Progress />
    </div>
  )
}

export default Page