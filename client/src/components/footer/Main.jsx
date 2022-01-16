import React, { Component } from "react";
import { Button, makeStyles, AppBar, Toolbar, Box } from "@material-ui/core";

// Component
import Up from "./Up";
import Down from "./Down";

const useStyle = makeStyles({  
});

const Main = () => {
  const classes = useStyle();
  return (
    <>
    <div className={classes.align}>
      <Up />
      <Down />
      </div>
    </>
  );
};

export default Main;
