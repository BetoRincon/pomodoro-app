import React, { useState } from 'react'
import './index.css'

function TaskCard(props){
    const [estPomodoros, setEstPomodoros] = useState(1);
    function toggleTaskCard(){
        props.onToggleTaskCard(false);
    }

    function onChangeInput(e){
        console.log('change input => ', e);
        console.log(e.target.value)
        setEstPomodoros(e.target.value);
    }

    function changeInput(value, event){
        console.log("value changed => ", value);
        setEstPomodoros(value);
        document.getElementById('input-estimated-pomodoros').value = value;
    }

    if(props.showCard){
        return(
            <div className='centered-div task-card'>
                <input id="task-card-input" type="text" placeholder="What
                are you working on?"/>
                <div id="estimated-pomodoros">
                    <span>Est Pomodoros</span>
                    <div id="estimated-pomodoros-buttons-holders">
                        <input id='input-estimated-pomodoros' type='number' min='0' step='1' onChange={onChangeInput}/>
                        <button onClick={(e) => changeInput(Number(estPomodoros)+1, e)}>
                            <img alt="caret" className='img-button' src="/caret-up.png"></img>
                        </button>
                        <button>
                            <img alt="caret" className='img-button' src="/caret-down.png"></img>
                        </button>
                    </div>
                </div>
                <div id='buttons-holder'>
                    <button id="bt-cancel-task" onClick={toggleTaskCard}>Cancel</button>
                    <button id="bt-save-task" >Save</button>
                </div>
            </div>
        )
    } else {
        return <div/>
    }

}

export default TaskCard;