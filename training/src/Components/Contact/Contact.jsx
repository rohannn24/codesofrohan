import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [hide, visible] = useState("password");
  const showVal = () => {
    if(hide === "password"){
        visible("text");
    } else{
        visible("password");
    }
  }
  const [det, setDet] = useState({
    fname: "",
    lname: "",
    password: "",
    cnfPass: "",
    email: "",
  });
  let [showMsg, setMsg] = useState("");
  const submitBtn = (eVal) => {
    eVal.preventDefault();
    if(det.password !== det.cnfPass){
        setMsg("Password Miss Matched!!");
        alert('Do you want to submit!!!');
        document.getElementById('condi-color').style.display = "block";
        document.getElementById('condi-color').style.color = "red";
        document.getElementById('condi-color').style.textAlign = "center";
      } else{
        document.getElementById('condi-color').style.color = "green";
        alert('Do you want to submit!!!');
        setMsg("Data Submitted Successfully!!");
        document.getElementById('condi-color').style.display = "block";
        document.getElementById('condi-color').style.textAlign = "center";
        document.getElementById('detailss').style.display = 'block';
        document.getElementById('detailss').style.textAlign = 'center';
        let uN = extractUsernameFromEmail(det.email);
        setUsername(uN);
    }
  };
  function extractUsernameFromEmail(email) {
    const parts = email.split("@");
    return parts[0];
  }
  const details = (event) => {
    const {name, value} = event.target;
    setDet((pVal) => {
        return{
            ...pVal,
            [name]: value
        }
    });
  };
  const [useName, setUsername] = useState("");
  
  return (
    <>
      <div className="con-full">
        <div className="con-left">
          <h1 style={{textAlign: 'center'}}>Sign Up</h1>
          <form onSubmit={submitBtn}>
            <br />
            <input
              className="con-input naming"
              type="text"
              placeholder="First Name"
              name="fname"
              value={det.fname}
              onChange={details}
            />
            <input
              className="con-input naming"
              type="text"
              placeholder="Last Name"
              name="lname"
              onChange={details}
              value={det.lname}
              style={{marginLeft: '5px'}}
            />
            <br />
            <input
              className="con-input"
              type={hide}
              placeholder="Password"
              name="password"
              onChange={details}
              value={det.password}
              style={{width: "97%"}}
            />
            <br />
            <input
              className="con-input"
              type= "text"
              placeholder="Confirm Password"
              name="cnfPass"
              onChange={details}
              value={det.cnfPass}
              style={{width: "97%"}}
            />
            <div className="showbtn" onClick={showVal}>
              show
            </div>
            <br />
            <input
              className="con-input"
              type="email"
              placeholder="email"
              name="email"
              onChange={details}
              value={det.email}
              style={{width: "97%"}}
            />
            <br />
            <button name="submit" type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
        <div className="con-right">
          <div className="control-img">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/005/085/064/small/odcast-can-use-for-webinar-online-training-radio-show-or-audio-free-vector.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <p style={{fontSize: "30px", fontWeight: "600", display: 'none'}} id = "condi-color">{showMsg}</p>
      <div className="print-detail" id = "detailss" style = {{display: 'none', fontFamily: "sans-serif"}}>
        <p>Full Name: "{det.fname} {det.lname}"</p>
        <p>Username: "{useName}"</p>
        <p>Pasword: "{det.password}"</p>
        <p>Email: "{det.email}"</p>
      </div>
    </>
  );
};

export default Contact;
