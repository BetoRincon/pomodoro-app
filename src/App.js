import logo from './logo.svg';
import './App.css';
import Timer from './Timer/Timer.js'

function App() {
  return (
    <div className="App">
      <div className='timer-container'>
        <h1>Pomodoro Timer  </h1>
        <Timer name="1"/>
      </div>

      {/* <div className='timer-container'>
        <h1>Pomodoro Timer  </h1>
        <Timer name="2"/>
      </div> */}

    </div>
  );
}

export default App;
