import React from "react";
import * as BsIcons from "react-icons/bs";
import * as FcIcons from "react-icons/fc";
import { Link } from "react-router-dom";
import LogoImage from "../../images/logo.svg";
import SideImage from "../../images/phone.svg";
import LoginCSS from "./Login.module.css";

const Login = () => {
  const googleSignIn = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const facebookSignIn = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };
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
          <p className={LoginCSS.subtitle}>Explore new courses... Hurry up!!</p>
          {/* login fields */}
          <div className={LoginCSS.login_field}>
            <input
              className={LoginCSS.login_input}
              type="email"
              placeholder="Email Address"
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
            <hr />
            <span className={LoginCSS.or}>or</span>
          </div>

          <div className={LoginCSS.third_party_login}>
            {/* facebook login */}
            <span className={LoginCSS.third_icon} onClick={facebookSignIn}>
              <BsIcons.BsFacebook className={LoginCSS.blue} />
            </span>
            {/* google sign in */}
            <span className={LoginCSS.third_icon} onClick={googleSignIn}>
              {" "}
              <FcIcons.FcGoogle />
            </span>
          </div>

          <p className={LoginCSS.account}>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
