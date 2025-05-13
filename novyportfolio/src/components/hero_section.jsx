import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



const hero_section = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
       
    <div className="flex justify-between mr-5 mt-5" >
        <div className="div">
            <img src='./src/assets/hero_image_purple_1.png' className='w-[50vw] h-[90vh] block dark:hidden'  data-aos="fade-right"/>
            <img src='./src/assets/hero_image_purple.png' className='w-[50vw] h-[90vh] hidden dark:block' data-aos="fade-right" />
            

        </div>

        <div className="flex justify-center items-center" data-aos="fade-left">
            <div className="div gap-y-5 text-justify">
                    <h1 className='text-3xl  font-normal'>I'm</h1>
                    <h1 className="text-6xl font-extrabold font-helvetica py-3 bg-gradient-to-r from-[#2E073F] to-[#EBD3F8] bg-clip-text text-transparent dark:text-[#AD49E1]">Novy T. dela Cruz Jr.</h1>
                    <h2  className="text-4xl font-roboto font-normal text-justify ">UI/UX Designer and Front-end Developer </h2>
                <p className=" text-xl my-5 text-gray-500">
                Bring design to life with precision and creativity <br></br>
                Always ready to transform your vision into reality
                </p>

                <div className="div my-3">
                  <div className=" space-x-5 text-4xl">
                    <a>
                      
                      <FontAwesomeIcon icon={faFacebook} className='text-blue-500 hover:text-blue-600 hover:cursor-pointer hover:mb-2'/>
                    </a>
                    <a >
                      <FontAwesomeIcon icon={faInstagram} className='text-orange-500 hover:text-orange-600 hover:cursor-pointer hover:mb-2' />
                    </a>
                    <a >
                      <FontAwesomeIcon icon={faEnvelope} className=' text-gray-500 hover:text-gray-600 hover:cursor-pointer hover:mb-2'/>
                    </a>
                    <a>
                      <FontAwesomeIcon icon={faLinkedin} className='text-blue-700 hover:text-blue-800 hover:cursor-pointer hover:mb-2'/>
                    </a>
                  </div>
                </div>
                <button className="btn btn-wide btn-soft bg-[#EBD3F8] hover:bg-[#2E073F] mt-3 hover:text-white dark:text-gray-800 dark:btn-secondary">Get Resume</button>
            </div>
        </div>
    </div>
  )
}

export default hero_section