window.addEventListener('load', init);

// GLOBAL VARIABLES
let time = 5;
let score = 0;
let isPlaying;

//DOM element variables
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
	'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

//initialize game
function init() {
	//load a random from array
	showWord(words);

	//call countdown every second
	setInterval(countdown, 1000);

	//check game status
	setInterval(checkGameStatus, 50);
}

//Pick and show random word
function showWord(words) {
	const randIndex = Math.floor(Math.random() * words.length);
	currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown() {
	if(time > 0) {
		//decrement the timer
		time--;
	} else if(time === 0) {
		isPlaying = false;
	}

	timeDisplay.innerHTML = time;
}

function checkGameStatus() {
	if(!isPlaying && time === 0) {
		message.innerHTML = "Game Over!"
	}
}
