import { useEffect,useState } from "react"
import { Link } from 'react-router-dom';


const navbar = () => {
    const [scrolled, setScrolled] = useState(false);
      
    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
    



  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // Change this value for when the background should appear
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`fixed top-0 left-0 right-0 z-50 pt-3 transition-all duration-300 ${
        scrolled ? 'bg-slate-100 shadow-md dark:bg-gray-900' : 'bg-transparent'
      }`}>
    <div className={`w-full px-10 mx-auto  py-3 transition-all duration-300 ${
          scrolled
            ? 'flex justify-between items-center m-0 p-0'
            : 'grid grid-rows-2 justify-center gap-2'
        }`}>
      <div className="flex justify-center">
        <Link to="/home_page">

          <img 
          src="./NJ_logo_black.png" 
          onClick={() => scrollToSection('hero')} 
          className="w-[50px] h-[50px] dark:hidden hover:cursor-pointer " 
          data-aos="fade-up" 
          data-aos-anchor-placement="center-bottom" />

          <img 
          src="./NJ_logo_purple.png" 
          onClick={() => scrollToSection('hero')} 
          className="w-[50px] h-[50px] hidden dark:block hover:cursor-pointer" 
          data-aos="fade-up" />
        </Link>

      </div>
      <div className="flex justify-center space-x-4">
        <Link to="/about_page">
          <button className="btn btn-ghost btn-sm">About</button>
        </Link>

        <Link to="/project_page">
          <button className="btn btn-ghost btn-sm">Projects</button>
        </Link>

        <Link to="/contact_page">
          <button  className="btn btn-ghost btn-sm">Contact</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default navbar