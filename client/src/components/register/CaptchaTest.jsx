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
              marginTop: "10px",
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
            }}
          >
            <InputLabel
              style={{ fontSize: "18px", fontWeight: 600, color: "black" }}
            >
              Enter Security PIN(Case Sensitive)
            </InputLabel>
            <InputLabel
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "black",
                marginLeft: "170px",
              }}
            >
              Enter Security PIN(Case Sensitive)
            </InputLabel>
          </div>
          {/* --------------------------------------------------------------------- */}
          <div
            style={{
              display: "flex",
              width: "70%",
              margin: "10px 10px 10px 0px",
              padding: "0.1% 0%",
              justifyContent: "space-between",
            }}
          >
            <input
              placeholder="Enter Captcha Value"
              id="user_captcha_input"
              name="user_captcha_input"
              type="text"
              style={{ width: "448px" }}
            />

            <LoadCanvasTemplate/>
          </div>
        </div>
        <button
          class="btn btn-primary"
          onClick={() => this.doSubmit()}
          style={{
            borderRadius: "10px",
            color: "#ffffff",
            background: "#f98006",
            marginLeft: "350px",
            fontSize: "20px",
            marginTop: "35px",
            width: "240px",
            padding: "15px",
            marginBottom:"50px"
          }}
        >
          Submit
        </button>
      </>
    );
  }
}

export default CaptchaTest;
