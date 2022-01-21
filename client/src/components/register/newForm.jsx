import React,{useState} from "react";


function Firstform() {
  const [user,setUser] = useState({
    name :"",
    fatherName :"",
    motherName :"",
    dob : "",
    gender : "",
    idType : "",
    idNumber : "",

    presentAddress : "",
    presentLocality : "",
    present_city_town_village : "",
    present_country : "",
    present_state : "",
    present_district : "",
    present_pin : "",
    alternative_contactNo : "",
    email : "",
    mobileNo : "",

    permanentAddress : "",
    permanentLocality : "",
    permanent_city_town_village : "",
    permanent_country : "",
    permanent_state : "",
    permanent_district : "",
    permanent_pin : "",

    password : "",
    confirmPassword : "",
    securityQuestion : "",
    securityAnswer : "",

    securityPin : "",

  });
  
  let name,value;
  const handleInputs = (e)=>{
    console.log(e)
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value})
  }

  return (
    <div className="container-xxl">
                   <form name="myForm" className="row g-3">
                   <p class="text-white"/>
                <div class="btn-group">
                        <a href className="btn btn-primary active first_a"
                                aria-current="page">Registration</a>
                        <a href className="btn btn-primary first_a">Application Form</a>
                        <a href className="btn btn-primary first_a">Documentation Upload</a>
                </div>

               {/* first */}

               <h3 className="myForm_h3">Personal Details</h3>
        <div className="col-md-12 myForm_div">
                <div>
                        <label for="inputname" className="form-label">Name</label>
                        <input type="text" className="form-control" name="inputname" id="inputname"
                                value={user.inputname}
                                onChange={handleInputs} required />

                </div>

                <div className="myForm_div1">
                        <div className="col-md-6">
                                <label for="inputFatherName" className="form-label"> Father's Name</label>
                                <input type="text" className="form-control" name="inputFatherName"
                                        id="inputFatherName"
                                        value={user.inputFatherName}
                                        onChange={handleInputs} required />
                        </div>
                        <div className="col-md-6">
                                <label for="inputMotherName" className="form-label">Mother"s Name</label>
                                <input type="text" className="form-control" name="inputMotherName"
                                        id="inputMotherName"
                                        value={user.inputMotherName}
                                        onChange={handleInputs} required />
                        </div>
                </div>
                <div className="myForm_div1">
                        <div className="col-md-6">
                                <label for="inputDob" className="form-label">Candidate Date Of Birth</label>
                                <input type="date" className="form-control" name="inputDob" id="inputDob"
                                value={user.inputDob}
                                onChange={handleInputs}/>
                        </div>
                        <div className="col-6">
                                <label for="inputGender" className="form-label">Gender</label>
                                <select className="form-control" name="inputGender" id="inputGender"
                                        class="form-select">
                                        <option selected>Choose...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                </select>
                        </div>
                </div>

                <div className="myForm_div1">
                        <div className="col-md-6">
                                <label for="inputIdentity" className="form-label"> Identity type</label>
                                <select name="inputIdentity" id="inputIdentity"
                                        className="form-select">
                                        <option selected>Choose...</option>
                                        <option>Aadhar card</option>
                                        <option>Pan card</option>
                                </select>
                        </div>
                        <div className="col-md-6">
                                <label for="inputIdentification" className="form-label">Identification
                                        number</label>
                                <input type="text" maxlength="12" className="form-control" name="inputIdentification"
                                        id="inputIdentification"/>
                        </div>
                </div>
        </div>  

               {/* second */}

               <h3 className="myForm_h3">Present Address</h3>
                        <div className="myForm_div">
                                <div className="myForm_div1">
                                        <div className="col-md-6">
                                                <label for="inputPresentAddress" className="form-label">Address</label>
                                                <input type="text" className="form-control" name="inputPresentAddress"
                                                        id="inputPresentAddress"/>
                                        </div>
                                        <div className="col-md-6">
                                                <label for="inputPresentLocality"
                                                        className="form-label">Locality(optional)</label>
                                                <input type="text" className="form-control" name="inputPresentLocality"
                                                        id="inputPresentLocality"/>
                                        </div>
                                </div>
                                <div className="myForm_div1">
                                        <div className="col-6">
                                                <label for="inputPresentCity"
                                                        className="form-label">City/Town/Village</label>
                                                <input type="text" className="form-control" name="inputPresentCity"
                                                        id="inputPresentCity"/>
                                        </div>
                                        <div className="col-6">
                                                <label for="inputPresentCountry" className="form-label">Country</label>
                                                <select className="form-select select_1"
                                                        name="inputPresentCountry" id="inputPresentCountry">
                                                        <option selected>Choose...</option>
                                                        <option>India</option>
                                                        <option>USA</option>
                                                        <option>Africa</option>
                                                        <option>Nepal</option>
                                                        <option>Australia</option>
                                                </select>

                                        </div>
                                </div>
                                <div className="myForm_div1">
                                        <div class="col-md-6">
                                                <label for="inputPresentState" className="form-label">State</label>
                                                <select className="form-select" name="inputPresentState"
                                                        id="inputPresentState">
                                                        <option selected>Choose...</option>
                                                        <option>Odisha</option>
                                                        <option>West Bengal</option>
                                                        <option>Karnataka</option>
                                                        <option>Maharastra</option>
                                                        <option>Goa</option>
                                                </select>
                                        </div>
                                        <div className="col-md-6">
                                                <label for="inputPresentDistrict" className="form-label">District</label>
                                                <select className="form-select select_1"
                                                        name="inputPresentDistrict" id="inputPresentDistrict"
                                                        >
                                                        <option selected>Choose...</option>
                                                        <option>Cuttack</option>
                                                        <option>jajpur</option>
                                                        <option>Ganjam</option>
                                                        <option>koraput</option>
                                                        <option>boudha</option>
                                                        <option>malkanagir</option>
                                                </select>
                                        </div>
                                </div>
                                <div className="myForm_div1">
                                        <div class="col-md-6">
                                                <label for="inputPresentPinCode" className="form-label">Pincode</label>
                                                <input type="text" maxlength="6" className="form-control"
                                                        name="inputPresentPinCode" id="inputPresentPinCode"/>
                                        </div>
                                        <div className="col-md-6">
                                                <label for="inputACN" className="form-label">Alternative Contact
                                                        Number</label>
                                                <input type="text" maxlength="10" className="form-control select_1" name="inputACN"
                                                        id="inputACN"/>
                                        </div>
                                </div>
                                <div className="myForm_div1">
                                        <div className="col-md-6">
                                                <label for="inputEmail" className="form-label">Email</label>
                                                <input type="email" className="form-control" name="inputEmail"
                                                        id="inputEmail" placeholder="name@gmail.com" required/>
                                        </div>
                                        <div className="col-md-6">
                                                <label for="inputMobile" className="form-label">Mobile Number</label>
                                                <input type="text" maxlength="10 " className="form-control select_1"
                                                        name="inputMobile" id="inputMobile"
                                                        onkeypress="return ValidateMobileNumber(event)"/>
                                        </div>
                                </div>
                        </div>   

               {/* third */}

               <h3 className="myForm_h3" >Permanent Address</h3>
                        <div className="myForm_div">
                                <div className="myForm_div1">
                                        <div className="col-md-6">

                                                <div className="col-12">
                                                        <div className="form-check">
                                                                <input className="form-check-input" type="checkbox"
                                                                        name="gridCheckBox" id="gridCheckBox"
                                                                        onclick="FillAddress()"/>
                                                                <label className="form-check-label" for="gridCheckBox">
                                                                        Same as Present Address
                                                                </label>
                                                        </div>
                                                </div>

                                                <label for="inputPermanentAddress" className="form-label">Address</label>
                                                <input type="email" className="form-control" name="inputPermanentAddress"
                                                        id="inputPermanentAddress"/>
                                        </div>
                                        <div className="col-md-6"> <br/>
                                                <label for="inputPermanentLocality"
                                                        className="form-label">Locality(optional)</label>
                                                <input type="password" className="form-control select_1"
                                                        name="inputPermanentLocality" id="inputPermanentLocality"
                                                        />
                                        </div>
                                </div>
                                <div className="myForm_div1">
                                        <div class="col-6">
                                                <label for="inputPermanentCity"
                                                        className="form-label">City/Town/Village</label>
                                                <input type="text" className="form-control" name="inputPermanentCity"
                                                        id="inputPermanentCity"/>
                                        </div>
                                        <div class="col-6">
                                                <label for="inputPermanentCountry" className="form-label">Country</label>
                                                <input type="text" className="form-control" name="inputPermanentCountry"
                                                        id="inputPermanentCountry"/>
                                        </div>
                                </div>
                                <div className="myForm_div1">
                                        <div class="col-md-6">
                                                <label for="inputPermanentState" className="form-label">State</label>
                                                <select className="form-select" name="inputPermanentState"
                                                        id="inputPermanentState">
                                                        <option selected>Choose...</option>
                                                        <option>Odisha</option>
                                                        <option>West Bengal</option>
                                                        <option>Karnataka</option>
                                                        <option>Maharastra</option>
                                                        <option>Goa</option>
                                                </select>
                                        </div>
                                        <div className="col-md-6">
                                                <label for="inputPermanentDistrict" className="form-label select_1">District</label>
                                                <select name="inputPermanentDistrict" id="inputPermanentDistrict"
                                                        className="form-select">
                                                        <option selected>Choose...</option>
                                                        <option>Khordha</option>
                                                        <option>Ganjam</option>
                                                        <option>Koraput</option>
                                                        <option>Cuttack</option>

                                                </select>
                                        </div>
                                 </div>       
                                <div className="myForm_div1">
                                        <div className="col-md-6">
                                                <label for="inputPermanentPinCode" className="form-label">Pincode</label>
                                                <input type="text" className="form-control" name="inputPermanentPinCode"
                                                        id="inputPermanentPinCode" required/>
                                        </div>
                                </div>
                        </div>


               {/* fourth */}

               <h3 className="myForm_h3">Choose Password</h3>
                        <div className="myForm_div">
                                <div className="myForm_div1">
                                        <div className="col-md-6">
                                                <label for="psw" className="form-label">password</label>
                                                <input type="password" className="form-control" name="psw" id="psw"
                                                        pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
                                                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                                        required/>
                                                <input type="checkbox" onclick="myFunction()"/>Show Password
                                        </div>

                                        <div className="col-md-6">
                                                <label for="inputConfirmPassword" className="form-label">Confirm
                                                        password</label>
                                                <input type="password" className="form-control select_1" name="inputConfirmPassword"
                                                        id="inputConfirmPassword"/>

                                        </div>
                                </div>
                                <div id="message">
                                        <h3>Password must contain the following:</h3>
                                        <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                                        <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                                        <p id="number" className="invalid">A <b>number</b></p>
                                        <p id="length" className="invalid">Minimum <b>8 characters</b></p>
                                </div>
                                <div className="myForm_div1">
                                        <div className="col-6">
                                                <label for="inputSecurityQuestion" className="form-label">Security
                                                        Question</label>
                                                <select name="inputSecurityQuestion" className="form-select"
                                                        id="inputSecurityQuestion">
                                                        <option selected>Choose...</option>
                                                        <option>what is your favourite colour</option>
                                                        <option>what is your pet name</option>
                                                </select>
                                        </div>
                                        <div className="col-6">
                                                <label for="inputAnswer" className="form-label">Security Answer</label>
                                                <input type="text" className="form-control select_1" name="inputAnswer"
                                                        id="inputAnswer"/>
                                        </div>


                                </div>
                        </div>

               {/* fifth */}

               <h3 className="myForm_h3">Security Pin</h3>
                        <div className="col-md-12 myForm_div" >
                                <div className="row">
                                        <div className="col">
                                                <label><b>Enter Security Pin (Case Sensitive)</b></label>
                                                <input type="text" className="form-control" name="SPin" id="Spin"
                                                        aria-label="First name"/>
                                        </div>
                                        <div className="col">
                                                <label><b>Enter Security Pin (Case Sensitive)</b></label>
                                                <div className=" text-center">

                                                        <body onload="GenerateCaptcha();">
                                                                <input type="text" name="txtCompare" id="txtCompare" />
                                                                <input type="text" name="txtCaptcha" id="txtCaptcha"
                                                                        className="textCaptcha_input"/>
                                                                <input type="button" name="btnrefresh" value="Refresh"
                                                                        onclick="GenerateCaptcha()" /></body>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <button type="submit" className="btn text-white btn_submit"
                                data-toggle="button"
                                aria-pressed="false" autocomplete="off">Submit</button>
               {/* sixth */}

              </form>
           </div>           
  );
}

export default Firstform;
