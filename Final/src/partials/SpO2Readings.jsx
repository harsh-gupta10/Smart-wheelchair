import React, { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal";

import { Link, useLocation } from 'react-router-dom';


function SpO2Readings() {
    const basePath = import.meta.env.BASE_URL;
    const iframeStyle = {
        width: '500px',
        height: '300px',
        border: '1px solid #cccccc',
        fontSize: "24px",
        color: "%23ff0000",
        bgcolor: "%23ffffff"
    };

    return (

        <div className="flex flex-col items-center text-center p-2 md:p-5 bg-green-400" id="tasks_list">
           
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-9">
                SpO2 Readings
            </div>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-0 text-blue-400">

                <iframe style={iframeStyle} src="https://thingspeak.com/channels/2165919/charts/2?dynamic=true&results=200&type=line&update=15"></iframe>
                

            </div>

        </div>
    );
}

export default SpO2Readings;