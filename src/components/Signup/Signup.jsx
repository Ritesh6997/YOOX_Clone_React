import React, { useState } from "react";
import "./Signup.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";

export const Signup = () => {
  const responseSuccessGoogle = (response) => {
    console.log("res", response.Lu);
    axios({
      method: "POST",
      url: "http://localhost:9002/register",
      data: {
        first_name: response.Lu.iY,
        last_name: response.Lu.wW,
        email: response.Lu.Bv,
      },
    }).then((response) => {
      alert(response.data.message);
      nav("/login");
    });
  };
  const responseErrorGoogle = (respone) => {
    console.log("err", respone);
  };

  const nav = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    dob: "",
    number: "",
  });
  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const register = () => {
    const { first_name, last_name, email, password, dob, number } = user;
    if (first_name && last_name && email && password && dob && number) {
      axios
        .post("http://localhost:9002/register", user)
        .then((res) => console.log(res));
      alert("Succesfully Added");
      nav("/login");
    } else {
      alert("Fill all the input fields");
    }
  };

  const Hr = styled.hr`
    border: none;
    border-top: 8px dashed black;
    color: #fff;
    background-color: #fff;
    height: 0%;
    width: 100%;
  `;

  return (
    <div style={{ height: "1100px" }}>
      <hr></hr>
      <div className="myox">
        <h3>MYO0X</h3>
        <h2>REGISTRATION</h2>
        <p>
          Take advantage of a faster checkout and enjoy promotions for
          registered customers only
        </p>
        <h4>Discover all the benefits</h4>
        <br />
        <div className="form">
          <h3>REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT</h3>
          <GoogleLogin
            clientId="739317188642-qmnkdd4sei6hbpcth0n3m91q9sgbpikp.apps.googleusercontent.com"
            buttonText="Login With Google"
            className="gg"
            onSuccess={responseSuccessGoogle}
            onFailure={responseErrorGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <br />
          <br />
          <h3>OR WITH YOUR EMAIL</h3>
          <input
            className="inpsignup"
            type="text"
            name="first_name"
            value={user.first_name}
            placeholder="FIRST NAME"
            onChange={handleChange}
            // required
          />
          <br />
          <br />
          <input
            className="inpsignup"
            type="text"
            name="last_name"
            value={user.last_name}
            placeholder="LAST NAME"
            onChange={handleChange}
            // required
          />
          <br />
          <br />
          <input
            className="inpsignup"
            type="text"
            name="email"
            value={user.email}
            placeholder="E-MAIL"
            onChange={handleChange}
            // required
          />
          <br />
          <br />
          <input
            className="inpsignup"
            type="password"
            name="password"
            value={user.password}
            placeholder="PASSWORD*"
            onChange={handleChange}
            // required
          />
          <p>Personalize your shopping experience</p>
          <div className="checkbox">
            <input
              className="inpsignup"
              type="radio"
              name="gender"
              value="male"
            />
            <p>Female</p>
            <input
              className="inpsignup"
              type="radio"
              name="gender"
              value="female"
            />
            <p>Male</p>
          </div>

          <p style={{padding:"0 10px"}}>
            If you are over 18 years old, celebrate your birthday with us: We
            have a surprise for you.
          </p>
          <input
            className="inpsignup"
            type="date"
            name="dob"
            value={user.dob}
            placeholder="DATE OF BIRTH"
            onChange={handleChange}
            // required
          />
          <p>CELL PHONE</p>
          <input
            className="inpsignup"
            type="number"
            name="number"
            value={user.number}
            onChange={handleChange}
            // required
          />
          <p>
            By entering your phone number, you agree to be contacted by SMS for
            marketing and promotional purposes.
          </p>
          <div>
            <span>
              I declare that I have read and accept the MYOOX Terms and
              Conditions of Use
            </span>
            <div className="chekbox">
              <input className="inpsignup" type="checkbox" />
              <p>
                I agree to the use of my personal data in order to be updated on
                new arrivals, informed about exclusive items and contacted as
                part of targeted marketing initiatives related to services
                offered by YOOX. By analyzing my personal data, order history
                and browsing habits, YOOX can improve my shopping experience
                with suggestions that correspond to my interests. For further
                information, please consult the Privacy Policy.
              </p>
            </div>
          </div>
          <button className="register" type="submit" onClick={register}>
            REGISTER
          </button>
        </div>

        <hr></hr>
      </div>
    </div>
  );
};
