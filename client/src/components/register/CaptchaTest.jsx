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
          <div
            style={{
              padding: "0.1% 5%",
              margin: "10px 10px 10px 0%",
              width: "96.3%",
              border: "2px solid #1e81b0",
              borderStyle: "dashed",
              padding: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <InputLabel>Enter Security PIN(Case Sensitive)</InputLabel>
              <InputLabel style={{ fontSize: 18 }}>
                Enter Security PIN(Case Sensitive)
              </InputLabel>
            </div>
            {/* --------------------------------------------------------------------- */}
            <div
              style={{
                display: "flex",
                width: "70%",
                margin: "10px 10px 10px 15%",
                padding: "0.1% 5%",
                justifyContent: "space-between",
              }}
            >
              <input
                placeholder="Enter Captcha Value"
                id="user_captcha_input"
                name="user_captcha_input"
                type="text"
              />
              <div style={{ background: "#eeeee4" }}>
                <LoadCanvasTemplate />
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-primary" onClick={() => this.doSubmit()}>
          Submit
        </button>
      </>
    );
  }
}

export default CaptchaTest;
