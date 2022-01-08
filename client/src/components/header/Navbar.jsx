import React from "react";
import { Typography, makeStyles ,AppBar,Toolbar} from "@material-ui/core";

const useStyle = makeStyles({
    navbar:{
        marginTop:76,
        height: 50,
        background: "#002C56"
    }
});

const Navbar = () => {
  const classes = useStyle();
  const logoNIC = "https://i.ibb.co/CB2T5cy/NTA-logo.png";
  return (
    <>
      <AppBar className={classes.navbar}>
        <Toolbar>

        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
