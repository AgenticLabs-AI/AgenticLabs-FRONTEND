import React from "react";
import Footer from "../components/page/Footer";
import Header from "../components/page/Header";
import Hero from "../components/page/Hero";
import Trust from "../components/page/Trust";
import Pricing from "../components/page/Pricing";

const Landing = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <Hero />
      <Trust />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Landing;
