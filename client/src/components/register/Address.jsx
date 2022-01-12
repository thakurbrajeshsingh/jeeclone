import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

import {
  Typography,
  makeStyles,
  MenuItem,
  Box,
  InputLabel,
  TextField,
} from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    // background: "#eeeee4",
    // marginTop: "9.3%",
  },
  form: {
    margin: "10px 10px 10px 0px",
    background: "#ffffff",
    width: "100%",
    padding: "0.1% 0.5%",
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
  label: {
    fontWeight: 600,
    display: "flex",
    flexDirection: "row",
    margin: "10px",
  },
  labelContainer: {
    display: "flex",
  },
  inputTwo: {
    width: "50%",
    padding: 5,
  },
  formInner: {
    display: "flex",
    background: "#ffffff",
    margin: "0px 150px",
  },
});

const Address = (props) => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const classes = useStyle();
  return (
    <>
      {/*  address label */}
      <div className={classes.container}>
        <div className={classes.form}>
          <div style={{ marginTop: 30 }}>
            <Typography className={classes.formSubheading}>
              {props.title}
            </Typography>
          </div>
          <div className={classes.outerBorder}>
            {/* //border blue */}
            {/* Address */}
            <div className={classes.labelContainer}>
              <InputLabel className={classes.inputLabel}>Address</InputLabel>
              <InputLabel
                className={classes.inputLabel}
                style={{ marginLeft: "42%" }}
              >
                Locality(Optional)
              </InputLabel>
            </div>
            <div style={{ display: "flex" }}>
              <TextField variant="outlined" className={classes.inputTwo} />
              <TextField variant="outlined" className={classes.inputTwo} />
            </div>
            {/* ----city /country------ */}
            {/* Address */}
            <div className={classes.labelContainer}>
              <InputLabel className={classes.inputLabel}>City/Locality/Area</InputLabel>
              <InputLabel
                className={classes.inputLabel}
                style={{ marginLeft: "32%" }}
              >
                Country
              </InputLabel>
            </div>
            <div style={{ display: "flex" }}>
              <TextField variant="outlined" className={classes.inputTwo} />
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
                className={classes.inputTwo}
              />
            </div>
        {/* -----------------State And District---------------------- */}
        <div className={classes.labelContainer}>
              <InputLabel className={classes.inputLabel}>State</InputLabel>
              <InputLabel
                className={classes.inputLabel}
                style={{marginLeft: "45.2%" }}
              >
               District
              </InputLabel>
            </div>
            <div style={{ display: "flex" }}>
              <TextField variant="outlined" className={classes.inputTwo} />
              <TextField variant="outlined" className={classes.inputTwo} />
            </div>
         {/* -----------------pin & mobile---------------------- */}
         <div className={classes.labelContainer}>
              <InputLabel className={classes.inputLabel}>Pin Code</InputLabel>
              <InputLabel
                className={classes.inputLabel}
                style={{ marginLeft: "41.2%" }}
              >
                Mobile Number
              </InputLabel>
            </div>
            <div style={{ display: "flex" }}>
              <TextField variant="outlined" className={classes.inputTwo} />
              <TextField variant="outlined" className={classes.inputTwo} />
            </div>

        {/* dashed border  end */}
      </div>
      </div>
      </div>
    </>
  );
};

export default Address;
