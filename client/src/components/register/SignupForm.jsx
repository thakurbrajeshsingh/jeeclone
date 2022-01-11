import React, { useState } from "react";


// date picker
import DatePicker from "react-date-picker";

import {
  Typography,
  makeStyles,
  Select,
  MenuItem,
  Box,
  InputLabel,
  TextField,
} from "@material-ui/core";
import DateAdapter from "@mui/lab/AdapterDateFns";

const useStyle = makeStyles({
  container: {
    background: "#eeeee4",
    marginTop: "9.3%",
  },
  form: {
    margin: "10px 10px 10px 15%",
    background: "#ffffff",
    width: "70%",
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
    marginTop: 20,
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

const SignupForm = () => {
   // age
   const [age, setAge] = React.useState("");
   const handleChange = (event) => {
     setAge(event.target.value);
   };

  // dob
  const [value, onChange] = useState(new Date());
  

  const classes = useStyle();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.form}>
          <div style={{ marginTop: 30 }}>
            <Typography className={classes.formSubheading}>
              Personal Details
            </Typography>
          </div>
          {/* name field */}
          <div className={classes.outerBorder}>
            <div className={classes.inputDiv}>
              <InputLabel className={classes.inputLabel}>Name</InputLabel>
              <TextField variant="outlined" className={classes.input} />
            </div>
            {/* Parents Name */}
            <div className={classes.labelContainer}>
              <InputLabel className={classes.inputLabel}>
                Father's Name
              </InputLabel>
              <InputLabel
                className={classes.inputLabel}
                style={{ marginLeft: "35%" }}
              >
                Mother's Name
              </InputLabel>
            </div>
            <div style={{ display: "flex" }}>
              <TextField variant="outlined" className={classes.inputTwo} />
              <TextField variant="outlined" className={classes.inputTwo} />
            </div>

            {/* -----------DoB and Gender--------------- */}
            <div className={classes.labelContainer}>
              <InputLabel className={classes.inputLabel}>
                Date of Birth
              </InputLabel>
              <InputLabel
                className={classes.inputLabel}
                style={{ marginLeft: "37%" }}
              >
                Gender
              </InputLabel>
            </div>
            <div style={{ display: "flex" }}>
              <DatePicker
                // className={classes.dob}
                onChange={onChange}
                value={value}
                className={classes.inputTwo}
                style={{width:"50%"}}
              />
              <InputLabel className={classes.inputTwo}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  variant="outlined"
                  
                >
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </InputLabel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;