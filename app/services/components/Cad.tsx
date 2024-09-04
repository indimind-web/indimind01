import { Navigation } from '@/app/components/nav'
import Image from 'next/image'
import React from 'react'

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

const cad = () => {
  return (
    <>
    <Navigation/>
    <div className='relative flex flex-col justify-start items-start bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 lg:px-32 py-32 w-full h-full min-h-screen px-10'>
       <div>
       <h1 className='font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight"'>CAD • 3D Assembly Modeling</h1>
              <div className='gap-5 grid grid-cols-3 mt-10'>
          {images.multipart.map((image) => (
            <Image className='rounded-md w-full h-full grayscale hover:grayscale-0 object-cover' src={"/images/cad/multipart/"+image} height={1000} width={1000} alt='' />
          ))}
        </div>
       </div>
       <div className='mt-20'>
       <h1 className='font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight"'>CAD • 3D Part Modeling</h1>
              <div className='gap-5 grid grid-cols-3 mt-10'>
          {images.singleComponent.map((image) => (
            <Image className='rounded-md w-full h-full grayscale object-cover hover:grayscale-0' src={"/images/cad/singleComponent/"+image} height={1000} width={1000} alt='' />
          ))}
        </div>
       </div>
       <div className='mt-20'>
       <h1 className='font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight"'>CAD • 3D Surface Modeling</h1>
              <div className='gap-5 grid grid-cols-3 mt-10'>
          {images.surfaceModeling.map((image) => (
            <Image className='rounded-md w-full h-full grayscale object-cover hover:grayscale-0' src={"/images/cad/surfaceModeling/"+image} height={1000} width={1000} alt='' />
          ))}
        </div>
       </div>
       <div className='mt-20'>
       <h1 className='font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight"'>CAD • Sheet Metal Modeling</h1>
              <div className='gap-5 grid grid-cols-3 mt-10'>
          {images.sheetMetal.map((image) => (
            <Image className='rounded-md w-full h-full grayscale object-cover hover:grayscale-0' src={"/images/cad/sheetMetal/"+image} height={1000} width={1000} alt='' />
          ))}
        </div>
       </div>
       <div className='mt-20'>
       <h1 className='font-bold text-3xl text-zinc-100 sm:text-4xl tracking-tight"'>CAD • Fabricated Structure Modeling</h1>
              <div className='gap-5 grid grid-cols-3 mt-10'>
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