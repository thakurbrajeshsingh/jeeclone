import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyle = makeStyles({
  container: {
    // margin:10,
    // marginTop:"10%",
    background: "#ECECEC",
    height: 500,
  },
  sectionHead: {
    margin: "0px 10px 10px 0px",
    fontWeight: 600,
    marginLeft: 20,
  },
  formContainer: {
    marginTop: 130,
    background: "#ffffff",
    margin: "50px 100px 5px 100px",
    height: 600,
  },
});

const Body = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.formContainer}>
          <form>
            <Typography className={classes.sectionHead}>
              Personal Details
            </Typography>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Body;
