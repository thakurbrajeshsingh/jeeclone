import React, { Component } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

import {
  Typography,
  makeStyles,
  Select,
  MenuItem,
  Box,
  InputLabel,
  TextField,
} from "@material-ui/core";

class CaptchaTest extends Component {
  componentDidMount() {
    loadCaptchaEnginge(6);
  }

  doSubmit = () => {
    let user_captcha = document.getElementById("user_captcha_input").value;

    if (validateCaptcha(user_captcha) == true) {
      alert("Captcha Matched");
      loadCaptchaEnginge(6);
      document.getElementById("user_captcha_input").value = "";
    } else {
      alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
    }
  };

  render() {
    return (
      <>
        {/* subHeading Security Section */}
        <div>
          <Typography
            style={{
              marginTop: "3%",
              fontSize: "20px",
              fontWeight: 600,
              color: "#063970",
            }}
          >
            Choose PIN
          </Typography>
        </div>

        <div
          style={{
            margin: "1% 1% 1% 1%",
            width: "90%",
            border: "2px solid #1e81b0",
            borderRadius: "25px",
            borderStyle: "dashed",
            padding: "5%",
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <InputLabel
              style={{ fontSize: "18px", fontWeight: 600, color: "black" }}
            >
              Enter Security PIN(Case Sensitive)
            </InputLabel>
          </div>
          {/* --------------------------------------------------------------------- */}
          <div
            style={{
              display: "flex",
              justifyContent:"space-between"
            }}
          >
            <input
              placeholder="Enter Captcha Value"
              id="user_captcha_input"
              name="user_captcha_input"
              type="text"
              style={{  width:"48%",marginTop:"1%" }}
            />
            <div>
              <LoadCanvasTemplate />
            </div>
            <button onClick={() => this.doSubmit()} style={{ width: "22%" }}>
              Verify Captcha
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CaptchaTest;
