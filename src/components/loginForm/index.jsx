import { Link, useNavigate } from "react-router-dom";
import EyesClosed from "../../assets/svg/eyesClosed";
import CustomButton from "../customButton";
import "./index.scss";
import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [password, setPasword] = useState();

  return (
    <form
      className="login_form_inner"
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/dashboard/_");
      }}
    >
      <label htmlFor="">
        <p>Email Address</p>
        <input type="email" required />
      </label>
      <label htmlFor="">
        <p>Password</p>
        <div className="password_input">
          <input type={!password ? "password" : "text"} />
          <EyesClosed onClick={() => setPasword(!password)} />
        </div>
      </label>
      <div className="remember_forget">
        <p className="remember">
          <Toggle defaultChecked={true} icons={false} />
          <span>Remember me</span>
        </p>
        <Link style={{ color: "red", textDecoration: "none" }}>
          Recover Password
        </Link>
      </div>
      <CustomButton text="Log in" />
    </form>
  );
};
export default LoginForm;
