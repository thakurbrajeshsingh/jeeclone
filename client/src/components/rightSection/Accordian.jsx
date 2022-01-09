import React from "react";

// material ui
import { Box, makeStyles, Typography } from "@material-ui/core";


const useStyle = makeStyles({
  
    leftHeader: {
    background: "#FFFFFF",
    marginTop: 1,
    marginLeft: "75.8%",
    width: "22.3%",
    display: "flex",
  },
  headerText: {
    marginLeft: 5,
    lineHeight: 1.5,
    fontSize: 15,
    fontWeight: 500,
    color: "black",
    padding: '10px 10px',
    boxShadow: '0px 1px 1px 1px black',
   
  },
});

const Accordian = (props) => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.Body}>
        <Box className={classes.leftHeader}>
          <Typography className={classes.headerText}> { props.des } </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Accordian;
