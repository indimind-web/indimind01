import { Navigation } from '@/app/components/nav'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const images = {
  interiorDesigning: [
    {
      src:"/images/webdevelopment/1.gif",
      href:"https://artistdev.netlify.app/"
    },
    {
      src:"/images/webdevelopment/2.gif",
      href:"https://applevisiondev.netlify.app/"
    },
    {
      src:"/images/webdevelopment/3.png",
      href:"https://animator-dev.framer.website/"
    }
  ],
}

export const metadata:Metadata ={
  title: 'Indimind - Web development',
  description: 'Indimind is a leading Indian company specializing in web development. Our team of professionals brings a unique blend of creativity, expertise, and dedication to delivering high-quality products.',
  category:"Web development",
  keywords:[
    'indimind',
    'web development',
    'web development service',
    'best consultancy',
    'part manufacturing service',
    'graphic design service',
    'digital marketing service',
    'indimind services',
    'next.js website development',
    'react website',
    'web development agency',
    'web development company',
    'web development consultancy',
    'web development team',
    'web development projects',
    'web development portfolio',
    'web development process',
    'web development tools',
    'web development frameworks',
    'web development languages',
    'web development platforms',
    'web development tools',
    'web development platforms',
    'web development frameworks',
    'web development languages',
    'web development resources',
    'web development tutorials',
    'web development documentation',
    'web development support',
    'web development support team',
    'web development support tickets',
    'web development support requests',

  ],
  publisher:"dev patel",
  openGraph: {
    url: 'https://indimind.in/services/wd',
    title: 'Indimind - Web Development Service',
    description: 'Indimind is a leading Indian company specializing web development. Our team of professionals brings a unique blend of creativity, expertise, and dedication to delivering high-quality products.',
    images: [
      {
        url: 'https://indimind.in/images/webdevelopment/3.png',
        width: 300,
        height: 200,
      },
    ],
    siteName:"indimind services",
    type: 'website',
    emails: 'indimindservices@gmail.com',
    locale: 'en-US',
    
  },
  robots:{
    follow:true,
    index:true,
  }
}



const Wd = () => {
  return (
    <>
      <Navigation />
      <div className='relative flex flex-col justify-start items-start bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 px-10 lg:px-32 py-32 w-full h-full min-h-screen'>
        <div>
          <h1 className='font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight'>
            Web Development
          </h1>
          <div className='gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
            {images.interiorDesigning.map((image,index) => ( 
             <Link href={image.href} className='hover:contrast-75 transition-all'>
               <Image
                key={index}
                height={1000}
                width={1000}
                src={image.src}
                alt='Interior Design Image'
                className='rounded-md w-full h-full object-cover'
              />
             </Link>
            ))} 
          </div>
        </div>
      </div>
    </>
  )
}

export default Wd