import React from "react";
import SideImage from "../../images/phone.svg";
import LoginCss from "./Login.module.css";

const Login = () => {
  return (
    <div className={LoginCss.page_wrapper_login}>
      {/* left side of the login page */}
      <div className={LoginCss.page_login_left}>
        <img className={LoginCss.left_logo} src={SideImage} alt="login logo" />
      </div>
      <div className={LoginCss.page_login_right}>div</div>
    </div>
  );
};

export default Login;
