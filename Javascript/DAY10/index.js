const inputSlider =document.querySelector("[data-lengthSlider]");
const length =document.querySelector("[data-lengthNumber]");
const passwordDisplay =document.querySelector("[data-passwordDisplay]");
const copyBtn =document.querySelector("[data-copy]");
const copyMsg =document.querySelector("[data-copyMsg]");
const uppercaseCheck =document.querySelector("#uppercase");
const lowercaseCheck =document.querySelector("#lowercase");
const numbersCheck =document.querySelector("#numbers");
const symbolCheck =document.querySelector("#symbols");
const indicator =document.querySelector("[data-indicator]");
const generateBtn =document.querySelector(".generateBtn");
const allCheckBox =document.querySelector("input[type=checkBox]");
const symbols='~`!@#$%^&*(){}[];:<>?/*';

let password="";
let passwordLength=10;
let checkCount=1;
handleSlider();
//set strength circle color to grey

//set passwordLength
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
    //or kuch bhi add krna chahiye
}

function setIndicator(color){
    indicator.style.backgroundColor=color;
        //shadow
}

function getRndInteger (min,max ){
   return Math.floor(Math.random() *(max-min))+min;
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}

function generateSymbols(){
    return String.fromCharCode(getRndInteger(97,123));
}








