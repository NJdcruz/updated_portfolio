import React from 'react'

import ScrollVelocity from '../reactbits_component/ScrollVelocity'
import ScrollReveal from '../reactbits_component/ScrollReveal'


const about_section = () => {
  return (
    <div className="relative w-full h-screen bg-[url('/bg-mesh-light.png')] bg-cover bg-no-repeat bg-center dark:bg-[url('/bg-mesh-dark.png')] ">
    
    
            <img src='./Aboutme_portrait.png' className='mx-auto w-auto h-full drop-shadow-custom_purple  pt-24 transition-all duration-300 ease-in-out transform hover:scale-110' data-aos="zoom-in-up" data-aos-duration="5000"/>

            
       <div className=" absolute bottom-0 p-0">
            <ScrollVelocity
 
            texts={['UI/UX – Front-end Developer –']}
            
            className='relative z-10 bottom-5 font-montserrat font-extrabold text-9xl tracking-wider text-slate-300'
            />  
        </div> 

        <div className="div">
            
        </div>

        <div className="absolute top-0 px-5 pt-20 w-[40vw]">
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                className="relative z-0 font-montserrat"
            >
                Empowering clients to shine in the digital era.    Together, we’ll redefine the standard
                    
            </ScrollReveal>


        </div>

        <div className="absolute bottom-52 right-0 pl-10 pr-5 w-[40vw]">
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                className="relative z-0 font-montserrat text-lg"
            >
            My passion for design, coding, and aesthetics gives me a distinctive edge in the world of UI/UX.
                   
            </ScrollReveal>
        </div>






    </div>
  )
}

export default about_section