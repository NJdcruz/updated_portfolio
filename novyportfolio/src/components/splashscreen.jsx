import React from 'react'
import Spline from '@splinetool/react-spline';
import Particles from '../reactbits_component/Particles';

const splashscreen = () => {
  return (
    <div className="relative w-full h-screen bg-slate-300 dark:bg-slate-900 overflow-hidden">

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


    
     <Spline scene="https://prod.spline.design/7vB5PCVfNYY0RyYX/scene.splinecode" 
     className=' w-screen h-auto' />
     </div>
  )
}

export default splashscreen