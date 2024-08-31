import "./index.scss";
import leftBg from "../../assets/png/left-section.png";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/svg/arrowLeft";
import CustomButton from "../../components/customButton";
import googleIcon from "../../assets/png/google.png";
import continueImage from "../../assets/png/continue.png";
import LoginForm from "../../components/loginForm";

const Login = () => {
  return (
    <div className="login">
      <div className="login_left">
        <img src={leftBg} alt="" />
      </div>
      <div className="login_right">
        <div className="header">
          <Link to={""}>
            <ArrowLeft /> <span>Home</span>{" "}
          </Link>
          <CustomButton
            text="Sign Up"
            onClick={() => {}}
            style={{ width: "fit-content" }}
          />
        </div>
        <div className="login_form">
          <h1>Login</h1>
          <button className="google_button">
            <img src={googleIcon} alt="" />
            <span>Login with Google</span>
          </button>
          <img src={continueImage} alt="" className="continue_line" />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
