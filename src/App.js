import './App.css';
import Timer from './Timer/Timer.js'
import TaskCard from'./TaskCard/TaskCard.js'
import React, { useState } from 'react';
import * as Constants from "./constants/constants";


function App() {
  const [taskNumber, setTaskNumber] = useState(1);
  const [timeLabel, setTaskLabel] = useState("Time to focus!");
  const [showTimeCard, toggleTimeCard] = useState(false);

  function updateTimeLabel(option){
    setTaskLabel(option.label)
  }

  function updateTaskLabel(){
    if(!showTimeCard) {
      setTaskNumber(taskNumber + 1);
      toggleTimeCard(true);
    }
  }

  return (
    <div className="App">
      <div className='timer-container'>
        <Timer updateTimeLabel={updateTimeLabel}/>
      </div>
      <div className='centered-div task-header-container'>
        <p> # {taskNumber} </p>
        <p> {timeLabel} </p>
      </div>
      <div className='centered-div task-menu'>
        <h3> Tasks </h3>
      </div>
      <div className='centered-div add-task-button' onClick={updateTaskLabel}>
        <img src="plus-circle-white.png"></img>
        <p>Add Task</p>
      </div>
      <TaskCard showCard={showTimeCard}/>
    </div>
  );
}

export default App;
