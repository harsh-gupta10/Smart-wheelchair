import React, { useState, useRef, useEffect } from "react";
import Header from '../partials/Header';
import Footer from '../partials/Footer';

import Modal from "../utils/Modal";

import TemperatureReadings from "../partials/TemperatureReadings";
import SpO2Readings from "../partials/SpO2Readings";
import HeartrateReadings from "../partials/HeartrateReadings";
import GyroscopeReadings from "../partials/GyroscopeReadings";
import AccelarationReadings from "../partials/AccelometerReadings";
import RotationsPerMinuteReadings from "../partials/RotationsPerMinute";
import VelocityOfChairReadings from "../partials/VelocityOfChair";
import SystoleReadings from "../partials/SystoleReadings";
import DiastoleReadings from "../partials/DiastoleReadings";






function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const video = useRef(null);
  const basePath = import.meta.env.BASE_URL;

  useEffect(() => {
    videoModalOpen ? video.current.play() : video.current.pause();
  }, [videoModalOpen]);


  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <section className="relative ">
          {/* Illustration behind hero content */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2  pointer-events-none"
            aria-hidden="true"
          >
            <svg
              width="1360"
              height="578"
              viewBox="0 0 1360 578"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-01"
                >
                  <stop stopColor="#67e8f9" offset="10%" />
                  <stop stopColor="#7dd3fc" offset="77.402%" />
                  <stop stopColor="#67e8f9" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle cx="70" cy="400" r="64" />
                <circle cx="1300" cy="500" r="74" />
                <circle cx="1300" cy="500" r="74" />
                <circle cx="1300" cy="500" r="74" />
              </g>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
            {/* Hero content */}
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Hero image */}
              <div>
                <div
                  className="relative flex justify-center mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                >
                  <div className="flex flex-col justify-center">
                    <img
                      src="data:image/jpeg;base64,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"
                    />
                  </div>
                </div>

                {/* Modal */}
                <Modal
                  id="modal"
                  ariaLabel="modal-headline"
                  show={videoModalOpen}
                  handleClose={() => setVideoModalOpen(false)}
                >
                  <div className="relative pb-9/16">
                    <video
                      ref={video}
                      className="absolute w-full h-full"
                      width="1920"
                      height="1080"
                      loop
                      autoPlay
                      controls
                    >
                      <source src="/videos/video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Modal>
              </div>
              {/* Hero image ended. */}

              {/* modification of the code starts. */}

              <div className="text-center pb-12 md:pb-16">
                {/* Heading of startup content */}
                <h1
                  className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                  data-aos="zoom-y-out"
                >
                  Smart{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    Wheel Chair
                  </span>
                </h1>

                {/* Connecting startups data starts */}

                <div className="max-w-3xl mx-auto">
                  <p
                    className="text-2xl text-gray-900 mb-8"
                    data-aos="zoom-y-out"
                    data-aos-delay="150"
                  >
                    Improving Quality of Life through IoT-enabled Wheelchair Technology
                  </p>
                </div>

                {/* Connecting startups data ends */}

                <hr />

                {/* Start for details of the program. */}

                <div
                  className="flex items-center flex-col md:flex-row justify-center p-4 mx-auto md:mt-10 pt-5"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div>
                    <h1
                      className="text-5xl md:text-4xl font-extrabold leading-tightertracking-tighter mb-4"
                      data-aos="zoom-y-out"
                    >
                      Enhancing Wheel chair Mobility{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
                        with IoT
                      </span>
                    </h1>
                  </div>
                  <div className="max-w-xs max-auto sm:max-w-none text-gray-900">
                    <p className="text-2.5xl md:text-2xl">
                      The IoT-based smart wheelchair project aims
                      to enhance the lives of wheelchair users by
                      providing a comprehensive mobility solution.
                      It focuses on improving independence, autonomy,
                      and overall quality of life. Through IoT technology, t
                      he smart wheelchair enables remote control,
                      integrates with smart devices, and incorporates
                      advanced sensors for safety.
                    </p>
                  </div>
                </div>
                {/* End for details of the program.*/}
              </div>

              {/* End of starup content heading */}


              {/* modification of the code ends.*/}
              <hr />
            </div>

            {/* Here We can change to the componenets form so that we can view the code clearly */}

          </div>
          {/* Upto Here the content of the page done  */}


          {/* Start of the graphs section */}
          <div className="p-20">
            {/* First column starts */}
            <div className="grid md:grid-cols-2 gap-20 p-2">
              <HeartrateReadings />
              <SpO2Readings />
            </div>
            {/* First column ends */}

            {/* Second column starts */}
          
            <div className="flex  p-5">
              <AccelarationReadings />
              </div>
            
            {/* Second column ends */}

            {/* Fifth column starts */}
          <div className="grid md:grid-cols-2 gap-12 p-5">
            <SystoleReadings />
            <DiastoleReadings />

          </div>
          {/* Fifth column ends */}
            
          

          {/* Third column starts */}

          <div className="flex  p-5">
            <GyroscopeReadings />
          </div>

          {/* Third column ends */}

          

          


        

          {/* Fourth column starts */}
          <div className="grid md:grid-cols-2 gap-12 p-5">
            <RotationsPerMinuteReadings />
            <VelocityOfChairReadings />

          </div>
          {/* Fourth column ends */}

          {/* Fourth column starts */}
        <div className="flex justify-center items-center text-center p-20">
            <TemperatureReadings />
          </div>
          {/* Fourth column ends */}
          


          {/* End of the graphs section */}
          </div>

          <br /><br /><br /><br /><br /><br /><br />

        </section>

      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;