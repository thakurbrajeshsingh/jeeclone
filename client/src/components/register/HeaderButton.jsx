import * as React from "react";

import { makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles({
  headerButton: {
    width: "31.4%",
  },
});

const HeaderButton = () => {
  const classes = useStyle();
  return (
    <>
      <div style={{ display: "flex", marginLeft: "15%", marginTop: "8%" }}>
        <Button
          className={classes.headerButton}
          style={{
            background: "#0066FF",
            color: "#ffffff",
            width: "32%",
            fontSize: "15px",
            padding: "1%",
            fontWeight: 500,
          }}
        >
          Registration
        </Button>
        <Button
          disabled
          className={classes.headerButton}
          style={{
            background: "#CCCCCC",
            marginLeft: "0.2%",
            width: "31%",
            marginRight: "0.2%",
            color: "#ffffff",
            padding: "1%",
            fontSize: "15px",
            fontWeight: 500,
          }}
        >
          Educational Details
        </Button>
        <Button
          disabled
          className={classes.headerButton}
          style={{
            background: "#CCCCCC",
            color: "#ffffff",
            fontSize: "15px",
            width: "31%",
            padding: "1%",
            fontWeight: 500,
          }}
        >
          Document Upload
        </Button>
      </div>
    </>
  );
};

export default HeaderButton;
