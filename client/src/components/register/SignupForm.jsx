import React, { useState, useEffect } from "react";
import { authenticateNewRegister } from "../../service/api";

// component
import HeaderButton from "./HeaderButton";
// date picker
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-date-picker";

import {
  Typography,
  makeStyles,
  Container,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";

import CaptchaTest from "./CaptchaTest";

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
  // ---------------------- form validation---------------
  const initialValues = {
    candidate: "",
    father: "",
    mother: "",
    dob: "",
    gender: "",
    idType: "",
    identity: "",
    phone: "",
    Caddress: "",
    Clocality: "",
    Ccity: "",
    Ccountry: "",
    Cstate: "",
    Cdistrict: "",
    Cpin: "",
    Cmobile: "",
    Cemail: "",
    Cphone: "",
    Paddress: "",
    Plocality: "",
    Pcity: "",
    Pcountry: "",
    Pstate: "",
    Pdistrict: "",
    Ppin: "",
    Pmobile: "",
    Pemail: "",
    Pphone: "",
    password: "",
    securityAns: "",
  };

  // ----------------New Candidates Signup----------------------

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const registerUser = async () => {
    let response = await authenticateNewRegister(formValues);
    if (!response) return;
  };

  // -------------Address Validation-------------------

  // checkbox button
  const [checked, setChecked] = useState(false);
  // -------------------------------------------------
  const [isError, setIsError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkValidation = (e) => {
    const confPass = e.target.value;
    setConfirmPassword(confPass);
    setTimeout(() => {
      if (confPass != formValues.password) {
        setIsError("Password Does Not Match");
      } else {
        setIsError("");
      }
    }, 1000);
  };
  // --------------------use state---------------------
  // stored the user input value to formValues
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.values.identity);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    registerUser();
    // alert("Form Submitted Successfully")
    setFormValues(initialValues);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit);
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const nameRegex = /^[A-Za-z ]+$/;

    if (!values.candidate) {
      errors.candidate = "Name is Required";
    } else if (!nameRegex.test(values.candidate)) {
      errors.candidate = "Please Enter Alphabets";
    } else if (values.candidate.length < 3) {
      errors.candidate = "Name should be more then 3 characters";
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
    if (!values.identity) {
      errors.identity = "Identity is Required";
    } else if (values.identity.length < 7 || values.identity.length > 15) {
      errors.identity = "Enter Valid ID Number";
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
                  name="candidate"
                  variant="outlined"
                  className={classes.input}
                  value={formValues.candidate}
                  onChange={(e) => handleChange(e)}
                  style={{ marginLeft: "-5%", width: "107%" }}
                  focused
                />
              </div>
              <p style={{ color: "red", marginTop: "-4%", marginLeft: "1%" }}>
                {formErrors.candidate}
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
                  onChange={(e) => handleChange(e)}
                  style={{ width: "50%" }}
                />

                <input
                  name="mother"
                  variant="outlined"
                  className={classes.inputTwo}
                  value={formValues.mother}
                  onChange={(e) => handleChange(e)}
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
                <input
                  type="date"
                  name="dob"
                  value={formValues.dob}
                  onChange={(e) => handleChange(e)}
                  className={classes.dob}
                    style={{
                      width: "50%",
                     }}
                />
                {/* Gender selector */}
                <div className={classes.inputTwo}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="gender"
                    value={formValues.gender}
                    onChange={(e) => handleChange(e)}
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
                    name="idType"
                    value={formValues.idType}
                    onChange={(e) => handleChange(e)}
                    label="Gender"
                    variant="outlined"
                    style={{
                      width: "105%",
                      height: "40px",
                      marginTop: "-2%",
                    }}
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
                  onChange={(e) => handleChange(e)}
                  className={classes.inputTwo}
                  style={{ width: "50%", marginLeft: "2%", height: "20%" }}
                />
              </div>
              <p style={{ color: "red", marginTop: "1%", marginLeft: "51%" }}>
                {formErrors.identity}
              </p>
            </div>
            {/* ------------------------------------------------------------
            
            ------------------------------------------------------------ */}
            {/* <Address /> */}

            <div style={{ marginTop: "5%" }}>
              <Typography className={classes.formSubheading}>
                Present Address
              </Typography>
            </div>
            <div className={classes.outerBorder}>
              {/* //border blue */}
              {/* Address */}
              <div className={classes.labelContainer}>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginRight: "43%" }}
                >
                  Address
                </InputLabel>
                <InputLabel className={classes.inputLabel}>Locality</InputLabel>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  name="Caddress"
                  value={formValues.Caddress}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ marginRight: "2%" }}
                />
                <input
                  name="Clocality"
                  value={formValues.Clocality}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.inputTwo}
                />
              </div>
              <div className={classes.labelContainer}>
                <InputLabel className={classes.inputLabel}>
                  City/Locality/Area
                </InputLabel>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ width: "50%", marginLeft: "35%" }}
                >
                  Country
                </InputLabel>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  name="Ccity"
                  value={formValues.Ccity}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ width: "46%", marginRight: "2%" }}
                />

                <Select
                  // labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="Ccountry"
                  value={formValues.Ccountry}
                  onChange={(e) => handleChange(e)}
                  variant="outlined"
                  style={{
                    width: "48%",
                    height: "40px",
                  }}
                >
                  <MenuItem value={"india"}>India</MenuItem>
                  <MenuItem value={"pak"}>Pakistan</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </div>
              {/* ----------------- present State And District---------------------- */}
              <div className={classes.labelContainer}>
                <InputLabel className={classes.inputLabel}>State</InputLabel>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginLeft: "46.5%" }}
                >
                  District
                </InputLabel>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  name="Cstate"
                  // value="hello"
                  value={formValues.Cstate}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ width: "50%", marginRight: "2%" }}
                />
                <input
                  name="Cdistrict"
                  value={formValues.Cdistrict}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ width: "49%" }}
                />
              </div>
              {/* ----------------- present pin & mobile---------------------- */}
              <div className={classes.labelContainer}>
                <InputLabel className={classes.inputLabel}>Pin Code</InputLabel>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginLeft: "42%" }}
                >
                  Mobile Number
                </InputLabel>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  name="Cpin"
                  value={formValues.Cpin}
                  onChange={handleChange}
                  type="number"
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ width: "50%", marginRight: "2%" }}
                />
                <input
                  name="Cmobile"
                  value={formValues.Cmobile}
                  onChange={handleChange}
                  variant="outlined"
                  type="number"
                  className={classes.inputTwo}
                  style={{ width: "50%" }}
                />
              </div>
              {/* ------------- present contact details--------------------- */}
              <div className={classes.labelContainer}>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginRight: "38%" }}
                >
                  Email Address
                </InputLabel>
                <InputLabel className={classes.inputLabel}>
                  Phone Number
                </InputLabel>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  name="Cemail"
                  value={formValues.Cemail}
                  onChange={handleChange}
                  placeholder="xyz@stlindia.com"
                  type="email"
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ marginRight: "2%" }}
                />
                <input
                  name="Cphone"
                  value={formValues.Cphone}
                  onChange={handleChange}
                  placeholder="+91 12345667892"
                  type="number"
                  variant="outlined"
                  className={classes.inputTwo}
                />
              </div>
            </div>

            {/* ------------------------permanent address----------------------------------- */}
            <div style={{ marginTop: 30 }}>
              <Typography className={classes.formSubheading}>
                Permanent Address
              </Typography>
            </div>
            <div className={classes.outerBorder}>
              {/* //border blue */}
              {/* Address */}
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <InputLabel
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    marginTop: "15px",
                    color: "black",
                  }}
                >
                  Same As Present Address
                </InputLabel>
              </div>
              <div className={classes.labelContainer}>
                <InputLabel className={classes.inputLabel}>Address</InputLabel>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginLeft: "43.5%" }}
                >
                  Locality
                </InputLabel>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  name="Paddress"
                  value={checked ? formValues.Caddress : formValues.Paddress}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ marginRight: "2%" }}
                />
                <input
                  name="Plocality"
                  value={checked ? formValues.Clocality : formValues.Plocality}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.inputTwo}
                />
              </div>
              {/* ----city /country------ */}
              {/* Address */}
              <div className={classes.labelContainer}>
                <InputLabel className={classes.inputLabel}>
                  City/Locality/Area
                </InputLabel>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginLeft: "35%" }}
                >
                  Country
                </InputLabel>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  name="Pcity"
                  value={checked ? formValues.Ccity : formValues.Pcity}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ width: "46%", marginRight: "2%" }}
                />
                <Select
                  id="demo-simple-select"
                  name="Pcountry"
                  value={checked ? formValues.Ccountry : formValues.Pcountry}
                  onChange={(e) => handleChange(e)}
                  variant="outlined"
                  style={{
                    width: "48%",
                    height: "40px",
                  }}
                >
                  <MenuItem value={"india"}>India</MenuItem>
                  <MenuItem value={"pak"}>Pakistan</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </div>
              {/* -----------------State And District---------------------- */}
              <div className={classes.labelContainer}>
                <InputLabel className={classes.inputLabel}>State</InputLabel>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginLeft: "46.5%" }}
                >
                  District
                </InputLabel>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  name="Pstate"
                  value={checked ? formValues.Cstate : formValues.Pstate}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ width: "50%", marginRight: "2%" }}
                />
                <input
                  name="Pdistrict"
                  value={checked ? formValues.Cdistrict : formValues.Pdistrict}
                  onChange={handleChange}
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ width: "49%" }}
                />
              </div>
              {/* -----------------pin & mobile---------------------- */}
              <div className={classes.labelContainer}>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginRight: "43%" }}
                >
                  Pin Code
                </InputLabel>
                <InputLabel className={classes.inputLabel}>
                  Mobile Number
                </InputLabel>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  name="Ppin"
                  value={checked ? formValues.Cpin : formValues.Ppin}
                  onChange={handleChange}
                  type="number"
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ marginRight: "2%", width: "50%" }}
                />
                <input
                  name="Pmobile"
                  value={checked ? formValues.Cmobile : formValues.Pmobile}
                  onChange={handleChange}
                  type="number"
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ width: "48%" }}
                />
              </div>

              {/* -------------contact details--------------------- */}
              <div className={classes.labelContainer}>
                <InputLabel className={classes.inputLabel}>
                  Email Address
                </InputLabel>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginLeft: "38%" }}
                >
                  Phone Number
                </InputLabel>
              </div>
              <div style={{ display: "flex" }}>
                <input
                  name="Pemail"
                  value={checked ? formValues.Cemail : formValues.Pemail}
                  onChange={handleChange}
                  placeholder="xyz@stlindia.com"
                  type="email"
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ marginRight: "2%", width: "50%" }}
                />
                <input
                  name="Pphone"
                  value={checked ? formValues.Cphone : formValues.Pphone}
                  onChange={handleChange}
                  placeholder="+91 12345667892"
                  type="number"
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ width: "48%" }}
                />
              </div>
              {/* dashed border  end */}
            </div>
            {/* <Checkbox /> */}
            {/* ------------password---------------------- */}

            <div style={{ marginTop: "5%" }}>
              <Typography className={classes.formSubheading}>
                Choose Password
              </Typography>
            </div>
            <div className={classes.outerBorder}>
              <div>
                <div className={classes.labelContainer}>
                  <InputLabel className={classes.inputLabel}>
                    Password
                  </InputLabel>
                  <InputLabel
                    className={classes.inputLabel}
                    style={{ marginLeft: "42%" }}
                  >
                    Confirm Password
                  </InputLabel>
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <input
                  value={formValues.password}
                  onChange={(e) => handleChange(e)}
                  name="password"
                  type="password"
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ marginRight: "2%" }}
                />
                <input
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={checkValidation}
                  type="password"
                  variant="outlined"
                  className={classes.inputTwo}
                />
              </div>
              <div style={{ margin: "10px", color: "red", fontWeight: 600 }}>
                {isError}
              </div>
              <div className={classes.labelContainer}>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginTop: "" }}
                >
                  Security Question
                </InputLabel>
                <InputLabel
                  className={classes.inputLabel}
                  style={{ marginLeft: "34.5%" }}
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
                    label="Gender"
                    variant="outlined"
                    style={{
                      width: "%",
                      height: "40px",
                      width: "105%",
                      marginTop: "-2%",
                    }}
                  >
                    <MenuItem value={"pet"}>Pet Name</MenuItem>
                    <MenuItem value={"color"}>Favorite Color</MenuItem>
                    <MenuItem value={"movie"}>Favorite Movie</MenuItem>
                  </Select>
                </div>
                <input
                  value={formValues.securityAns}
                  onChange={(e) => handleChange(e)}
                  name="securityAns"
                  variant="outlined"
                  className={classes.inputTwo}
                  style={{ height: "20px", marginLeft: "1%" }}
                />
              </div>
              {/* outer border */}
            </div>

            {/* outer border */}
            {/* password section */}

            {/* ------------------password end------------------ */}
            <CaptchaTest />
            <button
              onClick={() => handleSubmit()}
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
