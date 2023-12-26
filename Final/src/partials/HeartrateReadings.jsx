import React, { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";
import { Link, useLocation } from 'react-router-dom';


function HeartrateReadings() {
    const basePath = import.meta.env.BASE_URL;

    const [heartRateInBeats, setHeartBeat] = useState('');

    const iframeStyle = {
        width: '500px',
        height: '300px',
        border: '1px solid #cccccc',
        fontSize: "24px",
        color: "%23ff0000",
        bgcolor: "%23ffffff"
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.thingspeak.com/channels/2165919/fields/1.json?api_key=V5BSNS9HHDUCTTMP');
                const jsonData = await response.json();
                const fieldValue = jsonData;
                // Data in json format looks like this we can view in console. 
                console.log(jsonData);
                // Checking in console.
                const Latest_value_of_heartRate = fieldValue.feeds[0].field1;
                console.log(fieldValue.feeds[0].field1);
                // Assigning the value to field1 variable. 
                setHeartBeat(Latest_value_of_heartRate);
                console.log(heartRateInBeats);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Checking in console. 
    //console.log(heartRateInBeats);

    return (

        <div className="flex flex-col items-center text-center  p-2  bg-green-400	" id="companies_list">


            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12">
                Heart Rate Readings
            </div>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-0 text-blue-400">

                {/* Graph code here  */}
                <iframe style={iframeStyle}  src="https://thingspeak.com/channels/2165919/charts/1?dynamic=true&results=200&type=line&update=15"></iframe>
               

            </div>
        </div>
    );
}

export default HeartrateReadings;