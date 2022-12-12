//Global Variables
var normalCharSet = "abcdefghijklmnopqrstuvwxyz";
var numberCharSet = "0123456789";
var UpperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var SpecialCharSet = "!#$%&()*+-./:;<=>?@[\]^_`{|}~";
var UpperCase;
var SpecialCharacters;
var NumberCase;
var PasswordLength;

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to Generate the password
function generatePassword(){

//Asks if they want to use Capital Letters
if (window.confirm("Do you want to use UpperCase?")){
    UpperCase = true;
    console.log(UpperCase);
  }
else{
    UpperCase = false;
    console.log(UpperCase);
}

//Ask if they want to use Special Characters
if (window.confirm("Do you want to use Special Characters?")){
    SpecialCharacters = true;
    console.log(SpecialCharacters);
}


if (window.confirm("Do you want to use numbers?")){
  NumberCase = true;
  console.log(NumberCase);

}


else {
    SpecialCharacters = false;
    console.log(SpecialCharacters);

}

//Ask for the length of the password, if its not within the parameters, the function starts all over
PasswordLength = prompt ("How many characters do you want for your password? (8 - 128");
console.log(PasswordLength);

if (PasswordLength <8 || PasswordLength >128){
  alert ("Please choose a number between 8 and 128");
  return generatePassword()
}

//From the answers obtained, the charset variable obtains its values
//Charset uses normal, upper case and special characters only
//I left the console lot to view the parameters the char set variable will have when creating the password
if (UpperCase === true && SpecialCharacters === true && NumberCase==true){
  charset = normalCharSet.concat(UpperCharSet,SpecialCharSet),numberCharSet;
  console.log(charset);
}

//Charset uses normmal and special characters only
if (UpperCase === false && SpecialCharacters === true && NumberCase == true){
  charset = normalCharSet.concat(SpecialCharSet,numberCharSet);
  console.log(charset);
}

//Charset uses normal characters and upper case only
if (UpperCase === true && SpecialCharacters === false && NumberCase == true){
  charset = normalCharSet.concat(UpperCharSet,numberCharSet);
  console.log(charset);
}

if (UpperCase === true && SpecialCharacters === true && NumberCase == false){
  charset = normalCharSet.concat(UpperCharSet,SpecialCharSet);
  console.log(charset);
}

//Char set only uses normal characters
if (UpperCase === false && SpecialCharacters === false && NumberCase == false){

  charset = normalCharSet;
  console.log(charset);
}

//The password is then created 
var PasswordCreation = "";

for (var i = 0, n = PasswordLength; i < PasswordLength; i++) {
  PasswordCreation += charset.charAt(Math.floor(Math.random() * n));
}
return PasswordCreation;

}