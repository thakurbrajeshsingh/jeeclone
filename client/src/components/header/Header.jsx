import React, { Component } from "react";

import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";




const useStyle = makeStyles({
  header: {
    background: "#FFFFFF",
    height: 75,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoME: {
    textAlign: "left",
  },
  logoNIC: {
    marginTop: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 600,
    alignItems: "center",
  },
  headerText:{
    color:"#002C5B",
    fontSize: 25, 
    fontWeight: 600 
  }
});

const Header = () => {
  const classes = useStyle();
  const logoME = "https://i.ibb.co/b62fYsG/ME-logo.png";
  const logoNIC = "https://i.ibb.co/CB2T5cy/NTA-logo.png";
  return (
    <>
      <AppBar>
        <Toolbar className={classes.header}>
          <img src={logoME} alt="logo" className={classes.logoME} />
          <Typography className={classes.headerText}>
            Joint Entrance Examination (Main)
            <Typography style={{fontSize:20,fontWeight:500}}>
              JEE (Main) 2021
            </Typography>
          </Typography>
          <img src={logoNIC} alt="logo" className={classes.logoNIC} />
        </Toolbar>
      </AppBar>
      
    </>
  );
};

export default Header;
