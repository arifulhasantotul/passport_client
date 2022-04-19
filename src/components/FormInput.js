import { useState } from "react";
import LoginCSS from "../pages/Login/Login.module.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <input
        className={LoginCSS.login_input}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className={LoginCSS.err_msg}>{errorMessage}</span>
    </>
  );
};

export default FormInput;
