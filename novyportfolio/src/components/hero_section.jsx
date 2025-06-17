import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload} from '@fortawesome/free-solid-svg-icons';

import GradientText from '../reactbits_component/GradientText';
import Particles from '../reactbits_component/Particles';
import RotatingText from '../reactbits_component/RotatingText';
import ScrollVelocity from '../reactbits_component/ScrollVelocity';
import ThemeController from '../reactbits_component/ThemeController';
import AnimatedContent from '../reactbits_component/AnimatedContent';



const hero_section = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
  return (

    <div className=" relative w-full h-screen overflow-hidden  ">

    <div style={{
       width: '100%', 
       height: '100%', 
       position: 'absolute', 
       zIndex:0,

        }}>
      <Particles
        particleColors={['#AD49E1', '#7A1CAC']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>

 

    

    

        <div className="  mr-5 mt-5 w-auto h-screen flex justify-center items-center" >

            <div className="flex justify-center items-center relative z-10" >
                <div className="div gap-y-5 text-center justify-center px-10" data-aos="fade-up"  data-aos-duration="500">
                  <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                    <h1 className='text-3xl sm:text-3xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-semibold font-montserrat text-slate-800 dark:text-slate-200'> Hi, I'm</h1>
                    <GradientText
                      colors={["#2E073F", "#7A1CAC", "#A40793", "#AD49E1", "#EBD3F8"]}
                      animationSpeed={3}
                      showBorder={false}
                      className="text-7xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-semibold font-montserrat"
                    >
                        Novy 
                    </GradientText>
                  </div>


                        <div className="flex flex-wrap items-center justify-center gap-x-2">

                          <div className="card backdrop-blur-glass bg-glass-white border border-glass-border shadow-glass p-2 " data-aos="fade-up" data-aos-duration="500">
                            
                            <RotatingText
                              texts={['UI/UX', 'Frontend']}
                              mainClassName="text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-montserrat font-semibold text-slate-800 dark:text-slate-200"
                              staggerFrom={"last"}
                              initial={{ y: "100%" }}
                              animate={{ y: 0 }}
                              exit={{ y: "-120%" }}
                              staggerDuration={0.025}
                              splitLevelClassName="overflow-hidden"
                              transition={{ type: "spring", damping: 30, stiffness: 400 }}
                              rotationInterval={3000}
                            />
                            
                          </div>

                          <span className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-montserrat font-semibold text-slate-800 dark:text-slate-200">
                            Developer
                          </span>

                        </div>


                    <p className=" text-lg sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl my-5 text-gray-500 dark:text-slate-400" data-aos="fade-up" data-aos-duration="600">
                    I bring design to life with precision and creativity <br></br>
                    Always ready to transform your vision into reality
                    </p>

                    <div className="div my-3" data-aos="fade-up"  data-aos-duration="800">
                      <div className=" space-x-5 text-2xl sm: md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
                        <div className="tooltip" data-tip="Novy Dela Cruz">
                          
                        <a href='https://www.facebook.com/novy.dela.cruz.97247' target="_blank" rel="noopener noreferrer">
                          
                          <FontAwesomeIcon icon={faFacebook} className='text-blue-500 hover:text-blue-600 hover:cursor-pointer hover:transform hover:-translate-y-1 hover:ease-out duration-500'/>
                        </a>
                        </div>

                        <div className="tooltip" data-tip="Novy Dela Cruz">
                        <a href='https://www.instagram.com/nvydcrx/' target="_blank" rel="noopener noreferrer" >
                          <FontAwesomeIcon icon={faInstagram} className='text-orange-500 hover:text-orange-600 hover:cursor-pointer hover:transform hover:-translate-y-1 hover:ease-out duration-500' />
                        </a>
                        </div> 

                        <div className="tooltip" data-tip="novydelacruzjr@gmail.com">

                        <a   href="https://mail.google.com/mail/?view=cm&fs=1&to=novydelacruzjr@gmail.com&su=Hello%20Novy&body=I%20wanted%20to%20reach%20out%20about..." target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faEnvelope} className=' text-gray-500 hover:text-gray-600 hover:cursor-pointer hover:transform hover:-translate-y-1 hover:ease-out duration-500'/>
                        </a>
                        </div> 

                        <div className="tooltip" data-tip="Novy dela Cruz Jr.">

                        <a href='https://www.linkedin.com/in/novy-dela-cruz-jr-8401a1342/' target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLinkedin} className='text-blue-700 hover:text-blue-800 hover:cursor-pointer hover:transform hover:-translate-y-1 hover:ease-out duration-500'/>
                        </a>
                        </div>

                        
                        <div className="tooltip" data-tip="NJdcruz">

                        <a href='https://github.com/NJdcruz' target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGithub} className='text-purple-400 hover:text-purple-500 hover:cursor-pointer hover:transform hover:-translate-y-1 hover:ease-out duration-500'/>
                        </a>
                        </div>


                      </div>
                    </div>

                    <a href='./public/Novy_Dela_Cruz_Resume.pdf' download={"NovyDelaCruz_CV.pdf"} data-aos="fade-up"  data-aos-duration="900">
                      <button className="btn btn-wide btn-circle bg-gradient-to-r from-[#A40793] to-[#7A1CAC] hover:bg-[#2E073F] mt-3 hover:btn-secondary shadow-glass text-slate-50">
                        <FontAwesomeIcon icon={faDownload} className='text-slate-50 text-base' />
                        Download Resume
                        </button>
                    </a>
                </div>
            </div>

            
        </div>
        
        {/*<div className="px-52">
        <marquee>

       
     
          
            <div className="flex justify-center gap-56 px-">
                <img src='./src/assets/skill_logo/html5.png' className='w-auto h-20'></img>
                 <img src='./src/assets/skill_logo/javascript.png' className='w-auto h-20'></img>
                  <img src='./src/assets/skill_logo/mysql.png' className='w-auto h-20'></img>
                   <img src='./src/assets/skill_logo/react.png' className='w-auto h-20'></img>
                    <img src='./src/assets/skill_logo/css (1).png' className='w-auto h-20'></img>
            </div>
           
           
   
            

            
            
      
         </marquee>
         </div>*/}
    </div>
  )
}

export default hero_section