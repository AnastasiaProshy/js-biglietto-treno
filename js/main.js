const aKM = prompt('How many km should you travel on the train?');
const aAGE = prompt('How old are you?');

//in numeri
const klm = parseInt(aKM);
const age = parseInt(aAGE);
const PRICE = klm * 0.21;

const PRICE18 = PRICE - (PRICE * 0.20);
const PRICE65 = PRICE - (PRICE * 0.40);

if (age <= 18) {
    console.log(PRICE18);
} else if (age >= 65) {
    console.log(PRICE65);
} else {
    console.log(PRICE);
}


//PRICE
// const PRICE18 = ((aKM * 0, 21) - 20 %);
// const PRICE65 = ((aKM * 0, 21) - 40 %);
// const PRICE = aKM * 0.21;

// //AGE
// let age = aAGE;
// if (age <<= 18) {
//     console.log(PRICE18)
// }
// if (age >>= 65) {
//     console.log(PRICE65)
// }
// else {
//     console.log(PRICE)
// }




//trasformo risposta in numero intero
//const km = Number(parseInt(prompt('How many km should you travel on the train?')));