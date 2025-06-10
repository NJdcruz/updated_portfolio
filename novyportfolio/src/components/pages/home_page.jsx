import React from 'react'
import Hero_section from '../hero_section'
import About_section from '../about_section'
import Skill_section from '../skill_section'
import Project_section from '../project_section'
import Footer_section from '../footer_section'
const home_page = () => {
  return (
    <div>
        <Hero_section/>
        <About_section/>
        <Skill_section/>
        <Project_section/>
        <Footer_section/>

    </div>
  )
}

export default home_page