import React from "react";

import { Box, makeStyles, Typography, Divider } from "@material-ui/core";

const useStyle = makeStyles({
  containerBox: {
    textAlign: "left",
    width: "50%",
    marginLeft: "25%",
  },
  text: {
    color: "black",
    marginLeft: "0%",
    marginTop: "-106%",
    fontSize: 24,
  },
  content: {
    marginTop: "2%",
    textAlign: "justify",
  },
});

const des1 =
  "The Ministry of Human Resource Development (MHRD), which is now known as the Ministry of Education, Government of India (GOI), has established National Testing Agency (NTA) as anindependent, autonomous and self-sustained premier testing organization under Society Registration Act 1860 for conducting efficient, transparent and international standards tests in order to assess the competency of candidates for admissions to premier higher education institutions.";

const MainC = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.containerBox}>
        <Typography className={classes.text}>
          Introduction
          <Divider />
        </Typography>
        <Typography className={classes.content}>{des1}</Typography>
        <Typography className={classes.content}>{des1}</Typography>
        <Typography className={classes.content}>{des1}</Typography>
      </Box>
    </>
  );
};

export default MainC;
