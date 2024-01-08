import { useState } from "react";
import ValidateInput from "./ValidateInput";

export default function StateLogin() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const emailIsInvalid = didEdit.email != "" && !formValues.email.includes("@");

  function handleInputChange(identifier, value) {
    console.log(value);
    setFormValues((prev) => ({ ...prev, [identifier]: value }));
    setDidEdit((prev) => ({ ...prev, [identifier]: false }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("aa");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <ValidateInput
          label="Email"
          id="email"
          name="email"
          type="email"
          onChange={(e) => handleInputChange(e.target.id, e.target.value)}
          value={formValues.email}
        />

        <ValidateInput
          label="Password"
          id="password"
          name="password"
          onChange={(e) => handleInputChange(e.target.id, e.target.value)}
          value={formValues.email}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
