import React from 'react'
import ScrollReveal from '../reactbits_component/ScrollReveal'
import FlowingMenu from '../reactbits_component/FlowingMenu'

const project_section = () => {

  const projectset = [
    { mockupimg:"./src/assets/mock_up/CIM_left.png",
      desc:"A Centralized Information and Media Platform Application with Data Analytics",
      logo:"./src/assets/mock_up/CIM_logo.png",
      overlaystyle:"absolute inset-0 bg-gradient-to-r from-[#00a228] to-black opacity-20 z-0 pointer-events-none rounded-xl",
      divider: [
      { link: '#', text: 'C I M', image: './src/assets/mock_up/CIM_logo.png' }
    ]
    },

    { mockupimg:"./src/assets/mock_up/evo_left.png",
      desc:"A timekeeping system that features a desktop and mobile application for Evotech software solution Inc.",
      logo:"./src/assets/mock_up/evo_logo.gif",
      overlaystyle:"absolute inset-0 bg-gradient-to-r from-[#ff9505] to-black opacity-20 z-0 pointer-events-none rounded-xl",
      divider: [
      { link: '#', text: 'EvoTKS', image: './src/assets/mock_up/evo_logo.gif' }
    ]
      
    }
  ]
  
  const demoItems = [
  { link: '#', text: 'C I M', image: './src/assets/mock_up/CIM_logo.png' },
  { link: '#', text: 'EvoTKS', image: './src/assets/mock_up/evo_logo.gif' },
  ]

  return (
    <div className=' overflow-y-hidden py-16'>

      <div className="text-center">
        <h1 className='text-4xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold font-montserrat py-3 bg-gradient-to-r from-[#2E073F] to-[#7A1CAC] bg-clip-text text-transparent dark:from-[#AD49E1] dark:to-[#7A1CAC]'>Projects</h1>
         <p className=' font-montserrat text-lg pt-2 pb-10 sm:text-lg md:text-2xl lg:text-2xl xl:text-xl 2xl:text-xl'>Notable projects that i have work on are:</p>
      </div>

      {projectset.map((project,index) =>(
        <div className="card mx-10 mb-10 w-auto backdrop-blur-glass bg-glass-dark dark:bg-glass-white border border-glass-border shadow-glass rounded-xl card-lg">
                      <div className='relative z-50 h-24 text-white '>
              <FlowingMenu items={project.divider} />
            </div>
       
          <div className="relative">


        
        
            <div className={project.overlaystyle}></div>

            <div className="">
              
              <img src={project.mockupimg} className='relative z-20 w-auto h-[70vh]' v data-aos="fade-up-right"/>
                
                <div className="absolute top-0 right-0 opacity-5">
                  <img src={project.logo} className='relative z-0 w-auto h-[60vh]  ' v data-aos="fade-up-right"/>
                </div>

                <div className="absolute bottom-0 left-1/2 z-30 p-10 text-end">
                
                  <ScrollReveal
                      baseOpacity={0}
                      enableBlur={true}
                      baseRotation={5}
                      blurStrength={10}
                      className="relative z-0"
                    >
                    {project.desc}

                  </ScrollReveal>
                </div>

            </div>




        
           </div>
      
 </div>
      ))}

    
       
        
    </div>
    

  )
}

export default project_section