import React from "react";

// material ui
import { Box, makeStyles, Typography } from "@material-ui/core";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

// Component
import Accordian from "./Accordian";

const useStyle = makeStyles({
  leftHeader: {
    background: "#2F2D2D",
    marginTop: -440,
    marginLeft: "76%",
    width: "22.3%",
    display: "flex",
  },
  headerText: {
    marginLeft: 5,
    lineHeight: "250%",
    fontSize: 20,
    fontWeight: 500,
    color: "#FFFFFF",
    textAlign: "center",
  },
  lHeaderIcon: {
    height: 50,
    color: "#FFFFFF",
    marginLeft: 129,
  },
});

const Header = () => {
  const des1 = "PRESS RELEASE 5 October 2021 Sub: NTA Declares Rank/NTA Score for JEE (Main) - 2021 B.Arch (Paper-2A) and B.Planning (Paper-2B) - Reg.";

  const des2 =
    "NATIONAL TESTING AGENCY JEE (Main) SESSION 4 (2021) FINAL ANSWER KEY OF PAPER-2 ON WHICH RESULT COMPILED ON 05.10.2021";
  const des3 =
    "PUBLIC NOTICE 28 September 2021 Subject: Display of Provisional Answer Keys and Question Paper with Recorded Responses for Answer Key Challenge for JEE (Main) 2021 Session 4 for Paper 2A(B.Arch.) and Paper 2B (B.Planning) Reg.";
  const des4 =
    "PUBLIC NOTICE 06 September 2021 Subject:";
  const des5 =
    "NATIONAL TESTING AGENCY JEE (Main) Session -4, 2021 FINAL ANSWER KEY AS ON 06.09.2021 PRESS RELEASE The National Testing Agencyannounces the resumption of the remaining two sessions of the JEE (Main) 2021 from 20 July 2021.";

  const classes = useStyle();
  return (
    <>
      <Box>
        <Box className={classes.leftHeader}>
          <Typography className={classes.headerText}>Current Events</Typography>
          <EventAvailableIcon className={classes.lHeaderIcon} />
        </Box>
      </Box>

      <Accordian des={des1} />
      <Accordian des={des2} />
      <Accordian des={des3} />
      <Accordian des={des4} />
      <Accordian des={des5} />
    </>
  );
};

export default Header;
