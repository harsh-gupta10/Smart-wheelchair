import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const iconWidth = "30";
  const iconHeight = "30";
  const location=useLocation();
  const isLandingPage=()=>{
    return location.pathname === '/wheelchair';
  }

  return (
    <footer className="fixed bottom-0 bg-slate-50 w-full mt-10 bg-sky-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="flex items-center justify-center p-2 border-t border-gray-200 ">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:mb-0">
          {/* svg icons from https://tabler-icons.io/ */}
        

            <li className="ml-4">
              <Link to="https://www.linkedin.com/*" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="E-cell-linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width={iconWidth} height={iconHeight} viewBox="0 0 24 24" stroke-width="1.3" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M8 11l0 5"></path>
                  <path d="M8 8l0 .01"></path>
                  <path d="M12 16l0 -5"></path>
                  <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                </svg>
              </Link>
            </li>

            <li className="ml-4">
              <Link to="https://www.facebook.com/*" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="E-cell-facebook">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width={iconWidth} height={iconHeight} viewBox="0 0 24 24" stroke-width="1.3" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                </svg>
              </Link>
            </li>

            <li className="ml-4">
              <Link to="https://www.instagram.com/*" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="E-cell-instagram">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width={iconWidth} height={iconHeight} viewBox="0 0 24 24" stroke-width="1.3" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M16.5 7.5l0 .01"></path>
                </svg>
              </Link>
            </li>

            <li className="ml-4">
              <a href="https://iiit.ac.in" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="E-cell-website">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world" width={iconWidth} height={iconHeight} viewBox="0 0 24 24" stroke-width="1" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M3.6 9h16.8"></path>
                  <path d="M3.6 15h16.8"></path>
                  <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                  <path d="M12.5 3a17 17 0 0 1 0 18"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

         
        {/* Bottom area */}
        <div className="flex items-center justify-center p-0">
           

          {/* Copyrights note */}
          
         
         
          {/* Not gonna remove this cause GNU GPL */}

    
         

        </div>
         

      </div>
         
    </footer>
  );
}

export default Footer;
