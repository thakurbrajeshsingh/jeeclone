import {
  Container,
  makeStyles,
  Input,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";

// component
import HeaderButtonE from "./HeaderButtonE";
import Footer from  '../../footer/Main'
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

const EducationDetails = () => {
  const classes = useStyle();
  return (
    <>
      <div style={{ background: "#EEEEE4" }}>
        <Container className={classes.container}>
          <HeaderButtonE />
          <h2 style={{ color: "#063970" }}> Education Qualification</h2>
          <div className={classes.formContainer}>
            <table style={{ width: "100%" }}>
              <tr style={{ textAlign: "center" }}>
                <th colspan="1">
                  <h3 style={{ color: "#1e81b0" }}>Certificate</h3>
                </th>
                <th>
                  <h3 style={{ color: "#1e81b0" }}>Board</h3>
                </th>
                <th>
                  <h3 style={{ color: "#1e81b0" }}>Year</h3>
                </th>
                <th>
                  <h3 style={{ color: "#1e81b0" }}>Percentage/CGPA</h3>
                </th>
              </tr>
              <br />

              <tr style={{ textAlign: "center" }}>
                <th colspan="1">Matriculation</th>
                <th>Select your Board</th>
                <th>Select your Year</th>
                <th>Matriculation Marks</th>
              </tr>
              {/* ------------- 10 th input---------------------- */}
              <tr>
                <th colspan="2">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="gender"
                    label="10th"
                    variant="outlined"
                    style={{
                      width: "50%",
                      height: "38px",
                      margin: " 0% 5% 2% 43%",
                    }}
                  >
                    <MenuItem value={"cbse"}>CBSE</MenuItem>
                    <MenuItem value={"icse"}>ICSE</MenuItem>
                    <MenuItem value={"state"}>State</MenuItem>
                  </Select>
                </th>
                <th>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="gender"
                    label="10th"
                    variant="outlined"
                    style={{
                      width: "80%",
                      marginTop: "-2%",
                      height: "38px",
                    }}
                  >
                    <MenuItem value={"2016"}>2016</MenuItem>
                    <MenuItem value={"2017"}>2017</MenuItem>
                    <MenuItem value={"2018"}>2018</MenuItem>
                  </Select>
                </th>
                <th>
                  <input
                    variant="outlined"
                    name="percentage"
                    placeholder="Enter Matriculation"
                    style={{ height: "30px" }}
                  />
                </th>
              </tr>
              <br />
              <br />
              {/* -----------------+2 details--------------------- */}
              <tr>
                <th colspan="1">Intermediate</th>
                <th>Select your Board</th>
                <th>Select your Year</th>
                <th>Intermediate Marks</th>
              </tr>
              <tr>
                <th colspan="2">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="gender"
                    label="10th"
                    variant="outlined"
                    style={{
                      width: "50%",
                      height: "38px",
                      margin: " 0% 5% 2% 43%",
                    }}
                  >
                    <MenuItem value={"cbse"}>CBSE</MenuItem>
                    <MenuItem value={"icse"}>ICSE</MenuItem>
                    <MenuItem value={"state"}>State</MenuItem>
                  </Select>
                </th>
                <th>
                  {" "}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="gender"
                    label="10th"
                    variant="outlined"
                    style={{
                      width: "80%",
                      marginTop: "-2%",
                      height: "38px",
                    }}
                  >
                    <MenuItem value={"2018"}>2018</MenuItem>
                    <MenuItem value={"2019"}>2019</MenuItem>
                  </Select>
                </th>
                <th>
                  <input
                    type="text"
                    style={{ height: "30px" }}
                    placeholder="Enter Intermidiate"
                  />
                </th>
              </tr>
              <br />
              <br />
              {/* -----------------------Graduation
              --------------------- */}
              <tr>
                <th colspan="1">Graduation</th>
                <th>Select your Board</th>
                <th>Select your Year</th>
                <th>Graduation Marks</th>
              </tr>
              <tr>
                <th colspan="2">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="gender"
                    label="10th"
                    variant="outlined"
                    style={{
                      width: "50%",
                      height: "38px",
                      margin: " 0% 5% 2% 43%",
                    }}
                  >
                    <MenuItem value={"cbse"}>BPUT</MenuItem>
                    <MenuItem value={"icse"}>Autonomous</MenuItem>
                    <MenuItem value={"state"}>Other</MenuItem>
                  </Select>
                </th>
                <th>
                  {" "}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="gender"
                    label="10th"
                    variant="outlined"
                    style={{
                      width: "80%",
                      marginTop: "-2%",
                      height: "38px",
                    }}
                  >
                    <MenuItem value={"2019"}>2019</MenuItem>
                    <MenuItem value={"2020"}>2020</MenuItem>
                    <MenuItem value={"2021"}>2021</MenuItem>
                  </Select>
                </th>
                <th>
                  <input
                    type="text"
                    style={{ height: "30px" }}
                    placeholder="Enter Graduation"
                  />
                </th>
              </tr>
            </table>
          </div>
          {/* ----------------------upload------------------------------------- */}
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
         
          <Button
              variant="outlined"
              href="/"
              style={{
                color: "#0D80D8",
                margin: "20px 20px 20px 35%",
                borderColor: "#97C1EA",
                fontSize: "20px",
                width: "200px",
              }}
            >
              Submit
            </Button>
        </Container>
        <Footer/>
      </div>
     
    </>
  );
};

export default EducationDetails;