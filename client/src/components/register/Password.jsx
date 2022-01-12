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
      background: "#eeeee4",
    
    },
    form: {
    //   margin: "10px 10px 10px 5%",
      background: "red",
      width: "91%",
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
const Password = () =>{

    const classes = useStyle();
    return(
        <>
      {/* label */}
      <div className={classes.outerBorder}>
            <div className={classes.inputDiv}>
      <div className={classes.labelContainer}>
              <InputLabel className={classes.inputLabel}>
                Password
              </InputLabel>
              <InputLabel
                className={classes.inputLabel}
                style={{ marginLeft:360 }}
              >
                Confirm Password
              </InputLabel>
            </div>
            </div>
            <div style={{ display: "flex" }}>
              <TextField variant="outlined" className={classes.inputTwo} />
              <TextField variant="outlined" className={classes.inputTwo} />
            </div>
            </div>

        </>
    )

}

export default Password;