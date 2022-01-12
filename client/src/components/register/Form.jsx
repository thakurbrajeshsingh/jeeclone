import React, { Component, useState } from "react";

// Material UI
import {
  makeStyles,
  Box,
  FormControl,
  InputLabel,
  Typography,
  TextField,
  MenuItem,
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
  selector: {
    width: 300,
    marginLeft: 150,
    marginTop: 15,
    height: 30,
  },
  dobContainer: {
    marginLeft: 265,
  },
});
const Body = () => {
  // age
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // -----------------------

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

            {/* -----------DoB and Gender--------------- */}
            <Box style={{ display: "flex" }}>
              <Typography
                style={{ marginLeft: "15%", marginTop: 10, fontWeight: 600 }}
              >
                Candidate's Date of Birth
              </Typography>
              <Typography
                style={{ marginLeft: "17%", marginTop: 10, fontWeight: 600 }}
              >
                Candidate's Gender
              </Typography>
            </Box>
            <Box style={{ display: "flex" }}>
              <DatePicker
                className={classes.dob}
                onChange={onChange}
                value={value}
              />
              {/* --------Gender Select---------- */}
              <InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  variant="outlined"
                  className={classes.selector}
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </InputLabel>
            </Box>
            {/* -------------------------- */}

            {/* Indentity Type */}
            <Box style={{ display: "flex" }}>
              <Typography
                className={classes.label}
                style={{ marginLeft: "15%", marginRight: "34%" }}
              >
                Identity Type
              </Typography>
              <Typography className={classes.label} style={{ marginLeft: -80 }}>
                {" "}
                Identification Name
              </Typography>
            </Box>

            {/* ----id input----------- */}
            <Box style={{ display: "flex" }}>
              <InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  variant="outlined"
                  className={classes.selector}
                  style={{ marginTop: -2 }}
                >
                  <MenuItem value={"male"}>Aadhar Number</MenuItem>
                  <MenuItem value={"female"}>PAN Number</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </InputLabel>
              {/* -------------------- */}
              {/* identification number */}
              <TextField
                variant="outlined"
                className={classes.inputField}
                style={{ marginLeft: 75, width: 250 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* </Box> */}
    </>
  );
};

export default Body;
