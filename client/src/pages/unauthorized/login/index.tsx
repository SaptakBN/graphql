import { LoginForm, RegistrationForm } from "@/components";
import styles from "./login.module.css";

const Login = () => {
  return (
    <main className={styles.loginLayout}>
      <div className={styles.main}>
        <input type="checkbox" id="chk" aria-hidden="true" />
        <RegistrationForm />
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
