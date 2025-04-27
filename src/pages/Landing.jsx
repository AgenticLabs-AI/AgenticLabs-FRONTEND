import React from "react";
import Footer from "../components/page/Footer";
import Header from "../components/page/Header";
import Hero from "../components/page/Hero";
import Trust from "../components/page/Trust";
import Pricing from "../components/page/Pricing";
import Services from "../components/page/Services";
import Contact from "../components/page/Contact";

const Landing = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <Hero />
      <Trust />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
