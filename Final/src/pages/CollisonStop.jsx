import React from 'react';

import Footer from '../partials/Footer';

import Header from '../partials/Header';

function CollisionStop(){

return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center text-center text-4xl md:text-5xl p-40">
                
                <div className="flex flex-col flex-grow gap-10 md:text-3xl bg-green-400" data-aos="zoom-y-out"
                  data-aos-delay="300">
                    <div className="p-2 md:text-5xl font-bold ">
                        Oxiometer
                    </div>
                    <div className=" flex p-10 items-center text-center justify-center">
                    
                    </div>
                
                    

                <div className="flex items-center flex-col md:flex-row justify-center p-4 mx-auto md:mt-10 pt-5"
                  
                >
                  <div className="px-20 pb-30">
                    <h1
                      className="text-5xl md:text-4xl font-extrabold leading-tightertracking-tighter mb-4"
                      data-aos="zoom-y-out"
                    >
                      Enhancing Collision {" "}
                      <span className="bg-clip-text text-transparent text-blue-500">
                        Detection System
                      </span>
                    </h1>
                  </div>
                  <div className="max-w-xs max-auto sm:max-w-none text-gray-900">
                    <p className="text-2.5xl md:text-2xl px-20 pb-30">
                      Real time obstacle detection system and alerting system if person is going to collide then wheel chair stops 
                      to provide safety 
                    </p>
                  </div>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
        </div>

    );
}


export default CollisionStop;
