var timer = new Date();
timer.setMinutes(24,10,0)
console.log(timer.getMinutes() + ":"+ timer.getSeconds())
timer.setMilliseconds(timer.getMilliseconds() - 1000);
console.log(timer.getMinutes() + ":"+ timer.getSeconds())
timer.setMilliseconds(timer.getMilliseconds() - 1000);
console.log(timer.getMinutes() + ":"+ timer.getSeconds())
timer.setMilliseconds(timer.getMilliseconds() - 1000);

var intervalId = setInterval(()=>{
        timer.setMilliseconds(timer.getMilliseconds() - 1000);
        console.log(timer.getMinutes() + ":"+ timer.getSeconds())
        if(timer.getSeconds() === 0 ){
            console.log(true)
            clearInterval(intervalId)
        }
    },1000)

