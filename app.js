window.addEventListener('load', init);

// Game levels
const levels = {
	easy: 5,
	medium: 3,
	hard: 1
}

const currentLevel = levels.medium;

// GLOBAL VARIABLES
let time = currentLevel;
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
	//show number of seconds in UI
	seconds.innerHTML = currentLevel;

	//load a random from array
	showWord(words);

	//matching for word input with each keystroke
	wordInput.addEventListener('input', startWordMatch);

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

// Word matching
function startWordMatch() {
	if(matchWords()) {
		isPlaying = true;
		time = currentLevel + 1; //or, one above the initial time because we need to account for a page load
		wordInput.value = "";
		score++;
		showWord(words);
	}
	if(score === -1) {
		scoreDisplay.innerHTML = 0;
	} else {
		scoreDisplay.innerHTML = score;
	}
}

//match current word to wordInput
function matchWords() {
	if(wordInput.value === currentWord.innerHTML) {
		message.innerHTML = "Correct";
		return true
	} else {
		message.innerHTML = "";
		return false
	}
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
		score = -1;
	}
}
