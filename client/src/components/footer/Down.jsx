import React, { Component,useState,useEffect } from "react";
import {
  Button,
  makeStyles,
  AppBar,
  Toolbar,
  Box,
  Typography,
} from "@material-ui/core";

// Component

const useStyle = makeStyles({
  container: {
    background: "#002C56",
    display:"flex",
    height:60
  },
  text:{
    textAlign:"center",
    fontSize:15,
    fontWeight:700,
    color:"#FFFFFF"
  }
});

const Down = () => {
  const classes = useStyle();
  const [count, setCount] = useState( 48512559);

  useEffect(()=>{
    setCount(count + 294)
    }, [])

  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.text}>Version 2.6628</Typography>
        <Typography className={classes.text}>
          This site is designed, developed and hosted by CBSE, NTA and Results
          Division, NIC and the contents are provided by NTA. For any further
          information, please contact NTA
        </Typography>
        <Typography className={classes.text}>
        Visitors : {count}
        </Typography>
      </Box>
    </>
  );
};

export default Down;
