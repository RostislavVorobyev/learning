import { useState } from "react";
import Comp from "./Comp";

export default function Outer() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter((x) => x + 1)}>Bom</button>
      <Comp></Comp>
    </div>
  );
}
