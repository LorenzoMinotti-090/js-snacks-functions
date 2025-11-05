/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(str) {
    const vocali = ["a", "e", "i", "o", "u"];
    let vocaliCount = 0;

    for (let i = 0; i < str.length; i++) {
        const curLetter = str[i];

        for (let j = 0; j < vocali.length; j++) {
            if (curLetter === vocali[j]) {
                vocaliCount++;
            }
        }
    }

    return vocaliCount;
}

// Invoca la funzione qui e stampa il risultato in console
const risultato = contaVocali(word);
console.log(risultato);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)