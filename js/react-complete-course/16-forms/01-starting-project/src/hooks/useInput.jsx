import { useState } from "react";

export function useInput() {
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const [didEdit, setDidEdit] = useState(false);

  function handleInputChange(e) {
    setFormValue(e.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: true }));
  }
}
