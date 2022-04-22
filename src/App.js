import './App.css';
import Timer from './Timer/Timer.js'
import TimerHeader from './TimerHeader/TimerHeader.js';

function App() {
  return (
    <div className="App">
      <div className='timer-container'>
        <TimerHeader/>
        <Timer/>
      </div>

    </div>
  );
}

export default App;
