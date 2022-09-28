/*
 * Title: Main file of OTP matcher
 * Description:
 * Author: Abdullah Al Noman
 * Date: 28/09/2022
 *
 */

//Assigining Variable
var randomNumberDisplay = document.getElementById("random-number-display");
var generateBtn = document.getElementById("generate-btn");

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
