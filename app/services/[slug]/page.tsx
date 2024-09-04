import React from 'react'
import {services} from "@/util/services"
import Cad from '../components/Cad'
import Npd from '../components/Npd'
import Id from '../components/Id'
import Gd from '../components/Gd'
import Ta from '../components/Ta'
import Rd from '../components/Rd'
import Pm from '../components/Pm'
import Wd from '../components/Wd'
import Dm from '../components/Dm'
type Props = {
    params:{
        slug: string
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