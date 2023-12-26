import React, { useState, useRef, useEffect } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";
import { Link, useLocation } from 'react-router-dom';


function GyroscopeReadings() {
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

        <div className="flex flex-col items-center text-centerp-2 md:p-20 bg-green-400" id="tasks_list">
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12">
                Gyroscope Readings
            </div>
            <div className="md:text-3xl text-2xl font-bold pb-10 pt-12 text-blue-400 flex flex-row">
                <div className="md:text-3xl text-2xl font-bold pr-10">
                    <iframe style={iframeStyle} src="https://thingspeak.com/channels/2165912/charts/4?dynamic=true&results=200&type=line&update=15"></iframe>
                </div>
                <div className="md:text-3xl text-2xl font-bold pr-10">
                    <iframe style={iframeStyle} src="https://thingspeak.com/channels/2165912/charts/5?dynamic=true&results=200&type=line&update=15"></iframe>
                </div>
                <div>
                    <iframe style={iframeStyle} src="https://thingspeak.com/channels/2165912/charts/6?dynamic=true&results=200&type=line&update=15"></iframe>
                </div>
            </div>

        </div>
    );
}

export default GyroscopeReadings;