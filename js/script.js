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
			colorOfMustache: undefined,
			professions: [
				"science",
				"history"
			],
			specialities: [
				undefined
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
			colorOfMustache: undefined,
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
			colorOfMustache: undefined,
			professions: [
				"technological",
				"investor"
			],
			specialities: [
				"founder of amazon"
			],
			awards: 3,
			nobels: 0,
			yearOfDeath: undefined
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
			colorOfMustache: undefined,
			professions: [
				"technological",
				"entrepreneur"
			],
			specialities: [
				"founder of microsoft"
			],
			awards: 9,
			nobels: 0,
			yearOfDeath: undefined
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
			colorOfMustache: undefined,
			professions: [
				"technological",
				"entrepreneur"
			],
			specialities: [
				"founder of facebook"
			],
			awards: 6,
			nobels: 0,
			yearOfDeath: undefined
		}
	},
	{
		name: 'Satya Nadella',
		features: {
			yearOfBirth: 1967,
			country: "india",
			sex: "m",
			colorOfHair: undefined,
			colorOfEyes: "black",
			colorOfMustache: undefined,
			professions: [
				"technological"
			],
			specialities: [
				"microsoft employer"
			],
			awards: 4,
			nobels: 0,
			yearOfDeath: undefined
		}
	},
	{
		name: 'Nikola Tesla',
		features: {
			yearOfBirth: 1856,
			country: "croatia",
			sex: "m",
			colorOfHair: "black",
			colorOfEyes: undefined,
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
			colorOfEyes: undefined,
			colorOfMustache: undefined,
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
			colorOfEyes: undefined,
			colorOfMustache: undefined,
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
			colorOfEyes: undefined,
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
			colorOfMustache: undefined,
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
			yearOfDeath: undefined
		}
	},
	{
		name: 'Leonardo da Vinci',
		features: {
			yearOfBirth: 1452,
			country: "italy",
			sex: "m",
			colorOfHair: "whie",
			colorOfEyes: "black",
			colorOfMustache: "white",
			professions: [
				"inventor",
				"artist"
			],
			specialities: [
				"ornitottero",
				"self-propelled wagon"
			],
			awards: 1,
			nobels: 0,
			yearOfDeath: 1519
		}
	},
	{
		name: 'Vincent Van Gogh',
		features: {
			yearOfBirth: 1853,
			country: "netherlands",
			sex: "m",
			colorOfHair: "blonde",
			colorOfEyes: undefined,
			colorOfMustache: "blonde",
			professions: [
				"artist"
			],
			specialities: [
				"la notte stellata"
			],
			awards: 0,
			nobels: 0,
			yearOfDeath: 1890
		}
	},
	{
		name: 'Frida Kahlo',
		features: {
			yearOfBirth: 1907,
			country: "mexico",
			sex: "f",
			colorOfHair: "black",
			colorOfEyes: undefined,
			colorOfMustache: undefined,
			professions: [
				"artist"
			],
			specialities: [
				"expression of freedom"
			],
			awards: 2,
			nobels: 0,
			yearOfDeath: 1954
		}
	},
	{
		name: 'Pablo Picasso',
		features: {
			yearOfBirth: 1881,
			country: "spain",
			sex: "m",
			colorOfHair: undefined,
			colorOfEyes: "brown",
			colorOfMustache: undefined,
			professions: [
				"artist"
			],
			specialities: [
				"periodo blu e rosa"
			],
			awards: 4,
			nobels: 0,
			yearOfDeath: 1973
		}
	},
	{
		name: 'Salvador Dali',
		features: {
			yearOfBirth: 1904,
			country: "spain",
			sex: "m",
			colorOfHair: "black",
			colorOfEyes: undefined,
			colorOfMustache: "black",
			professions: [
				"artist"
			],
			specialities: [
				"surrealista",
				"dadaista"
			],
			awards: 3,
			nobels: 0,
			yearOfDeath: 1989
		}
	},
	{
		name: 'Isaac Newton',
		features: {
			yearOfBirth: 1642,
			country: "uk",
			sex: "m",
			colorOfHair: "white",
			colorOfEyes: "green",
			colorOfMustache: undefined,
			professions: [
				"physic",
				"matematich"
			],
			specialities: [
				"gravity",
				"reflector telescope"
			],
			awards: 0,
			nobels: 0,
			yearOfDeath: 1726
		}
	},
	{
		name: 'Carl Friedrich Gauss',
		features: {
			yearOfBirth: 1777,
			country: "germany",
			sex: "m",
			colorOfHair: "blonde",
			colorOfEyes: "blue",
			colorOfMustache: undefined,
			professions: [
				"matematich"
			],
			specialities: [
				"eptadecagono",
				"modular arithmetic"
			],
			awards: 2,
			nobels: 0,
			yearOfDeath: 1855
		}
	},
	{
		name: 'Pitagora',
		features: {
			yearOfBirth: 575,
			country: "greece",
			sex: "m",
			colorOfHair: "white",
			colorOfEyes: undefined,
			colorOfMustache: "white",
			professions: [
				"physic",
				"matematich",
				"scientist"
			],
			specialities: [
				"geometry"
			],
			awards: 0,
			nobels: 0,
			yearOfDeath: 495
		}
	},
	{
		name: 'Archimede',
		features: {
			yearOfBirth: 287,
			country: "italy",
			sex: "m",
			colorOfHair: "white",
			colorOfEyes: "brown",
			colorOfMustache: "white",
			professions: [
				"physic",
				"matematich"
			],
			specialities: [
				"circle",
				"floating bodies"
			],
			awards: 0,
			nobels: 0,
			yearOfDeath: 212
		}
	},
	{
		name: 'Alan Turing',
		features: {
			yearOfBirth: 1912,
			country: "uk",
			sex: "m",
			colorOfHair: "brown",
			colorOfEyes: "blu",
			colorOfMustache: undefined,
			professions: [
				"physic",
				"matematich",
				"technological"
			],
			specialities: [
				"turing machine",
				"teoria della computazione"
			],
			awards: 0,
			nobels: 0,
			yearOfDeath: 1954
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
		"Evviva! Ho indovinato il personaggio che stavi pensando.",
		"Yay! Ho indovinato il personaggio!"
	],
	wrong: [
		"Mi dispiace, sembra che ci sia stato un errore nell'indovinare il personaggio.",
		"Ops! Non ho indovinato il personaggio, riprova!",
		"Peccato! Ho sbagliato, riprova!"
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
	console.log('CHARACTERS: ', remainingCharacters);
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
		console.log('SKIPPED QUESTIONS');
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