import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import NotFound from "./pages/404";
import Accelometer from "./pages/Accelometer";
import CollisionStop from "./pages/CollisonStop";
import Oxiometer from "./pages/Oxiometer";
import Emergency from "./pages/emergency";

function App() {
  const location = useLocation();
  const basePath = import.meta.env.BASE_URL;

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path={basePath} element={<Home />} />
        <Route exact path={`${basePath}/*`} element={<NotFound />} />
        <Route exact path={`${basePath}/accelometer`} element={<Accelometer />} />
        <Route exact path={`${basePath}/collision`} element={<CollisionStop />} />
        <Route exact path={`${basePath}/oxiometer`} element={<Oxiometer />} />
        <Route exact path={`${basePath}/emergency`} element={<Emergency />} />

      </Routes>
    </>
  );
}

export default App;
