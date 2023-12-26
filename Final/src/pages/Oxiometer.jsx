import React from 'react';

import Header from '../partials/Header';

import Footer from '../partials/Footer';
import HeartRate from '../images/HeartRate.jpeg';
import HeartPicture from '../images/HeartPicture.jpg';
import AllHealth from '../images/AllHealth.jpg';
import Breath from '../images/Breath.jpg';
import Blood from '../images/Blood.jpg';


function Oxiometer() {
    
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center text-center text-4xl md:text-5xl p-40">
                
                <div className="flex flex-col flex-grow gap-10 md:text-3xl bg-indigo-400" data-aos="zoom-y-out"
                  data-aos-delay="300">
                    <div className="p-2 md:text-5xl font-bold ">
                        Oxiometer
                    </div>
                    <div className=" flex p-10 items-center text-center justify-center">
                    <img src={AllHealth} className="h-auto w-30"></img>
                    </div>
                    

                    <div
                  className="flex items-center flex-col md:flex-row justify-center p-4 mx-auto md:mt-10 pt-5"
                  
                >
                  <div className="px-20 pb-30">
                    <h1
                      className="text-5xl md:text-4xl font-extrabold leading-tightertracking-tighter mb-4"
                      data-aos="zoom-y-out"
                    >
                      Enhancing Health Care {" "}
                      <span className="bg-clip-text text-red-500">
                        Monitoring System
                      </span>
                    </h1>
                  </div>
                  <div className="max-w-xs max-auto sm:max-w-none text-gray-900">
                    <p className="text-2.5xl md:text-2xl px-20 pb-30">
                      Real time monitoring of Heart Rate, Oxygen level and Blood pressure and alerting system if person is suffering from health problems
                      to provide safety 
                    </p>
                  </div>
                </div>
                <hr />
                    <div className="flex flex-row items-center justify-center p-10 gap-5">
                        <img src={HeartPicture} className="flex h-40 w-auto"></img>
                        <div>
                            <span className="font-bold">
                                Normal Heart Rate: {" "}
                                <span className="text-red-500">
                                    60-100 beats/minute <br />
                                </span>    
                            </span>
                                If less than or more then alert system activates 
                            
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-row items-center justify-center p-10 gap-5">
                        <div>
                            <span className="font-bold">
                                Normal Blood pressure: {" "}
                                <span className="text-red-500">
                                    80/120 mmHg <br />
                                </span>
                            </span>
                            If less or more then alert system activates 
                        </div>
                        <img src={Blood} className="flex h-40 w-auto"></img>
                    </div>
                    <hr />
                    <div className="flex flex-row items-center justify-center p-10 gap-5">
                        <img src={Breath} className="flex h-40 w-auto "></img>
                        <div>
                            <span className="font-bold">
                                Normal Oxygen levels: {" "}
                                <span className="text-red-500">
                                    90-100 % <br />
                                </span>
                            </span>
                            If less than 90% then alert system activates  
                        </div>
                    </div>
                    <hr />
                    
                    
                </div>

            </div>
                
          
            <Footer />

        </>
    );
}


export default Oxiometer;
