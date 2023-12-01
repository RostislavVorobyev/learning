import Player from './components/Player.jsx';
import TimerChallenge from './components/TImerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="modal"></div>
      <div id="challenges">
        <TimerChallenge title="My challenge" targetTime="1"></TimerChallenge>
      </div>
    </>
  );
}

export default App;
