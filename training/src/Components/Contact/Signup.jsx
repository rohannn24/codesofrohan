import "./Signup.css";
import React, { useState } from "react";

const Signup = () => {
  const [passState, changeState] = useState("password");
  const showPass = () => {
    if (passState === "password") {
      changeState("text");
      setShText('Hide');
    } else {
      changeState("password");
      setShText('Show');
    }
  };
  const [username, setusername] = useState("");
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    cnfpass: "",
    password: "",
  });
  const setUserId = (email) => {
    const userId = email.split("@");
    return userId[0];
  };
  const [msg, setMsg] = useState("");
  const [shText, setShText] = useState('Show');
  const formSubmit = (ev) => {
    ev.preventDefault();
    if (details.password === details.cnfpass) {
      alert("Sure You want to submit?");
      document.getElementById("showing-id").style.display = "flex";
      setMsg("Details successfully Saved!!!");
      document.getElementById('col').style.color = "green";
      const idByEmail = setUserId(details.email);
      setusername(idByEmail);
      document.getElementById('item1').style.display = "block";
      document.getElementById('item2').style.display = "block";
      document.getElementById('item3').style.display = "block";
      document.getElementById('item4').style.display = "block";
    } else{
        alert("Sure You want to submit?");
        document.getElementById("showing-id").style.display = "flex";
        setMsg("Password Miss Matched!!!")
        document.getElementById('col').style.color = "red";
        document.getElementById('item1').style.display = "none";
        document.getElementById('item2').style.display = "none";
        document.getElementById('item3').style.display = "none";
        document.getElementById('item4').style.display = "none";
    }
  };

  const handleOnChange = (ev) => {
    const { name, value } = ev.target;
    setDetails((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  
  return (
    <>
      <div className="full-signup">
        <div className="signup">
          <div className="content">
            <h1 className="head">Sign Up</h1>

            <form onSubmit={formSubmit}>
              <input
                type="text"
                placeholder="First Name"
                className="userInput"
                name="fname"
                onChange={handleOnChange}
                required = "First Name Required"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="userInput"
                name="lname"
                onChange={handleOnChange}
                required = "First Name Required"
              />
              <input
                type={passState}
                placeholder="password"
                className="userInput"
                name="password"
                onChange={handleOnChange}
                required = "First Name Required"
              />
              <div className="rap">
                <input
                  type={passState}
                  placeholder="Confirm Password"
                  className="userInput"
                  name="cnfpass"
                  onChange={handleOnChange}
                  required = "First Name Required"
                />
                <div className="su-btn1" onClick={showPass}>
                  {shText}
                </div>
              </div>
              <input
                type="email"
                placeholder="Email Id"
                className="userInput"
                name="email"
                onChange={handleOnChange}
                required = "First Name Required"
              />

              <button className="su-btn" type="submit">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="p-full" id="showing-id" style={{ display: "none" }}>
        <div className="printing">
          <h1 className="p-head" id = "col">{msg}</h1>
          <p id = 'item1'>
            Full Name: {details.fname} {details.lname}
          </p>
          <p id = 'item2'>Email ID: {details.email}</p>
          <p id = 'item3'>Username: {username}</p>
          <p id = 'item4'>Password: {details.password}</p>
        </div>
      </div>
    </>
  );
};

export default Signup;
