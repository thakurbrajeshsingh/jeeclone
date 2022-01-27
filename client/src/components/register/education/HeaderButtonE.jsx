import * as React from "react";

import { makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles({
  headerButton: {
    width: "50%",
    background: "#0066FF",
    color: "#ffffff",
    width: "50%",
    fontSize: "15px",
    padding: "1%",
    fontWeight: 500,
  },
  disbale: {
    background: "#CCCCCC",
    marginLeft: "0.2%",
    width: "50%",
    marginRight: "0.2%",
    color: "#ffffff",
    padding: "1%",
    fontSize: "15px",
    fontWeight: 500,
    cursor:"text"
  },
});

const ButtonEducation = (props) => {
  const classes = useStyle();
  return (
    <>
     
      <div style={{ display: "flex",width:"106%",marginLeft:"-28px"}}>
        <Button className={classes.disbale} href='/register'>Registration</Button>
        <Button className={classes.headerButton} href="#">Educational Details</Button>
        <Button className={classes.disbale}>Document Upload</Button>
      </div>
  
    </>
  );
};

export default ButtonEducation;
