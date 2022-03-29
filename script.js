//global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const maxLength = 8;
const min = 1;
const max = 5;

//Global Variables
let clueHoldTime = null;
var timeLeft = null;
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
let playerMistakes = null;

function startGame() {
  //initialize game variable
  clueHoldTime = 1000;
  progress = 0;
  playerMistakes = 0;
  gamePlaying = true;
  fillPatternArray();
  document.getElementById("guesses").innerHTML = playerMistakes;
  //Swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  pattern = [];
  document.getElementById("guesses").innerHTML = 0;
  document.getElementById("countdown").innerHTMLL = 15;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// sound synthesis functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 431.4,
  6: 453.2
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  timeLeft = 15;
  document.getElementById("countdown").innerHTML = timeLeft;
  
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    clueHoldTime -= 25;
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  let audio = new Audio(document.getElementById("loser").src);
  audio.play();
  alert("Game Over. You lost.");
  
}

function winGame(){
  stopGame();
  let audio = new Audio(document.getElementById("winner").src);
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
 if (btn === pattern[guessCounter]) {
    if (guessCounter < progress) {
      guessCounter++;
    } else {
      if (guessCounter < pattern.length - 1) {
        progress++;
        playClueSequence();
      } else {
        winGame();
      }
    }
  } else {
    if (playerMistakes < 2) {
      ++playerMistakes;
      document.getElementById("guesses").innerHTML = playerMistakes;


      if (guessCounter < pattern.length - 1) {
        playClueSequence();
      }
    } else {
      loseGame();
    }
  }
}

function fillPatternArray() {
  for (let i = 0; i < maxLength; i++) {
    pattern.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
}

