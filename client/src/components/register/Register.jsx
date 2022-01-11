import React, { Component } from "react";

import { makeStyles, Box } from "@material-ui/core";

// Component
import Footer from "../footer/Main";
import Header from "../header/Header";
import Navbar from "../header/Navbar";
import Form from "../register/Form";
const useStyle = makeStyles({
});

const Main = () => {
  const classes = useStyle();
  return (
    <>
        <Header />
        <Navbar />
        <Form />
        <Footer />
    
    </>
  );
};

export default Main;
