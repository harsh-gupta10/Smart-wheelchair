import React, { useState, useRef, useEffect } from "react";


import Footer from '../partials/Footer';
import Header from '../partials/Header';
import AlertHelp from '../images/Help.jpg';
import Panic from '../images/Panic.jpg';
import Heart from '../images/HeartPicture.jpg';
import Topled from '../images/Topled.jpg';

function Emergency(){
    const [heartRateInBeats, setHeartBeat] = useState('');
    const [TopplingOccur, setTopplingOccur] = useState('');
    const [PanicOccur, setPanicOccur] = useState('');



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.thingspeak.com/channels/2185769/fields/1.json?api_key=1PYE1Z43E7GRF9WG');
                const jsonData = await response.json();
                const fieldValue = jsonData;
                const length_of_required = fieldValue.channel.last_entry_id;
                console.log(length_of_required);
                const Latest_value_of_heartRate = fieldValue.feeds[length_of_required - 1].field1;
                setHeartBeat(Latest_value_of_heartRate);
                console.log(Latest_value_of_heartRate);
                console.log("Hello world");
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        const interval = setInterval(fetchData, 3000);
    
        return () => {
            clearInterval(interval); 
        };
    }, []);

    // Checking in console. 
    console.log(heartRateInBeats);


    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://api.thingspeak.com/channels/2185769/fields/3.json?api_key=1PYE1Z43E7GRF9WG');
              const jsonData = await response.json();
              const fieldValue = jsonData;
              const length_of_required = fieldValue.channel.last_entry_id;
              console.log(length_of_required);
              const Latest_value_of_Toppled = fieldValue.feeds[length_of_required - 1].field3;
              setTopplingOccur(Latest_value_of_Toppled);
              console.log(Latest_value_of_Toppled);
              console.log("Hello world");
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
  
      const interval = setInterval(fetchData, 3000);
  
      return () => {
          clearInterval(interval); 
      };
  }, []);

  // Checking in console. 
  console.log(TopplingOccur);



  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.thingspeak.com/channels/2185769/fields/2.json?api_key=1PYE1Z43E7GRF9WG');
            const jsonData = await response.json();
            const fieldValue = jsonData;
            const length_of_required = fieldValue.channel.last_entry_id;
            console.log(length_of_required);
            console.log(fieldValue.feeds);
            const Latest_value_of_Panic = fieldValue.feeds[length_of_required - 1].field2;
            setPanicOccur(Latest_value_of_Panic);
            console.log(Latest_value_of_Panic);
            console.log("Hello world");
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const interval = setInterval(fetchData, 3000);

    return () => {
        clearInterval(interval); 
    };
}, []);

// Checking in console. 
console.log(PanicOccur);



    useEffect(() => {
        const reloadPage = () => {
          setTimeout(() => {
            window.location.reload();
          }, 5000); 
        };
        reloadPage();
    }, []);

    



return (
        <div>
            <Header />
            <div className="flex flex-col items-center justify-center text-center text-4xl md:text-5xl p-40">
                
                <div className="flex flex-col flex-grow gap-10 md:text-3xl bg-indigo-400">
                    <div className="p-2 md:text-5xl font-bold ">
                        Emergency alerts 
                    </div>
                <div className="flex items-center flex-col md:flex-row justify-center p-4 mx-auto md:mt-10 pt-5"
                >
                  <div className="px-20">
                    <h1
                      className="text-5xl md:text-4xl font-extrabold leading-tightertracking-tighter mb-4"
                    >
                      Enhancing Alerting System {" "} <br />
                      <span className="text-red-500">
                        for Smart Wheel Chair 
                      </span>
                    </h1>
                  </div>
                  <div className="max-w-xs max-auto sm:max-w-none text-black-900">
                    <p className="text-2.5xl md:text-2xl px-20">
                      Heart Rate : {" "}
                      <span className="font-bold">
                      60 - 100 beats per minute 
                      </span>
                      <br />
                      Blood Pressure:{" "} <span className="font-bold">
                      80/120 mmHg
                      </span><br />
                      Oxygen level:{" "} <span className="font-bold">
                        90 - 100%  </span><br />
                      Topling Wheel Chair:{" "} <span className="font-bold">
                        Normal Position</span>
                        <br />

                    </p>
                  </div>
                  <div className="flex flex-center items-center justify-center text-center">
                    <img src={AlertHelp} className="h-40 w-30"></img>
                    </div>
                </div>
                <hr />

                <div className="text-3xl font-bold">
                  If there is emergency, then value will be 1<br />
                  else value will be 0
                </div>
                <hr />
                <div>

                <div className="flex flex-row p-5 items-center justify-center text-center gap-10">
                  <div>
                      <img src={Heart} className="h-40 w-30"></img>
                  </div>
                  <div>

                  
                    {(() => {
                          if ({heartRateInBeats}) {
                          return (
                              <div className="font-bold">Emergency by Heart Rate: {" "}
                              {heartRateInBeats}</div>  
                          )
                          }
                          else {
                          return (
                              <div className="font-bold">No Emergency by Heart Rate: {" "}
                              {heartRateInBeats}
                              </div>
                          )
                          }
                      })()}
                    </div>
                </div>
                <hr />  
                <div className="flex flex-row p-5 items-center justify-center text-center gap-10">
                  
                <div>
                  {(() => {
                          if ({PanicOccur}) {
                          return (
                              <div className="font-bold">Emergency by Panic Button: {" "}
                              {PanicOccur}</div>
                              
                          )
                          }
                          else {
                          return (
                              <div className="font-bold"> No Emergency by Blood Pressure: {" "}
                              {PanicOccur}
                              </div>
                          )
                          }
                      })()}
                </div>
                <div>
                  <img src={Panic} className="h-40 w-30"></img>
                </div>
                </div>
                <hr />

              <div className="flex flex-row p-5 items-center justify-center text-center gap-10">

              <div>
                  <img src={Topled} className="h-40 w-30"></img>
                </div>
                <div>
                    {(() => {
                        if ({TopplingOccur}) {
                        return (
                            <div className="font-bold">Emergency by Toppling  Chair: {" "}
                            {TopplingOccur}</div>
                            
                        )
                        }
                        else {
                        return (
                            <div className="font-bold"> No Emergency by Toppling Wheel Chair: {" "}
                            {TopplingOccur}
                            </div>
                        )
                        }
                    })()}
                </div>
               
                </div>
                </div>
            </div>
            <Footer />
        </div>
        </div>

    );
}


export default Emergency;
