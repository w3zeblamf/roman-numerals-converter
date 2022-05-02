/* Remember to use 'strict' mode in all scripts now! 
You can use strict mode in all your programs. It helps you to write cleaner code, 
like preventing you from using undeclared variables. (https://www.w3schools.com/js/js_strict.asp) */

"use strict";

let numbersAndRomans = [
  {number: 1000, roman: 'M'}, // i=0
  {number: 900, roman: 'CM'}, // i=1
  {number: 500, roman: 'D'},  // i=2
  {number: 400, roman: 'CD'}, // i=3
  {number: 100, roman: 'C'},  // i=4
  {number: 90, roman: 'XC'},  // i=5
  {number: 50, roman: 'L'},   // i=6
  {number: 40, roman: 'XL'},  // i=7
  {number: 10, roman: 'X'},   // i=8
  {number: 9, roman: 'IX'},   // i=9
  {number: 5, roman: 'V'},    // i=10
  {number: 4, roman: 'IV'},   // i=11
  {number: 1, roman: 'I'},    // i=12
];

function convertToRoman(arabicNumber) {
  let romanLetter = '';
  let arabicN = arabicNumber

  //Looping the array (numbersAndRomans)
  for(let i = 0; i < numbersAndRomans.length; i++) {
    if(numbersAndRomans[i].number <= arabicN) {
      //If the condition is 'true' then update 'arabicN'
      arabicN -= numbersAndRomans[i].number 
                 // 10     -       10 =  0
      romanLetter += numbersAndRomans[i].roman             
                     // ''      +      'X'

      i--;
    } 
  }
  
  

  document.getElementById('romanInput').value = romanLetter;

  //return console.log(`My number ${arabicNumber} is ${romanLetter} in Roman Number`);
  //return romanLetter;
}

// console.log(convertToRoman(4));
// console.log(convertToRoman(3));
// console.log(convertToRoman(4));
// console.log(convertToRoman(5));
// console.log(convertToRoman(29));
// console.log(convertToRoman(99));
// console.log(convertToRoman(506));
// console.log(convertToRoman(1023));
// console.log(convertToRoman(2014));
// console.log(convertToRoman(3999));

document.getElementById('convert').addEventListener('click', function(){
  let number = document.getElementById('numberInput').value;
  
  convertToRoman(number);
});
