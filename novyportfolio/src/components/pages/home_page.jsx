import React from 'react'
import Hero_section from '../hero_section'
import About_section from '../about_section'
import Skill_section from '../skill_section'
import Project_section from '../project_section'
import Footer_section from '../footer_section'
import ScrollVelocity from '../../reactbits_component/ScrollVelocity'

const home_page = () => {
  return (
    <div>
        <Hero_section/>
        <About_section/>
        <Skill_section/>

          <ScrollVelocity

          texts={['UI/UX – Front-end Developer –']}
          
          className=' z-10 bottom-5 font-montserrat font-extrabold text-9xl tracking-wider text-slate-900 dark:text-slate-300'
          />  
        <Project_section/>
        <Footer_section/>

    </div>
  )
}

export default home_page