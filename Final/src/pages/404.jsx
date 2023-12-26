import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';

function NotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}

        <div className="flex items-center justify-center text-center pb-12 md:pb-16 h-96">
              {/* Heading of startup content */}
                <h1 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-400">404</span> Not <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-400">Found</span>
                </h1>

        </div>

      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default NotFound;