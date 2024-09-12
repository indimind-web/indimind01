import { Navigation } from '@/app/components/nav'
import Image from 'next/image'
import React from 'react'
import { Metadata } from 'next'

const images = {
  interiorDesigning: [
    '/images/interior/1.png',
    '/images/interior/2.jpg',
    '/images/interior/3.png',
    '/images/interior/4.png',
    '/images/interior/5.png',
    '/images/interior/6.png',
    '/images/interior/7.png',
    '/images/interior/8.jpg',
    '/images/interior/9.png',
    '/images/interior/10.jpg',
    '/images/interior/11.png',
    '/images/interior/12.jpg',
    '/images/interior/13.jpg',
    '/images/interior/14.png',
    '/images/interior/15.png',
    '/images/interior/16.png',
    '/images/interior/17.png',
    '/images/interior/18.png',
    '/images/interior/19.png',
  ],
}

export const metadata:Metadata ={
  title: 'Indimind - Interior Design',
  description: 'Indimind is a leading Indian company specializing interior design. Our team of professionals brings a unique blend of creativity, expertise, and dedication to delivering high-quality products.',
  category:"interior designing",
  keywords:[
    'indimind',
    'interior design',
    'interior designing',
    'interior design services',
    'interior design company',
    'india interior design company',
    'india interior designers',
    'india interior designers in bangalore',
    'india interior designers in mumbai',
    'india interior designers in pune',
    'india interior designers in hyderabad',
    'india interior designers in chennai',
    'india interior designers in mumbai',
    'india interior designers in bangalore',
    'india interior designers in pune',
    'india interior designers in chennai',
    'india interior designers in bangalore',
    'india interior designers in mumbai',
    'india interior designers in hyderabad',
    'india interior designers in chennai',
    'india interior designers in bangalore',
    'india interior designers in mumbai',
    'india interior designers in hyderabad',
    'india interior designers in chennai',
  ],
  publisher:"vatsal patel",
  openGraph: {
    url: 'https://indimind.in/services/id',
    title: 'Indimind - Interior Design',
    description: 'Indimind is a leading Indian company specializing interior design. Our team of professionals brings a unique blend of creativity, expertise, and dedication to delivering high-quality products.',
    images: [
      {
        url: 'https://indimind.in/images/interior/1.png',
        width: 1920,
        height: 1080,
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


const Id: React.FC = () => {

  return (
    <>
      <Navigation />
      <div className='relative flex flex-col justify-start items-start bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 lg:px-32 py-32 w-full h-full min-h-screen px-10'>
        <div>
          <h1 className='font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight'>
            Interior Design
          </h1>
          <div className='gap-5 grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3'>
            {images.interiorDesigning.map((image,index) => ( 
              <Image
                key={index}
                height={1000}
                width={1000}
                src={image}
                alt='Interior Design Image'
                className='rounded-md w-full h-full object-cover'
              />
            ))} 
          </div>
        </div>
      </div>
    </>
  )
}

export default Id
