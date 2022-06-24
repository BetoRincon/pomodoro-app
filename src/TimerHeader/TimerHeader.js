import React from "react";
import * as Constants from "../constants/constants";

function TimerContainer(props){
    const optionsMap = Constants.optionsMap;
    const itemActive = "timer-container-header-item active";
    const itemInactive = "timer-container-header-item";
    const listItems = Object.keys(optionsMap).map((option, index) =>
            <li key={index}
            className={index === 0 ? itemActive : itemInactive}
            onClick={onClick} >{option}</li>
    )

    function changeButtonStyles(option){
        const actionButton = document.getElementById('action-button');
        actionButton.classList = "";
        actionButton.classList.add(`${option}-active`);
    }

    function onClick(e){
        const target = e.target;
        const childNodes = target.parentNode.childNodes;
        const option = target.innerHTML;
        props.onChangeOption(optionsMap[option]);

        childNodes.forEach(element => {
            element.classList.remove('active');
        });
        target.classList.toggle('active');
        changeButtonStyles(option.toLowerCase()
        .replace(" ", "-"));
        document.body.style.backgroundColor = optionsMap[option].backgroundColor;
    }

    return(
        <ul className='timer-container-header'>
            {listItems}
        </ul>
    )
}
export default TimerContainer;