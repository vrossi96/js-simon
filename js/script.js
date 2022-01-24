/*
|Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero
*/
//# Funzioni
const getRandomNumber = (min, max) => {
   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
   return randomNumber;
};

const generateRandomNumbers = (array) => {
   while (array.length < 5) {
      const number = getRandomNumber(1, 100);
      if (!array.includes(number)) {
         array.push(number);
      }
   }
};

//# Variabili
const fiveRandomNumbers = [];

//# Procedimento
generateRandomNumbers(fiveRandomNumbers);
console.log(fiveRandomNumbers);
alert(`I numeri sono: ${fiveRandomNumbers}`);
