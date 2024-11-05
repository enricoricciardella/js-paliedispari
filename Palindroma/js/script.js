// Chiedi all'utente di inserire una parola
const userWord = prompt("Inserisci una parola per scoprire la sua versione invertita");

// Funzione per invertire una parola
function invertWord(word) {
    // Convertiamo la parola in un array di caratteri, la invertiamo e la ricompattiamo in una stringa
    return word.split('').reverse().join('');
}
// Funzione principale
function checkWord() {
    if (userWord) {
        const invertedWord = invertWord(userWord);
        console.log(`La parola "${userWord}" stampata al contrario è: "${invertedWord}"`);
    } else {
        console.log("Non hai inserito una parola!");
    }
}
// Chiamata funzione principale
checkWord();

