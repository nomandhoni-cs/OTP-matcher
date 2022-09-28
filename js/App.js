/*
 * Title: Main file of OTP matcher
 * Description:
 * Author: Abdullah Al Noman
 * Date: 28/09/2022
 *
 */

//Assigining Variable
let randomNumberDisplay = document.getElementById("random-number-display");
let inputDisplay = document.getElementById("input-display");
let generateBtn = document.getElementById("generate-btn");
let Clear = document.getElementById("Clear");
let backspace = document.getElementById("Backspace");
let Seven = document.getElementById("Seven");
let Eight = document.getElementById("Eight");
let Nine = document.getElementById("Nine");
let Four = document.getElementById("Four");
let Five = document.getElementById("Five");
let Six = document.getElementById("Six");
let One = document.getElementById("One");
let Two = document.getElementById("Two");
let Three = document.getElementById("Three");
let Zero = document.getElementById("Zero");
let calcBody = document.getElementById("calc-body");
let submitBtn = document.getElementById("submit-btn");
let correctMsg = document.getElementById("correct-pin");
let wrongMsg = document.getElementById("wrong-pin");
let atemptCount = document.getElementById("atempt-count").innerText;

randomNumberDisplay.style.letterSpacing = "3rem";
inputDisplay.style.letterSpacing = "3rem";
//Function Area
function randomNumberGenerator() {
  var randomNumber = parseInt(Math.random() * 9999);
  if (randomNumber < 1000) {
    randomNumber = randomNumber + parseInt(Math.random() * 8999);
  }
  return randomNumber;
}

generateBtn.addEventListener("click", function () {
  var randomNumberOutput = randomNumberGenerator();
  randomNumberDisplay.value = randomNumberOutput;
});

Clear.onclick = () => (inputDisplay.value = "");
backspace.onclick = () => (inputDisplay.value = inputDisplay.value.slice(0, -1));
Seven.onclick = () => (inputDisplay.value += "7");
Eight.onclick = () => (inputDisplay.value += "8");
Nine.onclick = () => (inputDisplay.value += "9");
Four.onclick = () => (inputDisplay.value += "4");
Five.onclick = () => (inputDisplay.value += "5");
Six.onclick = () => (inputDisplay.value += "6");
One.onclick = () => (inputDisplay.value += "1");
Two.onclick = () => (inputDisplay.value += "2");
Three.onclick = () => (inputDisplay.value += "3");
Zero.onclick = () => (inputDisplay.value += "0");

calcBody.addEventListener("click", function () {
  if (inputDisplay.value.length > 4) {
    inputDisplay.value = inputDisplay.value.slice(-1, 0);
    // inputDisplay.value = inputDisplay.unshift(1);
  }
});

//Submit Button
submitBtn.addEventListener('click', function (){
  if(parseInt(inputDisplay.value) == parseInt(randomNumberDisplay.value)){
    console.log('Working');
    correctMsg.style.display = 'block';
    wrongMsg.style.display = 'none';
    inputDisplay.value = ""
  }
  else{
  wrongMsg.style.display = 'block';
  correctMsg.style.display = 'none';
  inputDisplay.value = ""
  }
  // for(let i = 3; i > 0; i--){
  //   let type = typeof atemptCount;
  //   console.log(type);
  // }
})