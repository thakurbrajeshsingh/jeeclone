import React from "react";

// components
import MainL from "../mainContent/currentNews/MainL";
import MainR from "../rightSection/MainR";
import MainC from "../center/MainC";
import FooterMain from "../footer/Main";

const LandingPage = () => {
  return (
    <>
      <MainL />
      <MainR />
      <MainC />
      <FooterMain />
    </>
  );
};

export default LandingPage;
