import React from "react";
import * as BsIcons from "react-icons/bs";
import * as FcIcons from "react-icons/fc";
import LogoImage from "../../images/logo.svg";
import SideImage from "../../images/phone.svg";
import LoginCss from "./Login.module.css";

const Login = () => {
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
          <p className={LoginCss.subtitle}>Explore new courses... Hurry up!!</p>
          {/* login fields */}
          <div className={LoginCss.login_field}>
            <input
              className={LoginCss.login_input}
              type="email"
              placeholder="Email Address"
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
            <hr />
            <span className={LoginCss.or}>or</span>
          </div>

          <div className={LoginCss.third_party_login}>
            <span className={LoginCss.third_icon}>
              <BsIcons.BsFacebook className={LoginCss.blue} />
            </span>
            <span className={LoginCss.third_icon}>
              {" "}
              <FcIcons.FcGoogle />
            </span>
          </div>

          <p className={LoginCss.account}>
            Don't have an account? <strong>Sign Up</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
