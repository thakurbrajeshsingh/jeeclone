import React, { useState, useEffect } from "react";
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
  form: {
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
    borderRadius: "25px",
    borderStyle: "dashed",
    padding: "40px",
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
  labelContainer: {
    display: "flex",
    // justifyContent: "space-between",
  },
  inputTwo: {
    width: "50%",
    padding: 5,
    height: "20px",
  },
});
const Password = () => {
  // ---------------------- password validation---------------
  const [isError, setIsError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkValidation = (e) => {
    const confPass = e.target.value;
    setConfirmPassword(confPass);
    setTimeout(() => {
      if (confPass != password) {
        setIsError("Password Does Not Match");
      } else {
        setIsError("");
      }
    }, 1000);
  };

  // ---------------------------------------------------------

  const classes = useStyle();
  return (
    <>
      <div style={{ marginLeft: "-5%" }}>
        <div className={classes.container}>
          <form>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="pass"
                    type="password"
                    variant="outlined"
                    className={classes.inputTwo}
                    style={{ marginRight: "2%" }}
                  />
                  <input
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={checkValidation}
                    type={"password"}
                    variant="outlined"
                    className={classes.inputTwo}
                  />
                </div>
                <div style={{ margin: "10px", color: "red", fontWeight: 600 }}>
                  {isError}
                </div>
                {/* ----------------------- */}
                <div className={classes.labelContainer}>
                  <InputLabel
                    className={classes.inputLabel}
                    style={{ marginTop: "" }}
                  >
                    Security Question
                  </InputLabel>
                  <InputLabel
                    className={classes.inputLabel}
                    style={{ marginLeft: "35%" }}
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
                      style={{ width: "425px",marginRight:"5%", height: "35px"}}
                    >
                      <MenuItem value={"pet"}>Pet Name</MenuItem>
                      <MenuItem value={"color"}>Favorite Color</MenuItem>
                      <MenuItem value={"movie"}>Favorite Movie</MenuItem>
                    </Select>
                  </div>
                  <input
                    variant="outlined"
                    className={classes.inputTwo}
                    style={{ height: "30%",width:"50%",marginLeft:"1%",marginTop:"1%" }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Password;
