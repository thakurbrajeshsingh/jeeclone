import React from "react";

import { Box, makeStyles, Typography, Button } from "@material-ui/core";

// react Route
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  btnContainer: {
    marginTop: "2%",
  },
  btn1: {
    background: "#00468A",
    width: "100%",
    color: "#FFFFFF",
    lineHeight: 2.1,
    fontWeight: 600,
    marginTop: "2%",
    pointerEvents: "none",
    textDecoration:"none"
  },
});

const CenterButton = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.btnContainer}>
        <Link to="/register">
          <Button
            className={classes.btn1}
            variant="contained"
            style={{}}
            disableElevation
          >
            JEE(Main) New Registration
          </Button>
        </Link>
        <Link to='/login'>
        <Button className={classes.btn1} variant="contained" disableElevation>
          JEE(Main) Old User Login
        </Button>
        </Link>
      </Box>
    </>
  );
};

export default CenterButton;
