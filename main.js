let timerInterval;

let day = 0;

let hours = 0 ;

let minutes = 0;

let seconds = 0;

function updateTimer(){
    seconds++
    if(seconds === 60){
        seconds  = 0
        minutes++
    }
    if(minutes === 60){
        minutes = 0;
        hours++
    }
    if(hours === 24){
        hours = 0
        day++
    }

    // the function of the below code is to make sure the hours and miuntes and seconds is correct format eg 00:00:00
    const formattedTime = formatTime(day)+ ":" + formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds)
    document.getElementById("timer").textContent = formattedTime;

    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }
}

// 
function startTimer(){
    timerInterval = setInterval(updateTimer, 1000)
    //when i will click the start button, thw start button is set to be disabled sinced the value of disabled is true
    document.getElementById("Start").disabled = true
}

function stopTimer(){
    //stop the time
    clearInterval(timerInterval);
    // the start button is working and not disabled 
    document.getElementById("Start").disabled = false;
}

function resetTimer(){
    //stops the time
    clearInterval(timerInterval);
    day = 0
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimer();
    document.getElementById("Start").disabled = false
}

// when user loads the window the timer atomatically starts
window.addEventListener("load", startTimer);

document.getElementById("Start").addEventListener("click", startTimer);
document.getElementById("Stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

