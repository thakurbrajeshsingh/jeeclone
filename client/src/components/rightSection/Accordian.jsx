import React from "react";

// material ui
import { Box, makeStyles, Typography } from "@material-ui/core";


const useStyle = makeStyles({
  
    leftHeader: {
    background: "#464545",
    marginTop: 1,
    marginLeft: "75%",
    width: "22.3%",
    display: "flex",
  },
  headerText: {
    marginLeft: 5,
    lineHeight: 1.5,
    fontSize: 15,
    fontWeight: 500,
    color: "#FFFFFF",
    padding: '5px 5px',
    boxShadow: '1px 1px 2px 0px pink',
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
