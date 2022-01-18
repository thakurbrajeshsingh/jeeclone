import React, { useState, useEffect } from "react";
import { authenticateNewRegister } from "../../service/api";

// component
import HeaderButton from "./HeaderButton";
import Login from "./Login";
// date picker
import DatePicker from "react-date-picker";

import {
  Typography,
  makeStyles,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import CaptchaTest from "./CaptchaTest";
import Address from "./Address";
import Password from "./Password";

const useStyle = makeStyles({
  container: {
    background: "#eeeee4",
  },
  form: {
    margin: "0% 2% 0% 15%",
    background: "#ffffff",
    width: "69.4vw",
    padding: "2% 5% 0% 5%",
  },
  formSubheading: {
    fontSize: "25px",
    fontWeight: 600,
    color: "#063970",
  },
  outerBorder: {
    border: "2px solid #1e81b0",
    borderRadius: "25px",
    borderStyle: "dashed",
    padding: "2%",
  },
  inputLabel: {
    fontSize: "18px",
    color: "black",
    fontWeight: 500,
    marginTop: "2%",
  },
  input: {
    height: "30px",
    width: "97%",
  },
  inputDiv: {
    padding: "5%",
  },
  labelContainer: {
    display: "flex",
  },
  dob: {
    width: "50%",
  },
  inputTwo: {
    width: "50%",
    padding: "1%",
    marginRight: "2%",
    height: "20px",
  },
});

const SignupForm = () => {
  // ----------------New Candidates Signup----------------------
  const registerUser = async () => {
    let response = await authenticateNewRegister(formValues);
    if (!response) return;
  };

  // -------------------------------------------------------------

  // --------------------use state---------------------
  const [age, setAge] = useState("");
  const [identity, setIdentity] = useState("");
  const [value, onChange] = useState(new Date());

  // ---------------------- form validation---------------
  const initialValues = {
    name: "",
    father: "",
    mother: "",
    identity: "",
    email: "",
    phone: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // console.log("form value is ",formValues.identity)
  // stored the user input value to formValues
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.values.identity);
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit);
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const nameRegex = /^[A-Za-z ]+$/;

    if (!values.name) {
      errors.name = "Name is Required";
    } else if (!nameRegex.test(values.name)) {
      errors.name = "Please Enter Alphabets";
    } else if (!values.name.length < 3) {
      errors.name = "Name must be more than 3 characters";
    }
    // ----------------------------------------------------
    if (!values.father) {
      errors.father = "Father Name is Required";
    } else if (!nameRegex.test(values.father)) {
      errors.father = "Please Enter Alphabets";
    }

    if (!values.mother) {
      errors.mother = "Mother Name is Required";
    } else if (!nameRegex.test(values.mother)) {
      errors.mother = "Please Enter Alphabets";
    }
    return errors;
  };

  // -----------validation end------------

  const classes = useStyle();
  return (
    <>
      <div className={classes.container}>
        <form onSubmit={handleSubmit}>
          {/* label */}
          <br />
          <br />
          <HeaderButton />
          <div className={classes.form}>
            {/* <HeaderButton /> */}
            <div>
              <Typography className={classes.formSubheading}>
                Personal Details
              </Typography>
            </div>
            {/* name field */}
            <div className={classes.outerBorder}>
              <div className={classes.inputDiv}>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginTop: "-3%", marginLeft: "-5%" }}
                >
                  Name
                </InputLabel>
                <input
                  name="name"
                  variant="outlined"
                  className={classes.input}
                  value={formValues.name}
                  onChange={handleChange}
                  style={{ marginLeft: "-5%", width: "107%" }}
                  focused
                />
              </div>
              <p style={{ color: "red", marginTop: "-4%", marginLeft: "1%" }}>
                {formErrors.name}
              </p>
              {/* Parents Name */}
              <div className={classes.labelContainer}>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginTop: "-1%" }}
                >
                  Father's Name
                </InputLabel>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginLeft: "37%", marginTop: "-1%" }}
                >
                  Mother's Name
                </InputLabel>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  name="father"
                  variant="outlined"
                  className={classes.inputTwo}
                  value={formValues.father}
                  onChange={handleChange}
                  style={{ width: "50%" }}
                />

                <input
                  name="mother"
                  variant="outlined"
                  className={classes.inputTwo}
                  value={formValues.mother}
                  onChange={handleChange}
                  style={{ width: "50%" }}
                />
              </div>
              <div style={{ display: "flex", marginBottom: "-2%" }}>
                <p
                  style={{
                    color: "red",
                    marginRight: "30%",
                    marginTop: "1%",
                  }}
                >
                  {formErrors.father}
                </p>
                <p style={{ color: "red", marginTop: "1%", marginLeft: "1%" }}>
                  {formErrors.mother}
                </p>
              </div>
              {/* -----------DoB and Gender--------------- */}
              {/* Label */}
              <div className={classes.labelContainer}>
                <InputLabel className={classes.inputLabel}>
                  Date of Birth
                </InputLabel>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginLeft: "39%" }}
                >
                  Gender
                </InputLabel>
              </div>
              {/* Input Fields */}
              <div style={{ display: "flex" }}>
                <DatePicker
                  onChange={onChange}
                  value={value}
                  className={classes.dob}
                  style={{
                    width: "100%",
                    marginRight: "2%",
                  }}
                />

                {/* Gender selector */}
                <div className={classes.inputTwo}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Gender"
                    variant="outlined"
                    style={{
                      width: "100%",
                      marginTop: "-2%",
                      height: "38px",
                      marginLeft: "2%",
                    }}
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                  </Select>
                </div>
              </div>
              {/* -----------identification------------- */}

              {/* Identity  section */}
              <div
                className={classes.labelContainer}
                style={{ marginTop: "2%" }}
              >
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginLeft: "1%" }}
                >
                  Identity Type
                </InputLabel>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginLeft: "38%" }}
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
                    style={{ width: "105%", height: "40px", marginTop: "-2%" }}
                  >
                    <MenuItem value={"aadhar"}>Aadhar</MenuItem>
                    <MenuItem value={"pan"}>PAN</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                  </Select>
                </div>
                <input
                  variant="outlined"
                  name="identity"
                  value={formValues.identity}
                  onChange={handleChange}
                  className={classes.inputTwo}
                  style={{ width: "50%", marginLeft: "2%", height: "20%" }}
                />
              </div>
            </div>
            <Address />

            {/* <Checkbox /> */}
            <Password />
            <CaptchaTest />
            <button
              style={{
                background: "#ff8000",
                marginLeft: "35%",
                marginTop: "20px",
                marginBottom: "20px",
                color: "#ffffff",
                fontSize: "20px",
                width: "200px",
                height: "50px",
              }}
              onClick={() => registerUser()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
