//Global constants
var mistakes;
var clueHoldTime = 1000;  // how long to hold each clue's light/sound
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Global Variables
var pattern = [];
for (var i=1, t=8; i<t; i++) {
    pattern.push(Math.round(Math.random() * t))
}
document.write(pattern);
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

const timeH = document.querySelector('h1');
var timeSecond;


function displayTime(second){
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `${min<10 ? '0':''}${min}:${sec<10?'0':''}${sec}`
}    
function time(){
  timeSecond=100;
displayTime(timeSecond);
const countDown =  setInterval(()=>{
  timeSecond--;
  displayTime(timeSecond);
  if(timeSecond <=0 || timeSecond<1){
    endTime();
    stopGame();
    clearInterval(countDown);
    
  }
},1000)
}                                


function endTime(){
  timeH.innerHTML = '00:00';
  
}

function startGame()
{
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  document.getElementById("mistake").style.background="lightgreen";
  mistakes = 3;
  document.getElementById("mistake").innerText = `${mistakes} tries Left!`;
  
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  time();
}


function stopGame()
{
  gamePlaying = false;
  timeSecond=0;
  clueHoldTime=1000;

  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}



// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 250.0,
  6: 260.0,
  7: 300.0,
  8: 310.0
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}



// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function playSingleClue(btn){
  if (gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence()
{ guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i = 0;i<=progress; i++){ //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + "in "+ delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) //set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
   }
  clueHoldTime=clueHoldTime-100;
 
 
}


function loseGame()
{
  stopGame();
  

  alert("Game Over. You Lost!");
}
function winGame()
{
  stopGame();
  endTime();
  alert("Congrats!!!. You Won!");
  
}
function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
   
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
         winGame();
      }else{
        
        progress++;
        
        playClueSequence();
        
       
      }
      time();
    }else{
      
      guessCounter++;
    }
  }else{
    mistakes-=1;
    document.getElementById("mistake").style.background="pink";
    document.getElementById("mistake").innerText = `${mistakes} tries Left!`;
    
    if (mistakes==0)
      {
    loseGame();
      }
   
    else
      alert("Try again!")
  }
}   
