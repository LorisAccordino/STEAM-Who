// Inizializzazione delle variabili
const characters = [
	{
		name: 'Albert Einstein',
		features: {
			yearOfBirth: 1879,
			country: "germany",
			sex: "m",
			colorOfHair: "white",
			colorOfEyes: "brown",
			colorOfMustache: "grey",
			professions: [
				"physicist"
			],
			specialities: [
				"relativity"
			],
			awards: 7,
			nobels: 1,
			yearOfDeath: 1955
		}
	},
	{
		name: 'Marie Curie',
		features: {
			yearOfBirth: 1867,
			country: "poland",
			sex: "f",
			colorOfHair: "blonde",
			colorOfEyes: "brown",
			colorOfMustache: "",
			professions: [
				"physicist",
				"chemist"
			],
			specialities: [
				"radio",
				"polonium",
				"x-ray"
			],
			awards: 2,
			nobels: 2,
			yearOfDeath: 1934
		}
	}
];

const questions = [
	{
		question: 'Il tuo personaggio è un fisico?',
		answer: {
			expression: "professions == physicist"
		}
	},
	{
		question: 'Il tuo personaggio è un chimico?',
		answer: {
			expression: "professions == chemist"
		}
	},
	{
		question: 'Il tuo personaggio è un maschio?',
		answer: {
			expression: "sex == m"
		}
	},
	{
		question: 'Il tuo personaggio è morto prima del 1950?',
		answer: {
			expression: "yearOfDeath < 1950"
		}
	}
]

const finalAnswers = {
	right: [
		"Congratulazioni! Ho indovinato il personaggio che stavi pensando.",
		"Esatto! È il personaggio che stavi pensando.",
		"Yay! Ho indovinato il personaggio!"
	],
	wrong: [
		"Mi dispiace, sembra che ci sia stato un errore nell'indovinare il personaggio.",
		"Ops! Non ho indovinato correttamente il personaggio.",
		"Peccato! Non è il personaggio che stavi pensando."
	]
}

var questionText = null;
var yesButton = null;
var noButton = null;
var resetButton = null;

var remainingCharacters = null;
var remainingQuestions = null;
var selectedQuestion = null;

var handleYesAnswer = function() {};
var handleNoAnswer = function() {};
var handleResetAnswer = function() {};





function nextQuestion() {

	// Verifica se non ci sono più personaggi, secondo i filtri
	if (remainingCharacters.length === 0) {
		resultOfTheGuess(false);
		return;
	}

	// Verifica se il personaggio "potrebbe" essere stato indovinato
	if (remainingQuestions.length === 0 || remainingCharacters.length === 1) {
		askConfirmation(remainingCharacters[0]);
		return;
	}

	// Scegli una domanda a caso dalla lista delle domande
	const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
	selectedQuestion = remainingQuestions[randomIndex];

	// Visualizza la domanda nell'interfaccia utente
	questionText.innerHTML = selectedQuestion.question;

	// Rimuovi la domanda utilizzata dalla lista delle domande
	remainingQuestions = remainingQuestions.filter(item => item !== selectedQuestion);
}

function processAnswer(expression, answer) {
	// Filtra i personaggi, in base alla risposta
	remainingCharacters = filterCharacters(expression, answer);
	nextQuestion();
}

function filterCharacters(expression, answerValue) {
	return remainingCharacters.filter(character => {
		return evaluateExpression(expression, character.features) == answerValue;
	});
}

function evaluateExpression(expression, features) {
	const [feature, operator, val] = expression.split(' ');
	const featureValue = features[feature];

	// Funzione per verificare se un valore è presente in un array
	const arrayContainsValue = (arr, value) => Array.isArray(arr) && arr.includes(value);

	switch (operator) {
		case '<':
			return parseFloat(featureValue) < parseFloat(val);
		case '>':
			return parseFloat(featureValue) > parseFloat(val);
		case '<=':
			return parseFloat(featureValue) <= parseFloat(val);
		case '>=':
			return parseFloat(featureValue) >= parseFloat(val);
		case '!=':
			return featureValue != val && !arrayContainsValue(featureValue, val);
		case '==':
			if (Array.isArray(featureValue)) {
				return arrayContainsValue(featureValue, val);
			} else {
				return featureValue == val;
			}
		default:
			return false;
	}
}

function askConfirmation(character) {
	questionText.textContent = 'La persona a cui stai pensando è: ' + character.name + '?';

	// Assegna event listener ad ogni pulsante
	setButtonListeners(function() { resultOfTheGuess(true) }, function() { resultOfTheGuess(false) }, null);
}

function resultOfTheGuess(guessed) {
	var answers = null;

	if (guessed) {
		answers = finalAnswers.right;
	}
	else {
		answers = finalAnswers.wrong;
	}

	// Scegli una risposta a caso dalla lista delle risposta
	const randomIndex = Math.floor(Math.random() * answers.length);
	questionText.textContent = answers[randomIndex];

	setButtonsForNextGame();
}

// Funzione per impostare la visibilità dei pulsanti
function setButtonVisibility(yesVisible, noVisible, resetVisible) {
	yesButton.style.visibility = yesVisible ? 'visible' : 'hidden';
	noButton.style.visibility = noVisible ? 'visible' : 'hidden';
	resetButton.style.visibility = resetVisible ? 'visible' : 'hidden';
}

// Funzione per impostare le callback (listener) dei pulsanti
function setButtonListeners(yesBtnListener, noBtnListener, resetBtnListener) {
	handleYesAnswer = updateListenerSafe(yesButton, 'click', handleYesAnswer, yesBtnListener);
	handleNoAnswer = updateListenerSafe(noButton, 'click', handleNoAnswer, noBtnListener);
	handleResetAnswer = updateListenerSafe(resetButton, 'click', handleResetAnswer, resetBtnListener)
}

function setButtonsForNextGame() {
	// Modifica la visibilità dei pulsanti
	setButtonVisibility(false, false, true);

	// Assegna event listener ad ogni pulsante
	setButtonListeners(null, null, akinator);
}


function updateListenerSafe(element, event, oldCallback, newCallback) {
	if (element && oldCallback && typeof oldCallback === 'function') {
		element.removeEventListener(event, oldCallback);
	}
	
	if (element && newCallback && typeof newCallback === 'function') {
		element.addEventListener(event, newCallback);
	}

	return newCallback;
}

function akinator() {
	remainingCharacters = characters;
	remainingQuestions = questions;

	// Modifica la visibilità dei pulsanti
	setButtonVisibility(true, true, false);

	// Assegna event listener ad ogni pulsante
	setButtonListeners(function() { processAnswer(selectedQuestion.answer.expression, true); }, function() { processAnswer(selectedQuestion.answer.expression, false); }, null);

	// Inizia le domande
	nextQuestion();
}

// Avvio del gioco
window.onload = function() {
	questionText = document.getElementById('question-text');
	yesButton = document.getElementById('yes-button');
	noButton = document.getElementById('no-button');
	resetButton = document.getElementById('reset-button');

	// Aggiungi event listener ad ogni pulsante
	setButtonListeners(handleYesAnswer, handleNoAnswer, handleResetAnswer);

	akinator();
}