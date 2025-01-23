import { LoginForm, RegistrationForm } from "@/components";
import "./login.css";

const Login = () => {
  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <RegistrationForm />
      <LoginForm />
    </div>
  );
};

export default Login;
