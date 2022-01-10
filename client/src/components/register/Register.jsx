import React, { Component } from "react";

import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";

// Component
import Footer from "../footer/Main";
import Header from "../header/Header";
import Navbar from "../header/Navbar";
import Body from "../register/Body"
const useStyle = makeStyles({});

const Main = () => {
    const classes = useStyle();
  return (
    <>
      <Header />
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};

export default Main;
