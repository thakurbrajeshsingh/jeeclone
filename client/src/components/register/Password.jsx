import React from "react";

import {
  Typography,
  Checkbox,
  makeStyles,
  Select,
  MenuItem,
  Box,
  InputLabel,
  TextField,
} from "@material-ui/core";

const useStyle = makeStyles({
    container: {
        // textAlign:"center",
    //   background: "#eeeee4",
    },
    form: {
      //   margin: "10px 10px 10px 5%",
    //   background: "red",
      width: "95%",
      padding: "0.1% 5%",
    },
    formSubheading: {
      fontSize: 25,
      fontWeight: 600,
      color: "#063970",
    },
    outerBorder: {
      border: "2px solid #1e81b0",
      borderStyle: "dashed",
      padding: "20px",
    },
    inputLabel: {
      fontSize: 20,
      color: "black",
      fontWeight: 550,
    },
    input: {
      marginTop: 10,
      width: "100%",
    },
    labelContainer: {
      display: "flex",
      // justifyContent: "space-between",
    },
    inputTwo: {
      width: "50%",
      padding: 5,
    },
  });
const Password = () => {
  // security question
  //  identity

  const [security, setSecurity] = React.useState("");
  const handleChangeId = (event) => {
    setSecurity(event.target.value);
  };

  const classes = useStyle();
  return (
    <>
    <div style={{marginLeft:"-5%"}}> 
<div className={classes.container}>
        <div className={classes.form}>
          <div style={{ marginTop: 10 }}>
            <Typography className={classes.formSubheading}>
              Choose Password
            </Typography>
          </div>
      {/* password section */}
      <div className={classes.outerBorder}>
        <div className={classes.inputDiv}>
          <div className={classes.labelContainer}>
            <InputLabel className={classes.inputLabel}>Password</InputLabel>
            <InputLabel
              className={classes.inputLabel}
              style={{ marginLeft: "39%" }}
            >
              Confirm Password
            </InputLabel>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <TextField variant="outlined" className={classes.inputTwo} />
          <TextField variant="outlined" className={classes.inputTwo} />
        </div>
        {/* ----------------------- */}
        <div className={classes.labelContainer}>
          <InputLabel className={classes.inputLabel}>
            Security Question
          </InputLabel>
          <InputLabel
            className={classes.inputLabel}
            style={{ marginLeft: "30%" }}
          >
            Security Answer
          </InputLabel>
        </div>

        {/* Identification selector */}
        <div style={{ display: "flex" }}>
          <div className={classes.inputTwo}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={security}
              label="Gender"
              variant="outlined"
              style={{ width: "440px"}}
            >
              <MenuItem value={"aadhar"}>Aadhar</MenuItem>
              <MenuItem value={"pan"}>PAN</MenuItem>
              <MenuItem value={"other"}>Other</MenuItem>
            </Select>
          </div>
          <TextField variant="outlined" className={classes.inputTwo} />
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Password;
