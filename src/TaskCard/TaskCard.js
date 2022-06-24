import './index.css'

function TaskCard(props){

    if(props.showCard){
        return(
            <div className='centered-div task-card'>
                <input id="task-card-input" type="text" placeholder="What
                are you working on?"/>
                <span>Estimated Pomodoros</span>
            </div>
        )
    } else {
        return <div/>
    }

}

export default TaskCard;