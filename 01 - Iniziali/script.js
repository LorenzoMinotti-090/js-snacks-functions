/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function getInitials(names) {
    const result = [];
    for (const name of names) {
        result.push(name[0]);
    }
    return result;
}


// Invoca la funzione qui e stampa il risultato in console

const initials = getInitials(names);
console.log(initials);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]