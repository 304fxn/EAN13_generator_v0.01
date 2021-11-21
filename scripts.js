const numberEAN = document.getElementById("nrbarcode");
const generateEAN = document.getElementById("btn-ean");

generateEAN.addEventListener("click", EANgenerator);

function EANgenerator() {
  let generateNumberOne = randomNumberOne();
  let generateNumberTwo = randomNumberTwo();
  let generateNumberThree = randomNumberThree();
  let generateNumberFour = randomNumberFour();
  let generateNumberFive = randomNumberFive();
  let generateNumberSix = randomNumberSix();
  let generateNumberSeven = randomNumberSeven();
  let generateNumberEight = randomNumberEight();
  let generateNumberNine = randomNumberNine();

  // for last number calculator
  let sumofNumbers =
    4 +
    generateNumberOne +
    generateNumberThree +
    generateNumberFive +
    generateNumberSeven +
    generateNumberNine;

  const resultOfnumbers = sumofNumbers * 3;

  let PairNumbers =
    generateNumberTwo +
    generateNumberFour +
    generateNumberSix +
    generateNumberEight;

  const SumofNumbers = resultOfnumbers + PairNumbers;
  console.log(SumofNumbers);

  const secondFinalNumber = sumofNumbers / 10;
  let FinalNumber = Math.round(secondFinalNumber);
  console.log(FinalNumber);
  // here is ended calulator for last number

  let EANs =
    "645" +
    generateNumberOne +
    generateNumberTwo +
    generateNumberThree +
    generateNumberFour +
    generateNumberFive +
    generateNumberSix +
    generateNumberSeven +
    generateNumberEight +
    generateNumberNine +
    FinalNumber;

  numberEAN.innerHTML = EANs;
}

function randomNumberOne() {
  return Math.floor(Math.random() * 10);
}
function randomNumberTwo() {
  return Math.floor(Math.random() * 10);
}
function randomNumberThree() {
  return Math.floor(Math.random() * 10);
}
function randomNumberFour() {
  return Math.floor(Math.random() * 10);
}
function randomNumberFive() {
  return Math.floor(Math.random() * 10);
}
function randomNumberSix() {
  return Math.floor(Math.random() * 10);
}
function randomNumberSeven() {
  return Math.floor(Math.random() * 10);
}
function randomNumberEight() {
  return Math.floor(Math.random() * 10);
}
function randomNumberNine() {
  return Math.floor(Math.random() * 10);
}
