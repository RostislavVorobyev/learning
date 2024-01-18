import { useState } from "react";

const State: React.FC = () => {
  const [name, setName] = useState("");
  //not do so --- incorrect type interfere
  //   const [names, setNames] = useState([]);

  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>boys</h3>
      <ul>
        {guests.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default State;
