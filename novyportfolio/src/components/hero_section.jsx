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

 

    

    

        <div className="  mr-5 mt-5 w-auto h-screen md:flex lg:flex xl:flex 2xl:flex lg:justify-between xl:justify-between 2xl:justify-between" >
            <div className="div">
                <img src='./hero_image_purple.png' className='w-full h-[50vh] md:w-[50vw] lg:w-[50vw] xl:w-[50vw] 2xl:w-[50vw] sm: md:h-full lg:h-full xl:h-full 2xl:h-full'  data-aos="fade-right"/>

                

            </div>

            <div className="flex justify-center items-center relative z-10" data-aos="fade-left">
                <div className="div gap-y-5 text-justify">
                        <h1 className='text-2xl sm:text-3xl md:text-xl lg:text-xl xl:text-3xl 2xl:text-4xl  font-base'> Hello, I'm</h1>
                        <GradientText
                          colors={["#2E073F", "#7A1CAC", "#A40793", "#AD49E1", "#EBD3F8"]}
                          animationSpeed={3}
                          showBorder={false}
                          className="text-7xl sm:text-6xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-semibold font-montserrat py-3"
                        >
                           Novy dela Cruz Jr.
                        </GradientText>

                        <div className="flex flex-wrap items-center gap-x-2">

                          <div className="card backdrop-blur-glass bg-glass-white border border-glass-border shadow-glass p-2 ">
                            
                            <RotatingText
                              texts={['UI/UX', 'Front-end']}
                              mainClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-roboto font-normal"
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
                              <span className="text-2xl sm:text-3xl md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-roboto font-normal">
                              Developer
                            </span>

                        </div>


                    <p className=" text-lg sm:text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl my-5 text-gray-500 dark:text-slate-400">
                    Bring design to life with precision and creativity <br></br>
                    Always ready to transform your vision into reality
                    </p>

                    <div className="div my-3">
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

                    <a href='./public/RESUME_NOVY_DELACRUZ_may_29.pdf' download={"NovyDelaCruz_CV.pdf"}>
                      <button className="btn btn-wide btn-circle bg-gradient-to-r from-[#2E073F] to-[#7A1CAC] hover:bg-[#2E073F] mt-3 hover:btn-secondary drop-shadow-custom_purple">
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