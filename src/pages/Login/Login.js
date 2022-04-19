import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as FcIcons from "react-icons/fc";
import { Link, Navigate } from "react-router-dom";
import LogoImage from "../../images/logo.svg";
import SideImage from "../../images/phone.svg";
import LoginCSS from "./Login.module.css";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = values;
    console.log(username, password);

    try {
      const url = process.env.REACT_APP_BACKEND_URL + `/auth/signing`;

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      console.log(data);
      if (data.success === true) {
        alert("Successfully logged in");
        e.target.reset();
        <Navigate to="/home" />;
      } else {
        alert("Plz try again");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const googleSignIn = () => {
    window.open(process.env.REACT_APP_BACKEND_URL + `/auth/google`, "_self");
  };
  const facebookSignIn = () => {
    window.open(process.env.REACT_APP_BACKEND_URL + `/auth/facebook`, "_self");
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
            <form method="POST" onSubmit={handleSubmit}>
              <input
                className={LoginCSS.login_input}
                type="email"
                name="username"
                placeholder="Email Address"
                onChange={onChange}
                required
              />
              <input
                className={LoginCSS.login_input}
                type="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
                required
              />
              <input
                className={LoginCSS.submit_btn}
                type="submit"
                value="SIGN IN"
              />
              <hr />
            </form>
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
