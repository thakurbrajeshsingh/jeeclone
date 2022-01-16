import React from "react";

import { Box, makeStyles, Typography, Divider } from "@material-ui/core";


// Recat router
import { BrowserRouter,Switch,Route,Link } from 'react-router-dom';




// Components
import CenterButton from "./centerButtons/CenterButton";
import Register from '../register/Register';



const useStyle = makeStyles({
  containerBox: {
    textAlign: "left",
    width: "50%",
    marginLeft: "25%",
    marginBottom: "20%" 
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

const des2 =
  "The Department of Higher Education, Ministry of Human Resource Development (now known as Ministry of Education), Government of India has entrusted the responsibility of conducting Joint Entrance Examination JEE (Main) to the NTA from 2019 onwards.";

const des3 =
  "The Joint Entrance Examination (JEE Main) comprises of two papers. The Paper1 is conducted for admission to Undergraduate Engineering Programs (B.E/B. Tech) at NITs, IIITs, other Centrally Funded Technical Institutions (CFTIs), Institutions/Universities funded/recognized by participating State Governments, as well as an eligibility test for JEE (Advanced), which is conducted for admission to IITs.";



const btn = "JEE(Main) New Registration";
const btn2 = "JEE(Main) Existing User";


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
        <Typography className={classes.content}>{des2}</Typography>
        <Typography className={classes.content}>{des3}</Typography>
        {/* <Link></Link> */}
        <CenterButton btn={btn}/>
        {/* <CenterButton btn={btn}/> */}
      </Box>
      
    </>
  );
};

export default MainC;
