import React from 'react'
import SplitText from '../../reactbits_component/Split_Text'
import AnimatedContent from '../../reactbits_component/AnimatedContent';
import Lenis from 'lenis';

const about_page = () => {
    const handleAnimationComplete = () => {
  console.log('All letters have animated!');




};


    const Skillitems = [
        {name:"HTML", image:"./skill_logo/html_logo.png"},
        {name:"CSS", image:"./skill_logo/CSS_logo.png"},
        {name:"Javascript", image:"./skill_logo/JS_logo.png"},
        {name:"C-sharp", image:"./skill_logo/Csharp_logo.png"},
        {name:"Tailwind CSS", image:"./skill_logo/Tailwind_logo.png"},
        {name:"Java", image:"./skill_logo/Java_logo.png"},
        {name:"React", image:"./skill_logo/React_logo.png"},    
        {name:"Figma", image:"./skill_logo/Figma_logo.png"},
        {name:"Github", image:"./skill_logo/Githhub_logo.png"}, 
        {name:"Canva", image:"./skill_logo/canva_logo.png"},
        {name:".NET (MAUI)", image:"./skill_logo/net_logo.png"}, 
        {name:"SQL", image:"./skill_logo/SQL_logo.png"},    
                                                                
    ]
  return (
    <div className=' w-full h-auto px-10 my-32 '>

    <div className=" flex flex-wrap ">
      <SplitText
        text="Helping Companies to thrive in digital world"
        className="mb-2 text-2xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold font-montserrat pb-3"
        delay={20}
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

      <div className="flex justify-end divider my-0 ">

      </div>


      <div className="flex flex-col justify-between sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">

        <AnimatedContent>

          <div className=" py-10 ">
            <div className="flex w-80 sm:w-96 md:w-96 lg:w-96 xl:w-96 2xl:w-96">
              <div className="divider divider-horizontal m-0 p-0"></div>
              <h1 className=' text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-montserrat font-base p-2 '>My passion for design, coding, and aesthetics gives me a distinctive edge in the world of UI/UX.</h1>
            </div>
 

            <div className="mt-20 flex flex-col flex-wrap gap-5">




            <h1 className=' text-2xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-montserrat font-extrabold'>Together, we’ll redefine the standard.</h1>

           </div>
          </div>

        </AnimatedContent>



        <div className="dov">

          <img src='./about_page_image.JPG' className=' w-auto transform tr'/>

        </div>


      </div>


      <div className="py-10">

        <div className="idv">
          <SplitText
            text="I can help you with..."
            className=" mb-5  text-2xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-montserrat font-extrabold text-center py-3"
            delay={20}
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

        <AnimatedContent>



        <div className="flex flex-row flex-wrap gap-10 px-10">

          <div className="div">
              <div className="divider">01</div>

              <div className="div">

                <h1 className='text-2xl my-5 font-montserrat font-semibold'>UI/UX Design</h1>
                <p className='text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-xl 2xl:text-xl font-montserrat font-normal'>
                  I deliver strong and user-friendly digital designs.
                </p>
              </div>

          </div>

          <div className="div">
              <div className="divider">02</div>

              <div className="div">

                <h1 className='text-2xl my-5 font-montserrat font-semibold'>Front-end Development</h1>
                <p className='text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-xl 2xl:text-xl font-montserrat font-normal'>
                  I build digital products from scratch that fit seamlessly with design.
                </p>
              </div>

          </div> 

        </div>
       </AnimatedContent>
      </div>


      <div className="flex flex-col flex-wrap gap-4 justify-center pt-10">
        <div className="div">
          <SplitText
            text="Tech Stack"
            className=" mb-5 font-bold font-montserrat text-center text-2xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl"
            delay={20}
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
          <div className="divider"></div>                 
        </div>
        <div className="flex flex-wrap justify-center">


            {Skillitems.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-auto p-2 rounded-lg hover:scale-105 transition-transform duration-300  "
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-52 h-52 mb-2"
                />
                <span className="text-center text-sm  font-montserrat tracking-wide font-semibold">{skill.name}</span>
              </div>
            ))}
      </div>

      </div>

  

    </div>
  )
}

export default about_page