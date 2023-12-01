import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState('')

  const playerNameInput = useRef()

  const handleClick = function (){
    setPlayerName(playerNameInput.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerNameInput} type="text" />
        <button onClick = {handleClick}>Set Name</button>
      </p>
    </section>
  );
}
