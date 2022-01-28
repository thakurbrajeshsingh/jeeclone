import React from "react";




import HeaderButtonE from "./HeaderButtonE";
import {
  Container,
  makeStyles,
  Input,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyle = makeStyles({
    container: {
      marginTop: "12%",
      background: "#ffffff",
      width: "69.4vw",
    },
    formContainer: {
      textAlign: "center",
      margin: "0% 5% 2% 5%",
      border: "2px solid #1e81b0",
      borderRadius: "25px",
      borderStyle: "dashed",
      padding: "2%",
    },
  });

const DocUpload = () => {
  const classes = useStyle();
  return (
    <>
    
      <div style={{ background: "#EEEEE4" }}>
        <Container className={classes.container}>
        <HeaderButtonE />
          <h2 style={{ color: "#063970" }}> Document Upload</h2>
          <div className={classes.formContainer}>
            <table style={{ width: "100%" }}>
              <tr style={{ textAlign: "center" }}>
                <th colspan="1">
                  <h3 style={{ color: "#1e81b0" }}>S.no</h3>
                </th>
                <th>
                  <h3 style={{ color: "#1e81b0" }}>Required Document</h3>
                </th>
                <th>
                  <h3 style={{ color: "#1e81b0" }}>Document Specification</h3>
                </th>
                <th>
                  <h3 style={{ color: "#1e81b0" }}>Upload</h3>
                </th>
              </tr>
              <br />

              <tr style={{ textAlign: "center" }}>
                <th colspan="1">1</th>
                <th>10th Certificate</th>
                <th>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="gender"
                    label="10th"
                    variant="outlined"
                    style={{
                      width: "80%",
                      height: "38px",
                      margin: " 0% 5% 2% 10%",
                    }}
                  >
                    <MenuItem value={"cbse"}>Image</MenuItem>
                    <MenuItem value={"icse"}>Pdf</MenuItem>
                  </Select>
                </th>
                <th>
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    name="mat"
                    // onChange={handlePhoto}
                  />
                </th>
              </tr>
              {/* ------------- 10 th input---------------------- */}
              <tr>
                <th colspan="2"></th>
                <th></th>
                <th></th>
              </tr>
              <br />
              <br />
              {/* -----------------+2 details--------------------- */}
              <tr>
                <th colspan="1">2</th>
                <th>12th Certificate</th>
                <th>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="gender"
                    label="10th"
                    variant="outlined"
                    style={{
                      width: "80%",
                      height: "38px",
                      margin: " 0% 5% 2% 10%",
                    }}
                  >
                    <MenuItem value={"cbse"}>Image</MenuItem>
                    <MenuItem value={"icse"}>Pdf</MenuItem>
                  </Select>
                </th>
                <th>
                  {" "}
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    name="inter"
                    // onChange={handlePhoto}
                  />
                </th>
              </tr>
              <tr>
                <th colspan="2"></th>
                <th> </th>
                <th></th>
              </tr>
              <br />
              <br />
              {/* -----------------------Graduation
              --------------------- */}
              <tr>
                <th colspan="1">3</th>
                <th>Graduation</th>
                <th>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="gender"
                    label="10th"
                    variant="outlined"
                    style={{
                      width: "80%",
                      height: "38px",
                      margin: " 0% 5% 2% 10%",
                    }}
                  >
                    <MenuItem value={"cbse"}>Image</MenuItem>
                    <MenuItem value={"icse"}>Pdf</MenuItem>
                  </Select>
                </th>
                <th>
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    name="grad"
                    // onChange={handlePhoto}
                  />
                </th>
              </tr>
              <tr>
                <th colspan="2"></th>
                <th> </th>
                <th></th>
              </tr>
            </table>
          </div>

          <button
            // onClick={() => handleSubmits()}
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
            Next
          </button>
        </Container>
      </div>
    </>
  );
};

export default DocUpload;
