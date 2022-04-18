import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../images/logo.svg";
import SideImage from "../../images/phone.svg";
import LoginCSS from "./Login.module.css";

const Register = () => {
  return (
    <div className={LoginCSS.page_wrapper_login}>
      {/* left side of the login page */}
      <div className={LoginCSS.page_login_left}>
        {/* left side image */}
        <img className={LoginCSS.left_logo} src={SideImage} alt="login logo" />
      </div>
      <div className={LoginCSS.page_login_right}>
        {/* form wrapper */}
        <div className={LoginCSS.login_form_wrapper}>
          {/* logo */}
          <img src={LogoImage} alt="Pioneer Alpha logo" />
          <p className={LoginCSS.subtitle}>
            Courses are waiting for you... Hurry up!!
          </p>
          {/* login fields */}
          <div className={LoginCSS.login_field}>
            <input
              className={LoginCSS.login_input}
              type="text"
              placeholder="Name"
            />
            <input
              className={LoginCSS.login_input}
              type="email"
              placeholder="Email Address"
            />
            <input
              className={LoginCSS.login_input}
              type="tel"
              placeholder="Phone"
            />
            <input
              className={LoginCSS.login_input}
              type="password"
              placeholder="Password"
            />
            <input
              className={LoginCSS.submit_btn}
              type="button"
              value="LOG IN"
            />
          </div>

          <p className={LoginCSS.account}>
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
