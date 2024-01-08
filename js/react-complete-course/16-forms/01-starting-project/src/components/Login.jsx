import { useState, useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const [isValid, setIsValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = email.current.value;

    setIsValid(enteredEmail.includes("@"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">{!isValid && "Email is invalid!"}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={email} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
