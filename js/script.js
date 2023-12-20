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
			colorOfMustache: undefined,
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
	},
	{
		name: 'Jane Goodall',
		features: {
			yearOfBirth: 1934,
			country: "england",
			sex: "f",
			colorOfHair: "grey",
			colorOfEyes: "brown",
			colorOfMustache: undefined,
			professions: [
				"primatologist",
				"ethologist",
				"anthropologist"
			],
			specialities: [
				"primate reserch"
			],
			awards: 5,
			nobels: 0,
			yearOfDeath: undefined
		}
	},
	{
		name: 'Rosalind Franklin',
		features: {
			yearOfBirth: 1920,
			country: "uk",
			sex: "f",
			colorOfHair: "brown",
			colorOfEyes: undefined,
			colorOfMustache: undefined,
			professions: [
				"chemist",
				"crystallographer"
			],
			specialities: [
				"dna structur"
			],
			awards: 0,
			nobels: 0,
			yearOfDeath: 1958
		}
	},
	{
		name: 'Piero Angela',
		features: {
			yearOfBirth: 1928,
			country: "italy",
			sex: "m",
			colorOfHair: "grey",
			colorOfEyes: "blue",
			colorOfMustache: "",
			professions: [
				"science",
				"history"
			],
			specialities: [
				""
			],
			awards: 1,
			nobels: 0,
			yearOfDeath: 2022
		}
	},
	{
		name: 'Steve Jobs',
		features: {
			yearOfBirth: 1955,
			country: "usa",
			sex: "m",
			colorOfHair: "grey",
			colorOfEyes: "brown",
			colorOfMustache: "",
			professions: [
				"technological",
				"entrepreneur"
			],
			specialities: [
				"cellphone producer"
			],
			awards: 4,
			nobels: 0,
			yearOfDeath: 2011
		}
	},
	{
		name: 'Jeff bezos',
		features: {
			yearOfBirth: 1964,
			country: "usa",
			sex: "m",
			colorOfHair: "bald",
			colorOfEyes: "brown",
			colorOfMustache: "",
			professions: [
				"technological",
				"investor"
			],
			specialities: [
				"founder of amazon"
			],
			awards: 3,
			nobels: 0,
			yearOfDeath: -1
		}
	},
	{
		name: 'Bill Gates',
		features: {
			yearOfBirth: 1955,
			country: "usa",
			sex: "m",
			colorOfHair: "white",
			colorOfEyes: "blue",
			colorOfMustache: "",
			professions: [
				"technological",
				"entrepreneur"
			],
			specialities: [
				"founder of microsoft"
			],
			awards: 9,
			nobels: 0,
			yearOfDeath: -1
		}
	},
	{
		name: 'Mark Zuckerberg',
		features: {
			yearOfBirth: 1984,
			country: "usa",
			sex: "m",
			colorOfHair: "blonde",
			colorOfEyes: "blue",
			colorOfMustache: "",
			professions: [
				"technological",
				"entrepreneur"
			],
			specialities: [
				"founder of facebook"
			],
			awards: 6,
			nobels: 0,
			yearOfDeath: -1
		}
	},
	{
		name: 'Satya Nadella',
		features: {
			yearOfBirth: 1967,
			country: "india",
			sex: "m",
			colorOfHair: "",
			colorOfEyes: "black",
			colorOfMustache: "",
			professions: [
				"technological"
			],
			specialities: [
				"microsoft employer"
			],
			awards: 4,
			nobels: 0,
			yearOfDeath: -1
		}
	},
	{
		name: 'Nikola Tesla',
		features: {
			yearOfBirth: 1856,
			country: "croatia",
			sex: "m",
			colorOfHair: "black",
			colorOfEyes: "",
			colorOfMustache: "black",
			professions: [
				"inventor",
				"physicist",
				"engineer"
			],
			specialities: [
				"basic eletrical system"
			],
			awards: 4,
			nobels: 0,
			yearOfDeath: 1943
		}
	},
	{
		name: 'Thomas Edison',
		features: {
			yearOfBirth: 1847,
			country: "italy",
			sex: "m",
			colorOfHair: "white",
			colorOfEyes: "",
			colorOfMustache: "",
			professions: [
				"inventor"
			],
			specialities: [
				"telegraph"
			],
			awards: 12,
			nobels: 0,
			yearOfDeath: 1931
		}
	},
	{
		name: 'Henry Ford',
		features: {
			yearOfBirth: 1863,
			country: "usa",
			sex: "m",
			colorOfHair: "white",
			colorOfEyes: "",
			colorOfMustache: "",
			professions: [
				"entrepreneur"
			],
			specialities: [
				"assembly line"
			],
			awards: 3,
			nobels: 0,
			yearOfDeath: 1947
		}
	},
	{
		name: 'Isambard Kingdom Brunel',
		features: {
			yearOfBirth: 1806,
			country: "uk",
			sex: "m",
			colorOfHair: "black",
			colorOfEyes: "",
			colorOfMustache: "black",
			professions: [
				"engineer"
			],
			specialities: [
				"great eastern"
			],
			awards: 0,
			nobels: 0,
			yearOfDeath: 1859
		}
	},
	{
		name: 'Elon Musk',
		features: {
			yearOfBirth: 1971,
			country: "sudafrica",
			sex: "m",
			colorOfHair: "brown",
			colorOfEyes: "blue",
			colorOfMustache: "",
			professions: [
				"inventor",
				"entrepreneur"
			],
			specialities: [
				"tesla",
				"space X"
			],
			awards: 5,
			nobels: 0,
			yearOfDeath: -1
		}
	},
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
var genieImage = null;
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
		return evaluateExpression(expression, character.features, answerValue);
	});
}

function evaluateExpression(expression, features, answerValue) {
	const [feature, operator, val] = expression.split(' ');
	const featureValue = features[feature];
	var resultValue = undefined;

	if (featureValue === undefined) {
		return true;
	}

	// Funzione per verificare se un valore è presente in un array
	const arrayContainsValue = (arr, value) => Array.isArray(arr) && arr.includes(value);

	switch (operator) {
		case '<':
			resultValue = parseFloat(featureValue) < parseFloat(val);
			break;
		case '>':
			resultValue = parseFloat(featureValue) > parseFloat(val);
			break;
		case '<=':
			resultValue = parseFloat(featureValue) <= parseFloat(val);
			break;
		case '>=':
			resultValue = parseFloat(featureValue) >= parseFloat(val);
			break;
		case '!=':
			resultValue = featureValue != val && !arrayContainsValue(featureValue, val);
			break;
		case '==':
			if (Array.isArray(featureValue)) {
				resultValue = arrayContainsValue(featureValue, val);
			} else {
				resultValue = featureValue == val;
			}
			break;
		default:
			resultValue = false;
	}

	return resultValue == answerValue;
}

function askConfirmation(character) {
	questionText.textContent = 'La persona a cui stai pensando è: ' + character.name + '?';
	genieImage.src = "img/confused-genie.png"

	// Assegna event listener ad ogni pulsante
	setButtonListeners(function() { resultOfTheGuess(true) }, function() { resultOfTheGuess(false) }, null);
}

function resultOfTheGuess(guessed) {
	var answers = null;

	if (guessed) {
		answers = finalAnswers.right;
		genieImage.src = "img/happy-genie.png"
	}
	else {
		answers = finalAnswers.wrong;
		genieImage.src = "img/sad-genie.png"
	}

	// Scegli una risposta a caso dalla lista delle risposta
	const randomIndex = Math.floor(Math.random() * answers.length);
	questionText.textContent = answers[randomIndex];

	setButtonsForNextGame();
}

// Funzione per impostare la visibilità dei pulsanti
function setButtonVisibility(yesVisible, noVisible, resetVisible) {
	yesButton.style.display = yesVisible ? 'block' : 'none';
	noButton.style.display = noVisible ? 'block' : 'none';
	resetButton.style.display = resetVisible ? 'block' : 'none';
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
	genieImage.src = "img/idle-genie.png"

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
	genieImage = document.getElementById('genie-image');
	yesButton = document.getElementById('yes-button');
	noButton = document.getElementById('no-button');
	resetButton = document.getElementById('reset-button');

	// Aggiungi event listener ad ogni pulsante
	setButtonListeners(handleYesAnswer, handleNoAnswer, handleResetAnswer);

	akinator();
}