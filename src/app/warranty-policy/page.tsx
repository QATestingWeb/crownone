import React from 'react'
import PageBanner from '../../../components/PageBanner/PageBanner'
import Content from './Body/Content'

const page = () => {
  return (
    <div>
        <PageBanner title='Warranty Policy' subtitle='What is covered and how to make a claim.' curveColor='#F6F6F6' />
        <Content />
    </div>
  )
}

export default page
