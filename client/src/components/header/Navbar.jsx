import React from "react";
import { Button, makeStyles, AppBar, Toolbar } from "@material-ui/core";

const useStyle = makeStyles({
  navbar: {
    marginTop: 76,
    height: 50,
    background: "#002C56",
  },
  navButton: {
    marginTop: "-1%",
    color: "#FFFFFF",
    // margin:4
  },
});

const Navbar = () => {
  const classes = useStyle();
  const logoNIC = "https://i.ibb.co/CB2T5cy/NTA-logo.png";
  return (
    <>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Button className={classes.navButton}>Home</Button>
          <Button className={classes.navButton}>Contact Us</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
