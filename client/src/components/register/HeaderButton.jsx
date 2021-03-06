import * as React from "react";

import { makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles({
  headerButton: {
    width: "31.4%",
    background: "#0066FF",
    color: "#ffffff",
    width: "32%",
    fontSize: "15px",
    padding: "1%",
    fontWeight: 500,
  },
  disbale: {
    background: "#CCCCCC",
    marginLeft: "0.2%",
    width: "31%",
    marginRight: "0.2%",
    color: "#ffffff",
    padding: "1%",
    fontSize: "15px",
    fontWeight: 500,
    cursor:"text"
  },
});

const HeaderButton = (props) => {
  const classes = useStyle();
  return (
    <>
      <div style={{ display: "flex", marginLeft: "15%", marginTop: "8%" }}>
        <Button className={classes.headerButton}>Registration</Button>
        <Button className={classes.disbale} href="/education">Educational Details</Button>
        <Button className={classes.disbale}>Document Upload</Button>
      </div>
    </>
  );
};

export default HeaderButton;
