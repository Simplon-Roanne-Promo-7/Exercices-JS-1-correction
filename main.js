///// exercise 1 ///////

// let toto = "toto";
// alert(toto);

// ///// exercise 2 ///////

// let lastName = 'John';
// let firstName = 'Doe';
// let city = 'New-York';

// alert(`Name : ${lastName}\nFirst name : ${firstName}\nCity : ${city}`);

// ///// exercise 3 ///////

// let name = prompt("Quel est ton nom?");
// alert(`Hello ${name}`);

// ///// exercise 4 ///////

// let lastName = prompt("Quel est ton nom?");
// let firstName = prompt("Quel est ton prénom?");
// let city = prompt("Quel est ta ville?");
// alert(`Name : ${lastName}\nFirst name : ${firstName}\nCity : ${city}`);

// ///// exercise 5 ///////

// let number1 = parseFloat(prompt("Enter first number: "));
// let number2 = parseFloat(prompt("Enter second number: "));

// let sum = Math.floor(Number(number1)) * Number(number2);

// alert(`The sum is ${sum}`);

// ///// exercise 6 ///////

// function modulo(number1, number2) {

//     let modulo = Math.floor(number1) % number2;

//     alert(`The modulo is ${modulo}`);
// }

// modulo(16, 3)


// ///// exercise 7 ///////


// function askThings() {

//     let shoeSize = prompt("Enter your shoe size: ");
//     let birthYear = prompt("Enter your birth year: ");
//     let result = (shoeSize * 2 + 5) * 50 - birthYear + 1766;
//     return result;

// }

// alert(askThings());

// ///// exercise 8 ///////

// let age = prompt("Entre ton age: ");

// if (age >= 18) {
//     alert("Tu es majeur");
// }
// else if (age < 18) {
//     alert("Tu es mineur");
// }
// else {
//     alert("Entre un nombre valide");
// }

///// exercise 9 ///////

// function askNumber() {
//     let number = prompt("Enter a number: ");

//     let result = "";
//     for (let i = 1; i <= 10; i++) {
//         result = result + `${number} x ${i} = ${number * i}\n`;
//     }

//     alert(result);
// }

// askNumber();

// ///// exercise 10 ///////

// function displayLetters() {
//     let word = prompt("Enter a word: ");

//     let result = "";

//     for (let i = 0; i < word.length; i++) {
//         result += `${word[i]} \n`;
//     }
//     alert(result);
// }

// displayLetters();

// // ///// exercise 11 ///////

// function checkNumber() {

//     let number = prompt("Entre un chiffre entre 1 et 10: ");

//     if (number < 5) {
//         alert("Le nombre est inferieur à 5.");
//     } else if (number > 5) {
//         alert("Le nombre est supérieur à 5.");
//     } else {
//         alert("Le nombre est égal à 5.");
//     }

//     switch (number) {
//         case number < 5:
//             alert("Le nombre est inferieur à 5.");
//             break;
//         case number > 5:
//             alert("Le nombre est supérieur à 5.");
//             break;
//         case number == 5:
//             alert("Le nombre est égal à 5.");
//             break;
//         default:
//             alert("Entre un nombre valide");
//             break;
//     }

//     checkNumber();

// ///// exercise 12 ///////
// let number = parseFloat(prompt("Enter a number: "));

// function returnSquare(number) {

//     alert(Math.pow(number, 2));
//     alert(number * number);
// }

// returnSquare(number);

