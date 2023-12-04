import { useState } from "react";

export default function ConfigureCounter({ onSetCount }) {
  const [enteredNumber, setEnteredNumber] = useState(0);

  function handleSetClick() {
    onSetCount(enteredNumber);
    setEnteredNumber(0);
  }

  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
}
