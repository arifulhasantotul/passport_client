import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../images/logo.svg";
import SideImage from "../../images/phone.svg";
import LoginCss from "./Login.module.css";

const Register = () => {
  return (
    <div className={LoginCss.page_wrapper_login}>
      {/* left side of the login page */}
      <div className={LoginCss.page_login_left}>
        {/* left side image */}
        <img className={LoginCss.left_logo} src={SideImage} alt="login logo" />
      </div>
      <div className={LoginCss.page_login_right}>
        {/* form wrapper */}
        <div className={LoginCss.login_form_wrapper}>
          {/* logo */}
          <img src={LogoImage} alt="Pioneer Alpha logo" />
          <p className={LoginCss.subtitle}>
            Courses are waiting for you... Hurry up!!
          </p>
          {/* login fields */}
          <div className={LoginCss.login_field}>
            <input
              className={LoginCss.login_input}
              type="text"
              placeholder="Name"
            />
            <input
              className={LoginCss.login_input}
              type="email"
              placeholder="Email Address"
            />
            <input
              className={LoginCss.login_input}
              type="tel"
              placeholder="Phone"
            />
            <input
              className={LoginCss.login_input}
              type="password"
              placeholder="Password"
            />
            <input
              className={LoginCss.submit_btn}
              type="button"
              value="LOG IN"
            />
          </div>

          <p className={LoginCss.account}>
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
