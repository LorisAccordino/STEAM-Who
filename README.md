# STEAM Who
Un quiz stile Akinator circa alcuni importanti personaggi STEAM

# Idea e analisi
Work in progress...

## Funzionamento
Lo script JavaScript implementa un algoritmo di filtraggio progressivo che utilizza domande a risposta sì/no per eliminare progressivamente le opzioni non corrette. Di seguito è fornito un pseudocodice che rappresenta il funzionamento logico dello script:

```javascript
// Inizializzazione dei personaggi famosi
const characters = [/* Array di 20 personaggi famosi */];

function akinator() {
    let currentCharacter = characters; // Inizialmente tutti i personaggi sono opzioni valide

    while (currentCharacter.length > 1) {
        const question = generateQuestion(); // Genera la domanda da porre all'utente

        const answer = getAnswer(question); // Ottieni la risposta dell'utente (sì/no)

        currentCharacter = filterCharacters(currentCharacter, question, answer);
    }

    const guessedCharacter = currentCharacter[0];

    const confirmation = askConfirmation(guessedCharacter); // Chiedi all'utente se il personaggio indovinato è corretto

    if (confirmation) {
        congratulateUser();
    } else {
        reportError();
    }
}

function generateQuestion() {
    // Logica per generare una domanda in base ai personaggi rimanenti
}

function getAnswer(question) {
    // Logica per ottenere la risposta dell'utente (sì/no) alla domanda
}

function filterCharacters(characters, question, answer) {
    // Logica per filtrare i personaggi in base alla risposta dell'utente
}

function askConfirmation(character) {
    // Chiedi all'utente se il personaggio indovinato è corretto
}

function congratulateUser() {
    // Messaggio di congratulazioni all'utente
}

function reportError() {
    // Messaggio in caso di errore nell'indovinare il personaggio
}

// Avvio del gioco
akinator();
