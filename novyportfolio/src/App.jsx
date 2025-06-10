import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Contact_page from './components/pages/contact_page';
import Home_page from './components/pages/home_page';
import About_page from './components/pages/about_page';
import Project_page from './components/pages/project_page';

import Lenis from 'lenis'
import ScrollVelocity from './reactbits_component/ScrollVelocity'







function App() {
  const[loading, setloading] = useState(true);

   useEffect(() => {
    // Simulate loading (e.g., fetching data)
    const timer = setTimeout(() => {
      setloading(false); // after 2 seconds, set loading to false
    }, 3800);

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
        <Routes>
          <Route path='/home_page'  element={<Home_page />}/>
          <Route path='/contact_page'  element={<Contact_page />}/>
          <Route path='/about_page'  element={<About_page />}/>
          <Route path='/project_page'  element={<Project_page />}/>
          

        </Routes>

         
      </div>

      )}

     

    </Router>

  )
}

export default App
