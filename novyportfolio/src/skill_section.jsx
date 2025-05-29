import {useState}from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const skill_section = () => {

    const Skillitems = [
        {name:"HTML", image:"./src/assets/skill_logo/html_logo.png"},
        {name:"CSS", image:"./src/assets/skill_logo/CSS_logo.png"},
        {name:"Javascript", image:"./src/assets/skill_logo/JS_logo.png"},
        {name:"C-sharp", image:"./src/assets/skill_logo/Csharp_logo.png"},
        {name:"Tailwind CSS", image:"./src/assets/skill_logo/Tailwind_logo.png"},
        {name:"Java", image:"./src/assets/skill_logo/Java_logo.png"},
        {name:"React", image:"./src/assets/skill_logo/React_logo.png"},    
        {name:"Figma", image:"./src/assets/skill_logo/Figma_logo.png"},
        {name:"Github", image:"./src/assets/skill_logo/Githhub_logo.png"}, 
        {name:"Canva", image:"./src/assets/skill_logo/canva_logo.png"},   
                                                                
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
    <div className=' py-28 '>
        <div className="text-center">
            <h1 className='text-4xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold font-montserrat py-3 bg-gradient-to-r from-[#2E073F] to-[#7A1CAC] bg-clip-text text-transparent dark:from-[#AD49E1] dark:to-[#7A1CAC]'>Skill Area</h1>

            <p className=' font-montserrat text-lg pt-2 pb-10 sm:text-lg md:text-2xl lg:text-2xl xl:text-xl 2xl:text-xl'>I excel at delivering high-quality front-end web solutions using technologies such as:</p>

        </div>

        <Slider {...sliderSettings}>
            {Skillitems.map((Skillitems, index) => (
                <div key={index} className="p-5 py-10   ">

                    
                <div className=" backdrop-blur-glass flex flex-col items-center justify-center rounded-xl card-lg transition-all duration-300 ease-in-out transform hover:scale-110 ">
                    <img
                    src={Skillitems.image}
                    alt={Skillitems.name}
                    className="h-40 w-40 object-contain mb-2 hover:drop-shadow-custom_purple " data-aos="fade-left"
                    />
                    <h1 className="font-montserrat bg-gradient-to-r from-[#2E073F] to-[#7A1CAC] bg-clip-text text-transparent dark:from-[#AD49E1] dark:to-[#7A1CAC] text-xl font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl">
                    {Skillitems.name}
                    </h1>
                </div>
                </div>
            ))}            

        </Slider>

  

    </div>
  )
}

export default skill_section