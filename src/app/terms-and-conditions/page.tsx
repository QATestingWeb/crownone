import React from 'react'
import PageBanner from '../../../components/PageBanner/PageBanner'
import Content from './Body/Content'

const page = () => {
  return (
    <div>
        <PageBanner title='Terms & Conditions' subtitle='The rules for using the Crown One website and app.' curveColor='#F6F6F6' />
        <Content />
    </div>
  )
}

export default page
