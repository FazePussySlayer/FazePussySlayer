var lowCounter = 0;
var highCounter = 0;
var rotTrialNum = 0;
var colTrialNum = 0;
var rotArray = [];
var startTimerButton = document.querySelector('.startTimer');
var pauseTimerButton = document.querySelector('.pauseTimer');
var timerDisplay = document.querySelector('.timer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;
var holdTime;
function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1); 
    paused = 0;
    running = 1;
    timerDisplay.style.cursor = "auto";
    timerDisplay.style.color = "black";
    startTimerButton.classList.add('lighter');
    startTimerButton.style.cursor = "auto";
    pauseTimerButton.style.cursor = "pointer";
  }
}
function pauseTimer(){
  if (!difference){
    // if timer never started, don't allow pause button to do anything
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    timerDisplay.style.cursor = "pointer";
    startTimerButton.classList.remove('lighter');
    pauseTimerButton.classList.add('lighter');
    startTimerButton.style.cursor = "pointer";
    pauseTimerButton.style.cursor = "auto";
  } 
}
function resetTimer(){
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  timerDisplay.innerHTML = 'Start Timer!';
  timerDisplay.style.color = "#fff";
  timerDisplay.style.cursor = "pointer";
  startTimerButton.classList.remove('lighter');
  pauseTimerButton.classList.remove('lighter');
  startTimerButton.style.cursor = "pointer";
  pauseTimerButton.style.cursor = "auto";
}
function getShowTime(){
  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);
//hours = (hours < 10) ? "0" + hours : hours;
  //minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  holdTime = seconds + ':' + milliseconds;
  timerDisplay.innerHTML = holdTime;    
}

function decreaseLow(){ 
    if (lowCounter != 0) {
            document.getElementById("low").innerHTML = --lowCounter;
        }
}
function increaseLow(){
    document.getElementById("low").innerHTML = ++lowCounter;
}
function decreaseHigh() {  
    if(highCounter != 0)
        {
            document.getElementById("high").innerHTML = --highCounter;
        }
}
function increaseHigh(){
    document.getElementById("high").innerHTML = ++highCounter;
}
function startRotTrial(){
    document.getElementById("rotTrialNum").innerHTML = ++rotTrialNum;
    startTimer();
}
function stopRotTrial(){
    pauseTimer();
}
function startColTrial()
{
    document.getElementById("colTrialNum").innerHTML = ++colTrialNum;
    startTimer();
}
function stopColTrial()
{
    pauseTimer();
}

