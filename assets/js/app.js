/** CONST vs LET vs VAR
 * CONST: constant waarde die je niet aanpast
 * LET: bij het opnieuw inbinden 
 * VAR: signaleert 'untouched' hergebruikte code
 */


/* Programming Basics 
 * Les 3 - Variables
 */

// lesopdrachten: variables uitprinten met strings

const firstName = 'Miguela',
    lastName = 'Temmar',
    age = '20';

    //console.log('Mijn naam is ' + firstName + 'mijn achternaam ' + lastName);
    console.log(`Mijn naam is ${firstName} ${lastName} en ik ben ${age} jaar. `);

// Som berekenen Hoeveel kosten deze apples
const priceOfAnApple = 0.59,
    numberOfApples = 200;
let total = priceOfAnApple * numberOfApples;    

console.log(`Totaalprijs is: ${total}`);

// Vervang applied = mad
const hzString = 'Please visit the HZ university of applied science.';
console.log(hzString);

const hzReplacedString = hzString.replace('applied', 'mad');
console.log(hzReplacedString);

// ---------------------------------------------------------------------

/*
 * Eindopdrachten 1 t/m 3 Variables
 * Deadline: donderdag 20 september 2018
 */

// 1. Statement die aangeeft of een getal even of oneven is.
function isEvenOrOdd(value) {
	if (value % 2 == 0)
		return 'even';
	else
		return 'odd';
}
// Add here your number in twice
console.log("2 is " + isEvenOrOdd(2));

// Or like this
console.log(isEvenOrOdd(189));

// 2. String: 'Programming is not so cool' verwijder 'not'
const programString = 'Programming is not cool!';
const newStr = programString.replace('Programming is not cool!', 'Programming is cool!');
console.log(`${newStr}`);

// 3. Match: vergelijk '1400' met string 'Ik woon in Naboo', Werk dit uit
const number = '1400',
    string = 'Ik woon in Naboo';

console.log('Vergelijk', number == string);

// Waarom dit niet een slimme vraag is:
// Omdat het 2 verschillende waardes zijn, er is een nummer aangegeven 

// ---------------------------------------------------------------------

/**
 * Les 4 - Conditionals 
 * if else
 */
let today = new Date();
console.log('The day is:' ,today.getDay());
// Uitkomst is 2 omdat dinsdag de 2e dag is van de week

// lesopdracht

let currentAction = 'booleans';

if (currentAction == 'calculating') {
    console.log('in Calculating');

    const a = 10;
    const b = 11;
    console.log('optellen', a + b);

} else if(currentAction == 'strings'){
    console.log('in Strings');
    const myString = 'My beautiful string!';
    console.log(myString.toUpperCase());
    console.log('character at', myString.charAt(7));
    console.log('lengte van de string', myString.length);
    console.log('substring', myString.substr(3, 8));
    
} else if(currentAction == 'booleans'){
    console.log('in Booleans');
    // punten hoog genoeg --> if else

    const c = 20;
    if (c >= 30) {
        console.log('true, boolean');
    } else {
        console.log('false, boolean');
    }
} else {
    console.error('help');
}

// BMI = gewicht / lengte2

const height = 1.89;
const weight = 94;
const bmi = Math.round(weight / (height*height)*10)/10;

console.log(bmi, 'is de bmi');

if (bmi < 18.5) {
    console.log('Classificatie: ondergewicht');
    console.log('Risico: laag (maar verhoogd risico op andere aandoeningen)');

} else if (bmi >= 18.5 && bmi < 24,9) {
    console.log('Classificatie: normaalgewicht');
    console.log('Risico: gemiddeld');

} else if (bmi >= 25 && bmi <= 29,9) {
    console.log('Classificatie: overgewicht');
    console.log('Risico: verhoogd');

} else if (bmi >= 30) {
    console.log('Classificatie: Obesitas');
    console.log('Risico: duidelijk verhoogd');
} else {
    console.error('something went wrong!')
}

// ---------------------------------------------------------------------

/**
 * Eindopdracht: 1 t/m 3 Conditionals
 * Deadline:donderdag 20 september 2018 9:00uur
 */

// 1. If-else statement die checkt of iemand een o/v/g/uitmuntend heeft behaald

// define variable
let grade = 7;

// if else statement
if (grade <= 6) {
    console.log(grade, 'Onvoldoende');
    
} else if (grade >= 6 && grade < 7) {
    console.log(grade, 'Voldoende');

} else if (grade >= 7 && grade < 9){
    console.log(grade, 'Goed');
    
} else if (grade >= 9 && grade <= 10){
    console.log(grade,'Uitmuntend');
    
} else {
    console.error(grade, 'Foutmelding: cijfer is niet geldig!')
}

// 2. Maak opdracht 1 nu met behulp van het switch statement

// define variable
let grade1 = 8.7;

// switch case statement
switch (true) {
    case (grade1 > 1 && grade1 < 6 ):
        console.log(grade1, 'Onvoldoende - switch-case');
        break;
    case (grade1 >= 6 && grade1 < 7):
        console.log(grade1,  'Voldoende - switch-case');
        break;
    case (grade1 >= 7 && grade1 < 9):
        console.log(grade1,  'Goed - switch-case');
        break;
    case (grade1 >= 9 && grade1 <= 10 ):
        console.log(grade1, 'Uitmuntend - switch-case');
        break;
    default:
        console.error(grade1, 'Foutmelding: cijfer is niet geldig! - switch-case');
        break;
}

// 3. If-else statement die de waarden van de variabelen checkt

// define variables
const purchasedBook = true,
    job = 'teacher',
    inTrain = false;

// if-else statement
if ( purchasedBook == true && inTrain == true && job == 'teacher') {
    console.log('Finally I can enjoy my book!');

} else {
    console.log('I cannot enjoy my book :(');

}

// ---------------------------------------------------------------------