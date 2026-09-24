import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageBanner from '../../../components/PageBanner/PageBanner'
import { blogPosts, formatDate } from './data'

const page = () => {
  return (
    <div>
        <PageBanner title='Blog' subtitle='News, guides and updates from the Crown One team.' />
        <div className='w-full flex justify-center'>
            <div className="w-full max-w-[1150px] grid md:grid-cols-3 grid-cols-1 gap-10 md:py-20 py-10 px-5">
                {blogPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className='group flex flex-col gap-3' data-aos="fade-up" data-tilt='6'>
                        <div className='overflow-hidden rounded-10'>
                            <Image src={post.image} alt={post.title} className='w-full h-auto group-hover:scale-105 smooth-transition' />
                        </div>
                        <p className='text-gray-50 text-[13px]'>{formatDate(post.date)}</p>
                        <h2 className='md:text-[22px] text-[20px] leading-snug font-bold group-hover:text-orange-600 transition-colors'>{post.title}</h2>
                        <p className='md:text-[15px] text-[13px]'>{post.excerpt}</p>
                        <span className='text-orange-600 md:text-[15px] text-[13px]'>Read more →</span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default page
