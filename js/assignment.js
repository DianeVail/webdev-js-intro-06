"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");


function evenOrOdd() { 
    const num = 3;
    let result = "";
    if (num % 2 === 0) {        // If loop for odd or even
         result = "Even";
    } else {
        result = "Odd";
    }
    evenOrOddElement.innerText = result;
}


function sumTheNumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {  //for loop for sum of numbers
        sum = sum +i;
      }
      sumTheNumbersElement.innerText = sum;
}
 
        
function createNumberArray() {
   let numberArray = [];
   let x = 0;
   while (x <= 9) {                     //while loop for array
        x++;
        numberArray.push(x);        
    }  
    createNumberArrayElement.innerText = numberArray;
}

function render() {
    evenOrOdd();
    sumTheNumbers();
    createNumberArray();

}

submissionBtn.addEventListener("click", function () {
    render();
});
