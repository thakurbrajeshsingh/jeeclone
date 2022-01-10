import React from "react";

// material ui
import { Box, makeStyles, Typography } from "@material-ui/core";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

// Component
import Accordian from "./Accordian";

const useStyle = makeStyles({
  leftHeader: {
    background: "#002C56",
    marginTop: 150,
    marginLeft: 20,
    width: "22.3%",
    display: "flex",
  },
  headerText: {
    marginLeft: 5,
    lineHeight: "250%",
    fontSize: 20,
    fontWeight: 500,
    color: "#FFFFFF",
    textAlign:"center"
    
  },
  lHeaderIcon: {
    height: 50,
    color: "#FFFFFF",
    marginLeft: 130,
  },
});

const Header = () => {

  const des1=
    "information Bulletin for Jee Examination 2022";
    
  const des2=
    "PUBLIC NOTICE: Rescheduling of Session 4 (postponed May Session) of JEE (Main) 2021 - Reg.";
  const des3=
    "PRESS RELEASE: The National Testing Agency announces the resumption of the remaining two sessions of the JEE (Main) 2021 from 20 July 2021.";
    const des4=
    "Refund of Duplicate Fees to concerned Candidates of JEE (Main) - 2021";
    const des5=
    "PUBLIC NOTICE: Relaxation in eligibility criteria under Joint Entrance Examination JEE(Main)-2021 for the academic year 2021 22 in view of COVID-19 Pandemic";
    
    const imgLink="https://i.ibb.co/WWXJq7S/calendar.png";

  const classes = useStyle();
  return (
    <>
      <Box className={classes.Body}>
        <Box className={classes.leftHeader}>
          <Typography className={classes.headerText}>Current Events</Typography>
          <EventAvailableIcon className={classes.lHeaderIcon} />
        </Box>
      </Box>
      
      <Accordian des={des1} />
      <Accordian des={des2}/>
      <Accordian des={des3}/>
      <Accordian des={des4}/>
      <Accordian des={des5}/>


    </>
  );
};

export default Header;
