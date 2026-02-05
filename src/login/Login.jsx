import { useState } from "react";
import style from "./styles.module.css";
const Login = () => {
  // Create a simple login form:

  // Fields: email & password

  // Submit button

  // Display error if email is empty

  // On successful submit, show a “Welcome, [email]!” message
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleForm = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (user.email !== undefined) {
      setMessage(`Welcome ${user.email}`);
      setErrorMessage("");
    } else {
      setErrorMessage("Email Address is empty");
      setMessage("");
    }
  };
  return (
    <div className={style.main}>
      <h1>Login</h1>
      {message !== "" ? <p>{message}</p> : ""}
      <form className={style.form} action="">
        <input
          className={style.input}
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleForm}
        />
        <input
          className={style.input}
          name="password"
          type="text"
          placeholder="Password"
          onChange={handleForm}
        />
        <p style={{ color: "red" }}>{errorMessage}</p>
        <button
          style={{ color: "white", marginTop: "20px" }}
          onClick={submitForm}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
