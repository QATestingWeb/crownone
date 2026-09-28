import React from 'react'
import PageBanner from '../../../components/PageBanner/PageBanner'
import Content from './Body/Content'

const page = () => {
  return (
    <div>
        <PageBanner title='Privacy Policy' subtitle='How we collect, use and protect your information.' curveColor='#F6F6F6' />
        <Content />
    </div>
  )
}

export default page
