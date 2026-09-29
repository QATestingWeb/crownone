import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageBanner from '../../../../components/PageBanner/PageBanner'
import type { Metadata } from 'next'
import { blogPosts, formatDate } from '../data'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [post.image.src],
    },
  };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
        <PageBanner title='Blog' />
        <div className='w-full flex justify-center'>
            <div className="w-md flex flex-col gap-5 md:py-20 py-10 px-5">
                <Link href='/blog' className='text-orange-600 hover:underline md:text-[15px] text-[13px]'>← Back to Blog</Link>
                <p className='text-gray-50 text-[13px]'>{formatDate(post.date)}</p>
                <h2 className='heading2' data-split>{post.title}</h2>
                <Image src={post.image} alt={post.title} className='w-full h-auto rounded-10' data-aos="zoom-in" />
                {post.content.map((paragraph, index) => (
                    <p key={index} data-aos="fade-up">{paragraph}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default page
