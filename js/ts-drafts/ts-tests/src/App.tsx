import "./App.css";
import PropsPlaceholder from "./components/PropsPlaceholder";
import ReservedProps from "./components/ReservedProps";
import SimplePlaceholder from "./components/SimplePlaceholder";
import State from "./components/State";

function App() {
  return (
    <div className="App">
      <SimplePlaceholder></SimplePlaceholder>
      <PropsPlaceholder text={"Test"}></PropsPlaceholder>
      <ReservedProps key="ok">SDFsdF</ReservedProps>
      <State></State>
    </div>
  );
}

export default App;
