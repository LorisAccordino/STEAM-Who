# STEAM-Who
Un quiz stile Akinator circa alcuni importanti personaggi STEAM

# Idea e analisi
Work in progress...

## Funzionamento
Lo script JavaScript implementa un algoritmo di filtraggio progressivo che utilizza domande a risposta sì/no per eliminare progressivamente le opzioni non corrette. Di seguito è fornito un pseudocodice che rappresenta il funzionamento logico dello script:

```javascript
// Inizializzazione dei personaggi famosi
const personaggi = [/* Array di 20 personaggi famosi */];

function akinator() {
    let personaggioCorrente = personaggi; // Inizialmente tutti i personaggi sono opzioni valide

    while (personaggioCorrente.length > 1) {
        const domanda = generaDomanda(); // Genera la domanda da porre all'utente

        const risposta = ottieniRisposta(domanda); // Ottieni la risposta dell'utente (sì/no)

        personaggioCorrente = filtraPersonaggi(personaggioCorrente, domanda, risposta);
    }

    const personaggioIndovinato = personaggioCorrente[0];

    const conferma = chiediConferma(personaggioIndovinato); // Chiedi all'utente se il personaggio indovinato è corretto

    if (conferma) {
        congratulaUtente();
    } else {
        segnalaErrore();
    }
}

function generaDomanda() {
    // Logica per generare una domanda in base ai personaggi rimanenti
}

function ottieniRisposta(domanda) {
    // Logica per ottenere la risposta dell'utente (sì/no) alla domanda
}

function filtraPersonaggi(personaggi, domanda, risposta) {
    // Logica per filtrare i personaggi in base alla risposta dell'utente
}

function chiediConferma(personaggio) {
    // Chiedi all'utente se il personaggio indovinato è corretto
}

function congratulaUtente() {
    // Messaggio di congratulazioni all'utente
}

function segnalaErrore() {
    // Messaggio in caso di errore nell'indovinare il personaggio
}

// Avvio del gioco
akinator();
