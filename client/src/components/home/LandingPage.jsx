import React from "react";

// components
import MainL from "../mainContent/currentNews/MainL";
import MainR from "../rightSection/MainR";
import MainC from "../center/MainC";
import Footer from '../footer/Main'

const LandingPage = () => {
  return (
    <>
      <MainL />
      <MainR />
      <MainC />
      <Footer />
    </>
  );
};

export default LandingPage;
