import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

import {
  Typography,
  makeStyles,
  MenuItem,
  Checkbox,
  Box,
  InputLabel,
  input,
} from "@material-ui/core";

const useStyle = makeStyles({
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
    fontSize: 18,
    color: "black",
    fontWeight: 500,
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
    height:"20px"
  },
  formInner: {
    display: "flex",
    background: "#ffffff",
    margin: "0px 150px",
  },
});

const Address = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  const classes = useStyle();
  return (
    <>
      {/*  address label */}
      <div >
        <div className={classes.form}>
          <div style={{ marginTop: 30 }}>
            <Typography className={classes.formSubheading}>
              Present Address
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
              <input variant="outlined" className={classes.inputTwo} style={{marginRight:"2%"}} />
              <input variant="outlined" className={classes.inputTwo} />
            </div>
            {/* ----city /country------ */}
            {/* Address */}
            <div className={classes.labelContainer}>
              <InputLabel className={classes.inputLabel}>
                City/Locality/Area
              </InputLabel>
              <InputLabel
                className={classes.inputLabel}
                style={{ marginLeft: "32%" }}
              >
                Country
              </InputLabel>
            </div>
            <div style={{ display: "flex" }}>
              <input variant="outlined" className={classes.inputTwo} style={{marginRight:"2%"}}  />
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
                style={{ marginLeft: "45.2%" }}
              >
                District
              </InputLabel>
            </div>
            <div style={{ display: "flex" }}>
              <input variant="outlined" className={classes.inputTwo} style={{marginRight:"2%"}} />
              <input variant="outlined" className={classes.inputTwo} />
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
              <input variant="outlined" className={classes.inputTwo} style={{marginRight:"2%"}}  />
              <input variant="outlined" className={classes.inputTwo} />
            </div>

            {/* -------------contact details--------------------- */}
            <div className={classes.labelContainer}>
              <InputLabel className={classes.inputLabel}>
                Email Address
              </InputLabel>
              <InputLabel
                className={classes.inputLabel}
                style={{ marginLeft: "320px" }}
              >
                Phone Number
              </InputLabel>
            </div>
            <div style={{ display: "flex" }}>
              <input
                placeholder="xyz@stlindia.com"
                type="email"
                variant="outlined"
                className={classes.inputTwo}
                style={{marginRight:"2%"}} 
              />
              <input
                placeholder="+91 12345667892"
                type="number"
                variant="outlined"
                className={classes.inputTwo}
              />
            </div>
            {/* dashed border  end */}
          </div>
        </div>
      </div>
      {/* ----------------------------permanent address----------------------------------------- */}
      <div className={classes.container}>
        <div className={classes.form}>
          <div style={{ marginTop: 30 }}>
            <Typography className={classes.formSubheading}>
              Permanent Address
            </Typography>
          </div>
          <div className={classes.outerBorder}>
            {/* //border blue */}
            {/* Address */}
            <div style={{ display: "flex" }}>
              <Checkbox  inputProps={{ 'aria-label': 'controlled' }} />
              <InputLabel
                style={{ fontSize: 16, fontWeight: 600, marginTop: "15px",color:"black" }}
              >
                Same As Present Address
              </InputLabel>
            </div>
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
              <input variant="outlined" className={classes.inputTwo} />
              <input variant="outlined" className={classes.inputTwo} />
            </div>
            {/* ----city /country------ */}
            {/* Address */}
            <div className={classes.labelContainer}>
              <InputLabel className={classes.inputLabel}>
                City/Locality/Area
              </InputLabel>
              <InputLabel
                className={classes.inputLabel}
                style={{ marginLeft: "32%" }}
              >
                Country
              </InputLabel>
            </div>
            <div style={{ display: "flex" }}>
              <input variant="outlined" className={classes.inputTwo}/>
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
                className={classes.inputTwo}
                margin={{marginLeft:"-1%"}}
              />
            </div>
            {/* -----------------State And District---------------------- */}
            <div className={classes.labelContainer}>
              <InputLabel className={classes.inputLabel}>State</InputLabel>
              <InputLabel
                className={classes.inputLabel}
                style={{ marginLeft: "45.2%" }}
              >
                District
              </InputLabel>
            </div>
            <div style={{ display: "flex" }}>
              <input variant="outlined" className={classes.inputTwo} />
              <input variant="outlined" className={classes.inputTwo} />
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
              <input type="number" variant="outlined" className={classes.inputTwo} />
              <input type="number" variant="outlined" className={classes.inputTwo} />
            </div>

            {/* -------------contact details--------------------- */}
            <div className={classes.labelContainer}>
              <InputLabel className={classes.inputLabel}>
                Email Address
              </InputLabel>
              <InputLabel
                className={classes.inputLabel}
                style={{ marginLeft: "320px" }}
              >
                Phone Number
              </InputLabel>
            </div>
            <div style={{ display: "flex" }}>
              <input
                placeholder="xyz@stlindia.com"
                type="email"
                variant="outlined"
                className={classes.inputTwo}
              />
              <input
                placeholder="+91 12345667892"
                type="number"
                variant="outlined"
                className={classes.inputTwo}
              />
            </div>
            {/* dashed border  end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;