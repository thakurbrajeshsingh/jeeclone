import React, { Component } from "react";
import { Button, makeStyles, AppBar, Toolbar, Box } from "@material-ui/core";

// Component
import Up from "./Up";
import Down from "./Down";


const Main = () => { 
  return (
    <>
    <div>
      <Up />
      <Down />
      </div>
    </>
  );
};

export default Main;
