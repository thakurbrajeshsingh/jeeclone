import React from "react";
import { Button, makeStyles, AppBar, Toolbar, Box } from "@material-ui/core";

import LandingPage from "../home/LandingPage";



import { Link } from "react-router-dom";

import Header from "./Header";

const useStyle = makeStyles({
  navbar: {
    marginTop: "6%",
    width: "100%",
    height: "50px",
    background: "#002C56",
  },
  navButton: {
    marginTop: "-1%",
    color: "#FFFFFF",
    borderColor: "white",
    display: "flex",
    justifyContent: "center",
    textDecoration:"none"
  },
});

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  width: "0.1rem",
  height: "4rem",
  marginTop: -2,
};

const Navbar = () => {
  const classes = useStyle();
  const logoNIC = "https://i.ibb.co/CB2T5cy/NTA-logo.png";
  return (
    <>
      <AppBar className={classes.navbar}>
    
        <Toolbar>
        <Header />
          <Box className={classes.navButton}>
          
          <Link to='/'><Button className={classes.navButton} style={{marginTop:"13%"}}>Home</Button></Link>
            <Box borderRight={1} {...defaultProps} />
            <Button className={classes.navButton}>Contact Us</Button>
            <Box {...defaultProps} borderLeft={0} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
