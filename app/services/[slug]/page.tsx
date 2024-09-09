import React from 'react'
import {services} from "@/util/services"
import Cad, { metadata as cadMetadata } from '../components/Cad'
import Npd from '../components/Npd'
import Id, { metadata as idMetadata} from '../components/Id'
import Gd from '../components/Gd'
import Ta from '../components/Ta'
import Rd from '../components/Rd'
import Pm from '../components/Pm'
import Wd , {metadata as wdMetadata} from '../components/Wd'
import Dm from '../components/Dm'
import { Metadata } from 'next'
type Props = {
    params:{
        slug: string
    }
}
export async function generateMetadata(
  { params }:Props): Promise<Metadata> {
  // read route params
  const slug = params.slug
     if(slug == "cad"){
    return cadMetadata
  }
  if(slug == "npd"){
    return{
      title:"indimind - New product development service"
    }
  }
  if(slug == "id"){
    return idMetadata
  }
  if(slug == "gd"){
    return {
      title:"indimind - graphic designing service"
    }
  }
  if(slug == "ta"){
    return {
      title:"indimind - talent aquisition"
    }
  }
  if(slug == "rd"){
    return {
      title:"indimind - research and development service"
    }
  }
  if(slug == "pm"){
    return {
      title:"indimind - product manufacturing"
    }
  }
  if(slug == "wd"){
    return wdMetadata
  }
  if(slug == "dm"){
    return {
      title:"indimind - digital marketing service"
    }
  }
  return {
    title: "indimind",
    description: "Indimind is an india based consultancy agency, which provides soltion for many fields such as mechanical, interior designing, marketing, web developement, graphic designing, 'digital marketing and much more......",
    keywords: [
      'indimind',
      'web development service',
      'consultancy services',
      'best consultancy',
      'part manufacturing service',
      'graphic design service',
      'digital marketing service',
      'indimind services',
      'next.js website development',
     'react website'
    ]
  }
}

const page = ({ params }: Props) => {

    const {slug} = params;
    
  if(slug == "cad"){
    return <Cad/>
  }
  if(slug == "npd"){
    return <Npd/>
  }
  if(slug == "id"){
    return <Id/>
  }
  if(slug == "gd"){
    return <Gd/>
  }
  if(slug == "ta"){
    return <Ta/>
  }
  if(slug == "rd"){
    return <Rd/>
  }
  if(slug == "pm"){
    return <Pm/>
  }
  if(slug == "wd"){
    return <Wd/>
  }
  if(slug == "dm"){
    return <Dm/>
  }
}

export default page