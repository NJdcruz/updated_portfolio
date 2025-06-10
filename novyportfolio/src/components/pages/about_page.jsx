import React from 'react'
import SplitText from '../../reactbits_component/Split_Text'
import AnimatedContent from '../../reactbits_component/AnimatedContent';
import Lenis from 'lenis';

const about_page = () => {
    const handleAnimationComplete = () => {
  console.log('All letters have animated!');

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
    <div className='w-full h-auto px-20 my-32 '>

      <div className=" w-[650px] flexitems-center">
        <SplitText
          text="Helping Companies to thrive in digital world"
          className=" mb-5 text-6xl font-bold text-center py-3"
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

      <div className="flex justify-end divider">
        <div className="flex items-center justify-center p-10 rounded-full bg-gradient-to-r from-[#2E073F] to-[#7A1CAC] drop-shadow-custom_purple">
          <img
            src="./NJ_logo_white.png"
            className="w-[210px] h-[100px] drop-shadow-custom_purple"
            alt="Logo"
          />
        </div>
      </div>


      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">

        <AnimatedContent>

          <div className="mt-20 flex flex-col flex-wrap gap-5">

            <h1 className=' text-4xl font-montserrat font-base italic '>My passion for design, coding, and aesthetics gives me a distinctive edge in the world of UI/UX.</h1>

            <h1 className='text-7xl font-montserrat'>Together, we’ll redefine the standard...</h1>
          </div>

        </AnimatedContent>



        <div className="dov">

          <img src='./about_page_image.JPG' className=' w-[50vw] transform tr'/>

        </div>


      </div>


      <div className="py-10">

        <div className="idv">
          <SplitText
            text="I can help you with..."
            className=" mb-5 text-5xl font-bold text-center py-3"
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
                <p className='text-xl font-montserrat font-normal'>
                  I deliver strong and user-friendly digital designs.
                </p>
              </div>

          </div>

          <div className="div">
              <div className="divider">02</div>

              <div className="div">

                <h1 className='text-2xl my-5 font-montserrat font-semibold'>Front-end Development</h1>
                <p className='text-xl font-montserrat font-normal'>
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
            className=" mb-5 text-5xl font-bold text-center"
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
        <div className="flex flex-wrap">


            {Skillitems.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-auto p-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 "
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-52 h-52 mb-2"
                />
                <span className="text-center text-sm font-medium font-montserrat tracking-wide font-semibold">{skill.name}</span>
              </div>
            ))}
      </div>

      </div>

  

    </div>
  )
}

export default about_page