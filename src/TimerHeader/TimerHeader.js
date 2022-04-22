import React from "react";

function TimerContainer(props){
    const options = ['Pomodoro', 'Short Break', 'Long Break'];
    const itemActive = "timer-container-header-item active";
    const itemInactive = "timer-container-header-item";
    const listItems = options.map((option, index) =>
            <li key={index}
            className={index === 0 ? itemActive : itemInactive}
            onClick={onClick} >{option}</li>
    )
    function onClick(e){
        const target = e.target;
        const childNodes = e.target.parentNode.childNodes;
        childNodes.forEach(element => {
            element.classList.remove('active');
        });
        target.classList.toggle('active');
        if(e.target.innerHTML === 'Short Break'){
            return document.body.style.backgroundColor = '#4d9095';
        }
        if(e.target.innerHTML === 'Pomodoro'){
            return document.body.style.backgroundColor = '#d9564f';
        }
        document.body.style.backgroundColor = '#447ca2';
    }

    return(
        <ul className='timer-container-header'>
            {listItems}
        </ul>
    )
}
export default TimerContainer;