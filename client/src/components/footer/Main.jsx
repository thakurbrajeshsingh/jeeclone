import React, { Component } from "react";
import { Button, makeStyles, AppBar, Toolbar, Box } from "@material-ui/core";

// Component
import Up from "./Up";
import Down from "./Down";
const useStyle = makeStyles({});

const Main = () => {
  const classes = useStyle();
  return (
    <>
      <Up />
      <Down />
    </>
  );
};

export default Main;
