import React from "react";
import { Button, makeStyles, AppBar, Toolbar, Box } from "@material-ui/core";

const useStyle = makeStyles({
  navbar: {
    marginTop: 76,
    height: 50,
    background: "#002C56",
  },
  navButton: {
    marginTop: "-1%",
    color: "#FFFFFF",
    borderColor: "white",
    display:"flex",
    justifyContent:"center",

  },
});

const defaultProps = {
  bgcolor: "background.paper",
  // m: 1,
  width: "0.1rem",
  height: "4rem" ,
  marginTop:-2
};

const Navbar = () => {
  const classes = useStyle();
  const logoNIC = "https://i.ibb.co/CB2T5cy/NTA-logo.png";
  return (
    <>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Box className={classes.navButton}>
            <Button className={classes.navButton} >Home</Button>
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
