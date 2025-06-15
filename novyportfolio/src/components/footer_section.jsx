import React from 'react'

const footer_section = () => {
  return (
    <div>
        <footer className="overflow-y-hidden footer sm:footer-horizontal text-base-content p-10">
            <aside>
                <img src="./NJ_logo_black.png" className="w-[50px] h-[50px] dark:hidden " data-aos="fade-up" data-aos-anchor-placement="center-bottom" />
                <img src="./NJ_logo_white.png" className="w-[50px] h-[50px] hidden dark:block " data-aos="fade-up" />
        
                <p>
                Novy T. dela Cruz Jr.
                <br />
                UI/UIX Designer / Front-end Developer
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">UI/UX Design</a>
                <a className="link link-hover">Web/Mobile Development (Front-end)</a>

            </nav>
            <nav>
                <h6 className="footer-title">Contacts</h6>
                <a className="link link-hover tracking-wider "> DITO: 09924861015 <br /> Globe: 09452581081</a>
                <a 
                className="link link-hover tracking-wider "  
                href="https://mail.google.com/mail/?view=cm&fs=1&to=novydelacruzjr@gmail.com&su=Hello%20Novy&body=I%20wanted%20to%20reach%20out%20about..."  > 
                E-mail: novydelacruzjr@gmail.com
                </a>
           
            </nav>

        </footer>
    </div>
  )
}

export default footer_section