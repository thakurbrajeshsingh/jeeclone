import React, { useState, useEffect } from "react";

// component
import HeaderButton from "./HeaderButton";

// date picker
import DatePicker from "react-date-picker";

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
import CaptchaTest from "./CaptchaTest";
import Address from "./Address";
import Password from "./Password";

const useStyle = makeStyles({
  container: {
    background: "#eeeee4",
    marginTop: "9.3%",
  },
  form: {
    margin: "0px 10px 10px 15%",
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
    height: "40px",
    marginTop: 10,
    width: "882px",
  },
  labelContainer: {
    display: "flex",
  },
  inputTwo: {
    width: "50%",
    padding: 5,
  },
});

const SignupForm = () => {
  // --------------------use state---------------------
  const [age, setAge] = useState("");
  const [identity, setIdentity] = useState("");
  const [value, onChange] = useState(new Date());

  // --------------------Identity hook------------------

  // --------------------DoB--------------------------

  // ---------------------- form validation---------------
  const initialValues = { name: "", father: "", mother: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit);
    {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nameRegex =/^[A-Za-z ]+$/;
    
    if (!values.name) {
      errors.name = "Name is Required";
    }
    else if(!nameRegex.test(values.name)){
      errors.name = "Please Enter Alphabets";
    }

    if (!values.father) {
      errors.father = "Father Name is Required";
    }
    if (!values.mother) {
      errors.mother = "Mother Name is Required";
    }
    return errors;
  };

  // -----------validation end------------

  const classes = useStyle();
  return (
    <>
      <div className={classes.container}>
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        <form onSubmit={handleSubmit}>
          {/* label */}
          <br />
          <br />
          <HeaderButton />
          <div className={classes.form}>
            {/* <HeaderButton /> */}
            <div style={{ marginTop: "30px" }}>
              <Typography className={classes.formSubheading}>
                Personal Details
              </Typography>
            </div>
            {/* name field */}
            <div className={classes.outerBorder}>
              <div className={classes.inputDiv}>
                <InputLabel className={classes.inputLabel}>Name</InputLabel>
                <input
                  name="name"
                  variant="outlined"
                  className={classes.input}
                  value={formValues.name}
                  onChange={handleChange}
                  minlength={3}
                  maxLength={10}
                  focused
                />
              </div>
              <p style={{color:"red"}}>{formErrors.name}</p>
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
                <TextField
                  name="father"
                  variant="outlined"
                  className={classes.inputTwo}
                  value={formValues.father}
                  onChange={handleChange}
                />
                <p style={{color:"red"}}>{formErrors.father}</p>
                <TextField
                  name="mother"
                  variant="outlined"
                  className={classes.inputTwo}
                  value={formValues.mother}
                  onChange={handleChange}
                />
                <p style={{color:"red"}}>{formErrors.mother}</p>
              </div>
             
              {/* -----------DoB and Gender--------------- */}
              {/* Label */}
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
              {/* Input Fields */}
              <div style={{ display: "flex" }}>
                <DatePicker
                  onChange={onChange}
                  value={value}
                  className={classes.inputTwo}
                  style={{ width: "50%" }}
                />
                {/* Gender selector */}
                <div className={classes.inputTwo}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Gender"
                    variant="outlined"
                    style={{ width: "100%" }}
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                  </Select>
                </div>
              </div>
              {/* -----------identification------------- */}

              {/* Identity  section */}
              <div className={classes.labelContainer}>
                <InputLabel className={classes.inputLabel}>
                  Identity Type
                </InputLabel>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginLeft: "36.5%" }}
                >
                  Identification Number
                </InputLabel>
              </div>

              {/* Identification selector */}
              <div style={{ display: "flex" }}>
                <div className={classes.inputTwo}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={identity}
                    label="Gender"
                    variant="outlined"
                    style={{ width: "97%" }}
                  >
                    <MenuItem value={"aadhar"}>Aadhar</MenuItem>
                    <MenuItem value={"pan"}>PAN</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                  </Select>
                </div>
                <TextField variant="outlined" className={classes.inputTwo} />
              </div>
            </div>
            <Address title="Present Address" />
            <Address title="Permanent Address">
              <Checkbox />
            </Address>
            <Password />
            <CaptchaTest />
            <button
          
              style={{
                background: "#ff8000",
                marginLeft: "350px",
                marginTop: "20px",
                marginBottom: "20px",
                color: "#ffffff",
                fontSize: "20px",
                width: "200px",
                height: "50px",
              }}
            >Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
