import React from 'react'
import SplitText from '../../reactbits_component/Split_Text'
import Particles from '../../reactbits_component/Particles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import Lenis from 'lenis';

const contact_page = () => {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');


};

  return (
    <div className=' relative w-screen h-auto px-20 mt-32 overflow-hidden'>

      <div className="absolute w-screen h-screen ">
        <Particles
          particleColors={['#AD49E1', '#7A1CAC']}
          particleCount={50}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        
      </div>      
      


      <div className="z-10">

        <div className="text-center">
          <SplitText
            text="Let's Work Together!"
            className=" mb-2 text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-center py-3"
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
            text="Here's how you can reach me. Feel free to drop a message through any of these channels."
            className="mb-5 text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-xl  font-montserrat"
            delay={10}
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

        <div className="flex justify-center flex-wrap gap-5">
          
          <div className="card p-5 w-[250px] text-center backdrop-blur-glass bg-glass-white border border-glass-border shadow-glass rounded-xl card-lg hover:transition-transform hover:-translate-y-1 hover:ease-out duration-500">
           
            <div className="flex flex-col items-center text-center">

              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800">
                <FontAwesomeIcon icon={faEnvelope} className="text-purple-500 text-xl" />
              </div>

              <h1 className="font-montserrat text-xl font-semibold my-2">Email</h1>
              <h2 className="font-montserrat text-base my-2 text-slate-900 dark:text-slate-300">novydelacruzjr@gmail.com</h2>

              <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=novydelacruzjr@gmail.com&su=Hello%20Novy&body=I%20wanted%20to%20reach%20out%20about..." target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline my-2">Contact via Email</button>
              </a>
            </div>

          </div>

          <div className="card p-5 w-[250px] text-center backdrop-blur-glass bg-glass-white border border-glass-border shadow-glass rounded-xl card-lg transition-transform ease-in hover:-translate-y-1 hover:ease-out duration-400">
           
            <div className="flex flex-col items-center text-center">

              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800">
                <FontAwesomeIcon icon={faFacebook} className="text-purple-500 text-xl" />
              </div>

              <h1 className="font-montserrat text-xl font-semibold my-2">Facebook</h1>
              <h2 className="font-montserrat text-base my-2 text-slate-900 dark:text-slate-300">Novy Dela Cruz</h2>

              <a href='https://www.facebook.com/novy.dela.cruz.97247' target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline my-2">Contact via Facebook</button>
              </a>

            </div>

          </div>

          <div className="card p-5 w-[250px] text-center backdrop-blur-glass bg-glass-white border border-glass-border shadow-glass rounded-xl card-lg transition-transform ease-in hover:-translate-y-1 hover:ease-out duration-400">
           
            <div className="flex flex-col items-center text-center">

              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800">
                <FontAwesomeIcon icon={faInstagram} className="text-purple-500 text-xl" />
              </div>

              <h1 className="font-montserrat text-xl font-semibold my-2">Instagram</h1>
              <h2 className="font-montserrat text-base my-2 text-slate-900 dark:text-slate-300">Novy Dela Cruz / @nvdcrx</h2>

              <a href='https://www.instagram.com/nvydcrx/' target="_blank" rel="noopener noreferrer" >
                <button className="btn btn-outline my-2">Contact via Instagram</button>
              </a>

            </div>

          </div>                    

          <div className="card p-5 w-[250px] text-center backdrop-blur-glass bg-glass-white border border-glass-border shadow-glass rounded-xl card-lg transition-transform ease-in hover:-translate-y-1 hover:ease-out duration-400">
           
            <div className="flex flex-col items-center text-center">

              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800">
                <FontAwesomeIcon icon={faLinkedin} className="text-purple-500 text-xl" />
              </div>

              <h1 className="font-montserrat text-xl font-semibold my-2">LinkedIn</h1>
              <h2 className="font-montserrat text-base my-2 text-slate-900 dark:text-slate-300">Novy dela Cruz Jr.</h2>

              <a href='https://www.linkedin.com/in/novy-dela-cruz-jr-8401a1342/' target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline my-2">Contact via LinkedIn</button>
              </a>

            </div>

          </div>  



          <div className="card p-5 w-[250px] text-center backdrop-blur-glass bg-glass-white border border-glass-border shadow-glass rounded-xl card-lg transition-transform ease-in hover:-translate-y-1 hover:ease-out duration-400">
           
            <div className="flex flex-col items-center text-center">

              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800">
                <FontAwesomeIcon icon={faGithub} className="text-purple-500 text-xl" />
              </div>

              <h1 className="font-montserrat text-xl font-semibold my-2">Github</h1>
              <h2 className="font-montserrat text-base my-2 text-slate-900 dark:text-slate-300">NJdcruz</h2>

              <a href='https://github.com/NJdcruz' target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline my-2">Contact via Github</button>
              </a>


            </div>

          </div>  

          <div className="card p-5 w-[250px] text-center backdrop-blur-glass bg-glass-white border border-glass-border shadow-glass rounded-xl card-lg transition-transform ease-in hover:-translate-y-1 hover:ease-out duration-400">
           
            <div className="flex flex-col items-center text-center">

              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800">
                <FontAwesomeIcon icon={faPhone} className="text-purple-500 text-xl" />
              </div>

              <h1 className="font-montserrat text-xl font-semibold my-2">Phone</h1>
              <h2 className="font-montserrat text-base my-2 text-slate-900 dark:text-slate-300">Globe: 09452581081 <br/> DITO: 09924861015 </h2>

             
            </div>

          </div>  
        

        </div>



      </div>

      <div className="text-center mt-6">
                  <SplitText
            text="I'm currently available for freelance work and new opportunities. Typically respond within 24 hours."
            className="mb-5 text-base sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-xl font-montserrat"
            delay={10}
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
  )
}

export default contact_page