import * as React from "react";
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";

import {
  Typography,
  Checkbox,
  makeStyles,
  ButtonGroup,
  Select,
  MenuItem,
  Button,
  Box,
  InputLabel,
  TextField,
} from "@material-ui/core";

const useStyle = makeStyles({
  headerButton: {
    width: "360px",
    height: "70px",

    // marginLeft: "90px",
  },
});

const HeaderButton = () => {
  const classes = useStyle();
  return (
    <>
      <div style={{ display: "flex", marginTop: "0px", marginLeft: "200px" }}>
        <Button
          className={classes.headerButton}
          style={{ background: "#0066FF" ,
          color:"#ffffff",
          fontSize:"20px",
          fontWeight:500}}
        >
          Registration
        </Button>
        <Button
          disabled
          className={classes.headerButton}
          style={{
            background: "#CCCCCC",
            marginLeft: "1px",
            marginRight: "1px",
            color:"#ffffff",
            fontSize:"20px",
            fontWeight:500
          }}
        >
          Application Form
        </Button>
        <Button
          disabled
          className={classes.headerButton}
          style={{ background: "#CCCCCC",
          color:"#ffffff",
          fontSize:"20px",
          fontWeight:500 }}
        >
          Document Upload
        </Button>
      </div>
    </>
  );
};

export default HeaderButton;
