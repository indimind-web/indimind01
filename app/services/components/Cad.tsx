import { Navigation } from '@/app/components/nav'
import Image from 'next/image'
import React from 'react'
import { Metadata } from 'next'

const images = {
  multipart:[
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg',
    '5.jpeg',
    '6.jpeg',
    '7.jpeg',
    '8.jpeg',
    '9.jpeg',
    '10.jpeg',
    '11.jpeg',
  ],
  singleComponent:[
    '1.jpeg',
    '2.jpeg',
  ],
  surfaceModeling:[
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
  ],
  sheetMetal:[
    '1.jpeg',
    '2.jpeg',
    '3.jpeg',
    '4.jpeg',
  ],
  fabricatedStructure:[
    '1.jpeg',
    '2.jpeg',
  ]
}
export const metadata:Metadata ={
  title: 'Indimind - Innovative 3D Design Solutions',
  description: 'Indimind is a leading global provider of innovative 3D design solutions, offering expertise in CAD, 3D modeling, and fabrication.',
  publisher:"sanket patel",
  keywords:[
    'indimind',
    '3d design',
    'cad',
    '3d modeling',
    'fabrication',
   'sheet metal',
    'surface modeling',
    'fabricated structure',
    'indimind services',
    '3d printing',
    'virtual reality',
    'augmented reality',
    'indimind website development',
    '3d printing services',
    'virtual reality services',
    'augmented reality services',
    'indimind website design',
    'indimind consultancy',
    '3d printing consultancy',
    'virtual reality consultancy',
    'augmented reality consultancy',
    'indimind website design consultancy',
    'indimind marketing',
    '3d printing marketing',
    'virtual reality marketing',
    'augmented reality marketing',
    'indimind website design marketing',
    'indimind consultancy marketing',
    'indimind marketing consultancy',
    'indimind website design marketing consultancy',
    'indimind part manufacturing',
    '3d printing part manufacturing',
    'virtual reality part manufacturing',
    'indimind website design part manufacturing',
    'indimind consultancy part manufacturing',
    'indimind marketing part manufacturing',
    'indimind website design marketing part manufacturing',
    'indimind part manufacturing consultancy',
  ],
  category:"cad",
  openGraph: {
    title: 'Indimind - CAD/CAE Services',
    description: 'Indimind is a leading global provider of innovative 3D design solutions, offering expertise in CAD, 3D modeling, and fabrication.',
    url: 'https://indimind.in/services/cad',
    siteName: 'indimind',
    images: [
      {
        url: 'https://indimind.in/images/cad/fabricatedStructure/1.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/fabricatedStructure/2.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/multipart/1.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/multipart/2.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/multipart/3.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/multipart/4.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/multipart/5.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/multipart/6.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/multipart/7.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/multipart/8.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/multipart/9.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/multipart/10.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/multipart/11.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/multipart/12.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/sheetMetal/1.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/sheetMetal/2.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/sheetMetal/3.jpeg',
        width: 1920,
        height: 1080,
      },
      {
        url: 'https://indimind.in/images/cad/sheetMetal/4.jpeg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
    emails:"indimindservices@gmail.com"
  },
  robots:{
    follow:true,
    index:true,
  },
  

}

const cad = () => {
  return (
    <>
    <Navigation/>
    <div className='relative flex flex-col justify-start items-start bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 lg:px-32 py-32 w-full h-full min-h-screen px-10'>
       <div>
       <h1 className='font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight"'>CAD • 3D Assembly Modeling</h1>
              <div className='gap-5 grid md:grid-cols-3 grid-cols-1 mt-10'>
          {images.multipart.map((image) => (
            <Image className='rounded-md w-full h-full grayscale hover:grayscale-0 object-cover' src={"/images/cad/multipart/"+image} height={1000} width={1000} alt='' />
          ))}
        </div>
       </div>
       <div className='mt-20'>
       <h1 className='font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight"'>CAD • 3D Part Modeling</h1>
              <div className='gap-5 grid md:grid-cols-3 grid-cols-1 mt-10'>
          {images.singleComponent.map((image) => (
            <Image className='rounded-md w-full h-full grayscale object-cover hover:grayscale-0' src={"/images/cad/singleComponent/"+image} height={1000} width={1000} alt='' />
          ))}
        </div>
       </div>
       <div className='mt-20'>
       <h1 className='font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight"'>CAD • 3D Surface Modeling</h1>
              <div className='gap-5 grid md:grid-cols-3 grid-cols-1 mt-10'>
          {images.surfaceModeling.map((image) => (
            <Image className='rounded-md w-full h-full grayscale object-cover hover:grayscale-0' src={"/images/cad/surfaceModeling/"+image} height={1000} width={1000} alt='' />
          ))}
        </div>
       </div>
       <div className='mt-20'>
       <h1 className='font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight"'>CAD • Sheet Metal Modeling</h1>
              <div className='gap-5 grid md:grid-cols-3 grid-cols-1 mt-10'>
          {images.sheetMetal.map((image) => (
            <Image className='rounded-md w-full h-full grayscale object-cover hover:grayscale-0' src={"/images/cad/sheetMetal/"+image} height={1000} width={1000} alt='' />
          ))}
        </div>
       </div>
       <div className='mt-20'>
       <h1 className='font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight"'>CAD • Fabricated Structure Modeling</h1>
              <div className='gap-5 grid md:grid-cols-3 grid-cols-1 mt-10'>
          {images.fabricatedStructure.map((image) => (
            <Image className='rounded-md w-full h-full grayscale object-cover hover:grayscale-0' src={"/images/cad/fabricatedStructure/"+image} height={1000} width={1000} alt='' />
          ))}
        </div>
       </div>
    </div>
    </>
  )
}

export default cad