"use strict";


const userAge = prompt("Quanti anni hai?");
const userKm = Number(prompt("Quanti km vuoi percorrere?"));

let ticketPrice = 0.21 * userKm;

if(userAge < 18){
    let priceUnderAge = ticketPrice - (ticketPrice * 0.2);
    console.log("Sei minorenne quindi il tuo prezzo è: " + priceUnderAge.toFixed(2));
}
else if(userAge >= 65)
{
    let priceOverAge = ticketPrice - (ticketPrice * 0.4);
    console.log("Sei un vecchiaccio pensionato, il tuo prezzo è: " + priceOverAge.toFixed(2));
}
else{
    console.log("Il prezzo del tuo biglietto e': " + ticketPrice.toFixed(2));
}