var boxEle = document.body.querySelector(".box");

var userInput = prompt("Enter a number ");
var userInput2 = prompt("Enter another number ");

boxEle.innerHTML = userInput+userInput2;

boxEle.innerHTML = userInput, userInput2;