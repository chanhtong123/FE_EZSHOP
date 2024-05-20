import HEADER1 from "../components/h-e-a-d-e-r1";
import LoginFormContainer from "../components/login-form-container";
import FOOTER from "../components/f-o-o-t-e-r";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <HEADER1 />
      <LoginFormContainer />
      <FOOTER />
    </div>
  );
};

export default Login;
