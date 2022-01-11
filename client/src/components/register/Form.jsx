import React, { Component, useState } from "react";

// Material UI
import {
  makeStyles,
  Box,
  Typography,
  TextField,
  Select,
} from "@material-ui/core";

// date picker
import DatePicker from "react-date-picker";

const useStyle = makeStyles({
  Body: {
    height: "100%",
    width: "100%",
    marginTop: "8%",
    background: "#eeeee4",
  },
  container: {
    marginTop: "9%",
    background: "#ffffff",
    margin: "120px  150px 0px 150px",
  },
  formInner: {
    display: "flex",
    background: "#ffffff",
    margin: "0px 150px",
  },
  formHeading: {
    color: "#154c79",
    fontSize: 20,
    fontWeight: 600,
  },
  label: {
    fontWeight: 600,
    display: "flex",
    flexDirection: "row",
    margin: "10px",
  },
  inputField: {
    marginTop: -1,
    display: "block",
    width: "80%",
    marginLeft: "15%",
  },
  dob: {
    marginTop: 15,
    width: "21%",
    marginLeft: "15%",
  },
});

const Body = () => {
  const names = ["Male", "Female"];

  // dob
  const [value, onChange] = useState(new Date());

  const classes = useStyle();
  return (
    <>
      {/* // Signup  */}
      <Box className={classes.Body}>
        <Box
          className={classes.container}
          style={{ display: "block", flexDirection: "row" }}
        >
          <Typography className={classes.formHeading}>
            Personal Information
          </Typography>
          <hr />

          {/* ----------Name------------ */}
          <Box className={classes.formInner}>
            <Typography className={classes.label}>Name</Typography>
          </Box>
          <TextField
            fullWidth
            type="text"
            variant="outlined"
            className={classes.inputField}
            focused
          />

          {/* Parents Details */}
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Box className={classes.formInner}>
              <Typography
                className={classes.label}
                style={{ marginLeft: "1%", marginRight: "34%" }}
              >
                Father's Name
              </Typography>
              <Typography
                className={classes.label}
                style={{ marginLeft: "1%", marginRight: "0%" }}
              >
                Mother's Name
              </Typography>
            </Box>
            <Box className={classes.formInner}>
              <TextField
                type="text"
                variant="outlined"
                className={classes.inputField}
                style={{ marginLeft: "1%", width: "100%" }}
              />
              <TextField
                type="text"
                variant="outlined"
                className={classes.inputField}
                style={{ marginLeft: "1%", width: "100%" }}
              />
            </Box>
          </Box>
          {/* -----------DoB and Gender--------------- */}
          <Typography
            style={{ marginLeft: "15%", marginTop: 10, fontWeight: 600 }}
          >
            Candidate's Date of Birth
          </Typography>
          <DatePicker
            className={classes.dob}
            onChange={onChange}
            value={value}
          />
          {/* --------Gender Select---------- */}
         
          {/* -------------------------- */}
        </Box>
      </Box>
    </>
  );
};

export default Body;
