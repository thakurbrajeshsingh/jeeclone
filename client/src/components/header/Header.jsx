import React, { Component } from "react";

import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  header: {
    background: "#FFFFFF",
    height: "auto",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoME: {
    textAlign: "left",
  },
  logoNIC: {
    marginTop: "1%",
    background:"red"
  },
  headerText: {
    color: "#002C5B",
    fontSize: "25px",
    fontWeight: 600,
  },
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
          <Typography className={classes.headerText} style={{textAlign:"center"}}>
            Joint Entrance Examination (Main)
            <Typography
              style={{ fontSize: "20px",textAlign:"center" }}
            >
              JEE (Main) 2022
            </Typography>
          </Typography>
          <img src={logoNIC} alt="logo" className={classes.logoNIC} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
