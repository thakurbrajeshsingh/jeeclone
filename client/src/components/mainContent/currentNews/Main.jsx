import React from "react";

// material ui
import { Box, makeStyles, Typography } from "@material-ui/core";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

const useStyle = makeStyles({
  leftHeader: {
    background: "#002C56",
    marginTop: 150,
    marginLeft: 20,
    width: "22%",
    display: "flex",
  },
  headerText: {
    marginLeft: 5,
    lineHeight: "250%",
    fontSize: 20,
    fontWeight: 500,
    color: "#FFFFFF",
  },
  lHeaderIcon: {
    height: 50,
    color: "#FFFFFF",
    marginLeft: 130,
  },
});

const Main = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.Body}>
        <Box className={classes.leftHeader}>
          <Typography className={classes.headerText}>Current Events</Typography>
          <EventAvailableIcon className={classes.lHeaderIcon} />
        </Box>
      </Box>
    </>
  );
};

export default Main;
