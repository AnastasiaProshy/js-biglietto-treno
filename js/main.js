const userKM = prompt('How many km should you travel on the train?');
const userAGE = prompt('How old are you?');

//OUTPUT STRING
const output = `
***user data***
travel: ${userKM}
old: ${userAGE}
***************
`;
console.log(output);

//STRING TO NUMBERS
const klm = parseInt(userKM);
const age = parseInt(userAGE);

//MAIN ALGORITM
const DefaultPrice = (klm * 0.21).toFixed(2);
const priceUnder18 = (DefaultPrice - (DefaultPrice * 0.20)).toFixed(2);
const priceOver65 = (DefaultPrice - (DefaultPrice * 0.40)).toFixed(2);

//OUTPUT
const string = `The total price of your trip is `

if (age <= 18) {
    finalResult = string + priceUnder18 + `€. Congratulations, you've received a 20% discount for under 19 years.`
    console.log(priceUnder18);
}
else if (age >= 65) {
    finalResult = string + priceOver65 + `€. Congratulations, you've received a 40% discount for over 64 years.`
    console.log(priceOver65);
}
else {
    finalResult = string + DefaultPrice + `€. Unfortunately, there are no discounts available for you.`
    console.log(DefaultPrice);
}

document.getElementById('PRICE').innerText = finalResult;