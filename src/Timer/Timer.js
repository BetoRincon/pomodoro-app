import React from 'react'
import TimerHeader from '../TimerHeader/TimerHeader.js';

class Timer extends React.Component{

    constructor(props){
        console.log('constructor')
        super(props);
        this.state = {
            timer: new Date(),
            buttonLabel: 'Start',
            isTimerRunning: false,
            startTime: 25
        }
        this.formattingTimerOutput();
        this.onClickButton = this.onClickButton.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.initTimer(this.state.startTime);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    initTimer(startTime){
        let formattedTimer = new Date();
        formattedTimer.setMinutes(startTime,0,0);
        this.setState({
            timer: formattedTimer,
        })
    }

    formattingTimerOutput(){
        // eslint-disable-next-line no-extend-native
        Date.prototype.toString =  () => {
            let minutes = this.state.timer.getMinutes()/10 < 1 ?
            `0${this.state.timer.getMinutes()}` :
            this.state.timer.getMinutes();
            let seconds = this.state.timer.getSeconds()/10 < 1 ?
            `0${this.state.timer.getSeconds()}` :
            this.state.timer.getSeconds();
            return `${minutes}:${seconds}`;
        }
    }

    getIntervalId(){
        return setInterval(()=> {
            let time = new Date(this.state.timer.getTime() - 1000);
            this.setState({
                timer: time
            });
            if(time.getMinutes() === 0 && time.getSeconds() === 0){
                this.onResetTimer();
            }
        },1000)
    }

    onStartTimer(){
        console.log('Starting Timer')
        this.setState({
            buttonLabel: 'Pause',
            isTimerRunning: true
        });
        this.intervalId = this.getIntervalId();
    }

    onPauseTimer(){
        console.log('Pausing Timer')
        clearInterval(this.intervalId)
        this.setState({
            buttonLabel: 'Resume',
            isTimerRunning: false
        });
    }

    onResetTimer(){
        clearInterval(this.intervalId);
        this.initTimer();
        this.setState({
            buttonLabel: 'Start',
            isTimerRunning: false
        });
    }

    onClickButton(e){
        if(this.state.isTimerRunning){
            return this.onPauseTimer();
        }
        this.onStartTimer();
    }

    handleOptionChange(option){
        this.props.updateTimeLabel(option);
        this.setState({
            startTime: option.time
        }
        )
        this.initTimer(option.time);
    }

    render(){
        return(
            <div className='timer-box'>
                <TimerHeader onChangeOption={this.handleOptionChange}/>
                <h1>{this.props.name}</h1>
                <h1 className='timer-label'>{this.state.timer.toString()}</h1>
                <button id='action-button' onClick={this.onClickButton}>{this.state.buttonLabel}</button>
            </div>

        )
    }
}

export default Timer;