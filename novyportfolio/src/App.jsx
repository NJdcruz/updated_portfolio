import { useState,useEffect } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Hero_section from './components/hero_section'
import About_section from './components/about_section'
import Skill_section from './components/skill_section'
import Project_section from './components/project_section'
import Footer_section from './components/footer_section'
import Splashscreen from './components/splashscreen'
import '@fontsource/montserrat';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis'
import ScrollVelocity from './reactbits_component/ScrollVelocity'







function App() {
  const[loading, setloading] = useState(true);

   useEffect(() => {
    // Simulate loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setloading(false); // after 2 seconds, set loading to false
    }, 4500);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  
// Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  return (
    <Router>
      {loading ? (
        <Splashscreen/>

      ):(
         <div className='relative overflow-x-hidden bg-slate-200 dark:bg-slate-900'>
        <Navbar/>

          <div id="hero">
            <Hero_section />
          </div>

          <div id="about">
            <About_section />
          </div>

          <div id="skills">
            <Skill_section />
          </div>
            
         
            <ScrollVelocity
 
            texts={['UI/UX – Front-end Developer –']}
            
            className='relative z-10 bottom-5 font-montserrat font-extrabold text-9xl tracking-wider'
            />  
           

          <div id="projects">
            <Project_section />
          </div>

         <Footer_section/>

      </div>

      )}

     

    </Router>

  )
}

export default App
