import React from 'react'
import { Link } from 'react-router-dom';
import ScrollReveal from '../reactbits_component/ScrollReveal'
import FlowingMenu from '../reactbits_component/FlowingMenu'
import SplitText from '../reactbits_component/Split_Text'


const project_section = () => {

    const handleAnimationComplete = () => {
  console.log('All letters have animated!');


    }
      const demoItems = [
  { link: '', text: 'C I M', image: './mock_up/CIM_logo.png' },
  { link: '#', text: 'EvoTKS', image: './mock_up/evo_logo.gif' },
  { link: '#', text: 'COVIDective', image: './mock_up/covidective_logo.png' },
  { link: '#', text: 'G-quipment', image: './mock_up/g_quipment_logo.png' },
  ]
  return (
    <div className=' py-32'>

      <div className="text-center">
        <h1 className='text-4xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold font-montserrat py-3 bg-gradient-to-r from-[#2E073F] to-[#7A1CAC] bg-clip-text text-transparent dark:from-[#AD49E1] dark:to-[#7A1CAC]'>Projects</h1>
         <p className=' font-montserrat text-lg pt-2 pb-10 sm:text-lg md:text-2xl lg:text-2xl xl:text-xl 2xl:text-xl'>Notable projects that i have work on are:</p>
      </div>
      {/*
        <Link to="/project_page">

          <div className='h-[600px]'>
            <FlowingMenu items={demoItems}  />
          </div>

        </Link>
      */}
<Link to="/project_page">

  <div className="div mx-10">
          <div className="divider">01</div>

            <div className=" overflow-hidden flex flex-row justify-between px-10 transform translate-x-2 duration-500 ease-in-out hover:cursor-pointer hover:scale-95 hover:translate-x-4">
              <SplitText
                text="CIM "
                className="  text-7xl font-bold text-center py-3"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />


              <SplitText
                text="01"
                className="  text-7xl font-bold text-center py-3"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>

          <div className="divider">02</div>

            <div className="overflow-hidden flex flex-row justify-between px-10 transform translate-x-2 duration-500 ease-in-out hover:cursor-pointer hover:scale-95 hover:translate-x-4">
              <SplitText
                text="EvoTKS "
                className="  text-7xl font-bold text-center py-3"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />

              <SplitText
                text="02"
                className="  text-7xl font-bold text-center py-3"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>

          <div className="divider">03</div>

            <div className="overflow-hidden flex flex-row justify-between px-10 transform translate-x-2 duration-500 ease-in-out hover:cursor-pointer hover:scale-95 hover:translate-x-4">
              <SplitText
                text="COVIDective "
                className="  text-7xl font-bold text-center py-3"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />

              <SplitText
                text="03"
                className="  text-7xl font-bold text-center py-3"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>

          <div className="divider">04</div>

            <div className="overflow-hidden flex flex-row justify-between px-10 transform translate-x-2 duration-500 ease-in-out hover:cursor-pointer hover:scale-95 hover:translate-x-4">
              <SplitText
                text="G-quipment"
                className="  text-7xl font-bold text-center py-3"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />

              <SplitText
                text="04"
                className="  text-7xl font-bold text-center py-3"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>




      </div>

</Link>
      
    </div>
    

  )
}

export default project_section