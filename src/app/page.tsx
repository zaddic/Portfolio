"use client"
import initializeAOS  from "./myAOS"
import { useEffect } from "react";
import Intro from "./Sections/Intro/Intro"  
// import Skill from './Sections/Skill/Skill';
import Summary from './Sections/Summary/Summary';
import Qualification from './Sections/Qualification/Qualification';
import {Card} from './Sections/Skill/Skill'

function Page() {
  useEffect(() => {
    initializeAOS()
  },[])
  return (
   <div className=' bg-mygradient'>
    <Intro/>
    <Summary/>
    <Qualification/>
   </div>
  )
}

export default Page


