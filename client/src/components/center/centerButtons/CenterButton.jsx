import React from "react";

import { Box, makeStyles, Typography, Button } from "@material-ui/core";

const useStyle = makeStyles({
    btnBox:{
        marginTop:25,
    },
  btn1: {
    background:"#00468A",
    width: "100%",
    color:"#FFFFFF",
    lineHeight:2.1,
    fontWeight:600
  },
});

const CenterButton = (props) => {
  const classes = useStyle();
  return (
    <>
    <Box className={classes.btnBox}>
      <Button className={classes.btn1} variant="contained"  disableElevation>
        {props.btn}
      </Button>
      </Box>
    </>
  );
};

export default CenterButton;
