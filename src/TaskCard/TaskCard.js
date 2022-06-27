import './index.css'

function TaskCard(props){

    function toggleTaskCard(){
        props.onToggleTaskCard(false);
    }

    if(props.showCard){
        return(
            <div className='centered-div task-card'>
                <input id="task-card-input" type="text" placeholder="What
                are you working on?"/>
                <span>Estimated Pomodoros</span>
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