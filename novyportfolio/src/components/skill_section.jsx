import {useState}from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Particles from '../reactbits_component/Particles';


const skill_section = () => {

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


    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,             // Enable auto-slide
        autoplaySpeed: 500,        // Set slide interval to 5 seconds (5000 ms)
        arrows:false,

        responsive: [
        {
            breakpoint: 1024, // For tablets and small laptops
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600, // For most mobile devices
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 480, // For small mobile screens
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };

  return (
    <div className=" relative w-full h-screen flex flex-col items-center justify-center text-center px-4 ">

<div className="w-full h-full absolute z-0">
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

        <div className='relative z-10'>
            <h1 className='text-4xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold font-montserrat py-3 bg-gradient-to-r from-[#2E073F] to-[#7A1CAC] bg-clip-text text-transparent dark:from-[#AD49E1] dark:to-[#7A1CAC]'>
            Tech Stack
            </h1>
            <p className='font-montserrat text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-xl '>
            I excel at delivering high-quality front-end web solutions using technologies such as:
            </p>
        </div>

        <div className="w-full px-10 ">
            <Slider {...sliderSettings}>
            {Skillitems.map((Skillitems, index) => (
                <div key={index} className="p-5 py-10">
                <div className="backdrop-blur-glass flex flex-col items-center justify-center rounded-xl card-lg transition-all duration-300 ease-in-out transform hover:scale-110">
                    <img
                    src={Skillitems.image}
                    alt={Skillitems.name}
                    className="h-40 w-40 object-contain mb-2 hover:drop-shadow-custom_purple"
                    data-aos="fade-left"
                    />
                    <h1 className="font-montserrat bg-gradient-to-r from-[#2E073F] to-[#7A1CAC] bg-clip-text text-transparent dark:from-[#AD49E1] dark:to-[#7A1CAC] text-xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
                    {Skillitems.name}
                    </h1>
                </div>
                </div>
            ))}
            </Slider>
        </div>
</div>

  )
}

export default skill_section