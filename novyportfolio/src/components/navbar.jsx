import React from 'react'

const navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 mt-3 ">
    <div className="grid grid-rows-2 justify-center gap-2 py-2">
      <div className="flex justify-center">
        <img src="./src/assets/NJ_logo_black.png" className="w-[70px] h-[70px] dark:hidden" data-aos="fade-up" data-aos-anchor-placement="center-bottom" />
        <img src="./src/assets/NJ_logo_purple.png" className="w-[70px] h-[70px] hidden dark:block" data-aos="fade-up" />
        
      </div>
      <div className="flex justify-center space-x-4">
      <button className="btn btn-ghost btn-sm">About me</button>
      <button className="btn btn-ghost btn-sm">Skill Area</button>
      <button className="btn btn-ghost btn-sm">Projects</button>
      </div>
    </div>
  </div>
  )
}

export default navbar