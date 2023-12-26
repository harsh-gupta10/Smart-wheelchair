import React from 'react';

import Header from '../partials/Header';

import Footer from '../partials/Footer';
import fallFront from '../images/ChairFallFront.jpeg';
import fallBack from '../images/ChairFallBack.jpeg';
import fallRight from '../images/ChairFallLeft.jpeg';
import fallLeft from '../images/ChairFallRight.jpeg';
import HeroImage from '../images/hero-image.png';
import Climb from '../images/Climb.jpg';

function Accelometer() {
    
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center text-center text-4xl md:text-5xl p-40">
                 <div className="bg-green-400" data-aos="zoom-y-out"
                  data-aos-delay="300">
                <div className="md:text-3xl flex flex-col">
                    <div className="p-2 md:text-5xl font-bold text-gray-800">
                        Acclerometer    
                    </div>
                    <div className="p-12 gap-10 flex flex-row items-center text-center justify-center">
                            <img src={Climb} ></img>
                    </div>

                    <div
                  className="flex items-center flex-col md:flex-row justify-center p-4 mx-auto md:mt-10 pt-5"
                  
                >
                  <div className="px-20 pb-30">
                    <h1
                      className="text-5xl md:text-4xl font-extrabold leading-tightertracking-tighter mb-4"
                      data-aos="zoom-y-out"
                    >
                      Enhancing Topling of Wheel Chair {" "}<br />
                      <span className="bg-clip-text text-red-500">
                        Detection System
                      </span>
                    </h1>
                  </div>
                  <div className="max-w-xs max-auto sm:max-w-none text-gray-900">
                    <p className="text-2.5xl md:text-2xl px-20 pb-30">
                      Real time monitoring of Wheel chair positional coordinates to detect chair is toppled and if toppled alert 
                      System activates
                    </p>
                  </div>
                </div>
                <hr />


                    <hr />
                    <div className="flex flex-row items-center  text-center justify-center ">
                        <div className="p-10 gap-10">
                            <div className="flex md:pb-5 items-center text-center justify-center">
                                <div className="text-3xl font-bold text-red-500">
                                Normal Position
                                </div>
                            </div>
                            
                            <img src={HeroImage} className="h-40" ></img>
                        </div>
                        <div className="flex flex-col p-2">
                            <div className="font-bold">
                                x = 0 
                            </div>
                            <div className=" font-bold">
                                y = 0
                            </div>
                            <div className=" font-bold">
                                z = 9.8
                            </div>
                        </div>
                    </div>
                    <hr />
                    
                </div>

            
               
            <div className="flex flex-row flex-grow p-40 gap-10">
                <div className="flex flex-col">
                    <div className="md:text-3xl font-3xl font-bold p-10 text-red-500">Left Fall </div>
                    <div>
                        <img src={fallLeft}></img>
                    </div>
                    <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                        <div className="font-bold">
                            x = -9.8
                        </div>
                        <div className=" font-bold">
                            y = 0
                        </div>
                        <div className=" font-bold">
                            z = 0
                        </div>
                    </div>
                </div>
                <div >
                    <div className="md:text-3xl font-3xl font-bold p-10 text-red-500">Right Fall </div>
                    <div><img src={fallRight}></img></div>
                    <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                        <div className=" font-bold">
                            x = 9.8
                        </div>
                        <div className=" font-bold">
                            y = 0
                        </div>
                        <div className="font-bold">
                            z = 0
                        </div>
                    </div>
                </div>
                <div>
                    <div className="md:text-3xl font-3xl font-bold text-red-500 p-10">Up Fall </div>
                    <div>
                        <img src={fallFront}></img>
                    </div>
                    <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                        <div className="font-bold">
                            x = 0
                        </div>
                        <div className=" font-bold">
                            y = 9.8
                        </div>
                        <div className=" font-bold">
                            z = 0
                        </div>
                    </div>
                </div>
                <div>
                    <div className="md:text-3xl font-3xl font-bold text-red-500 p-10">Down Fall </div>
                    <div>
                    <img src={fallBack}></img>
                    </div>
                    <div className="md:text-3xl font-3xl flex flex-col items-center p-10">
                        <div className=" font-bold">
                            x = 0
                        </div>
                        <div className=" font-bold">
                            y = -9.8
                        </div>
                        <div className="font-bold">
                            z = 0
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            
            </div>
        
            </div>
            <Footer />

        </>
    );
}


export default Accelometer;
