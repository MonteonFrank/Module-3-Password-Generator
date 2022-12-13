//Global Variables
var normalCharSet = "abcdefghijklmnopqrstuvwxyz";
var numberCharSet = "0123456789";
var UpperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var SpecialCharSet = "!#$%&()*+-./:;<=>?@[\]^_`{|}~";
var NormalCase;
var UpperCase;
var SpecialCharacters;
var NumberCase;


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


//Clear variables
var PasswordLength=0;
var counter = 0;
var PasswordCreation = "";

//Asks if user wants to use lower case letters, selects one letter at random and adds to the counter
if (window.confirm("Do you want to use Lower Case Letters?")){
  NormalCase = true;
  console.log(NormalCase);
  PasswordCreation += normalCharSet.charAt(Math.floor(Math.random() * normalCharSet.length));
  counter++;

}

else{
  NormalCase = false;
  console.log(NormalCase);
}

//Asks if the user wants to use capital letters, selects one letter at random and adds to the counter
if (window.confirm("Do you want to use Upper Case Letters?")){
    UpperCase = true;
    console.log(UpperCase);
    PasswordCreation += UpperCharSet.charAt(Math.floor(Math.random() * UpperCharSet.length));
    counter++;
  }
else{
    UpperCase = false;
    console.log(UpperCase);
}

//Ask if the user wants to use Special Characters and takes one letter at random and adds to the counter
if (window.confirm("Do you want to use Special Characters?")){
    SpecialCharacters = true;
    console.log(SpecialCharacters);
    PasswordCreation += SpecialCharSet.charAt(Math.floor(Math.random() * SpecialCharSet.length));
    counter++;
}

else{
  SpecialCharacters= false;
  console.log(SpecialCharacters);
}

//Ask if the user wants to use numbers and takes one number at random and adds to the counter
if (window.confirm("Do you want to use numbers?")){
  NumberCase = true;
  console.log(NumberCase);
  PasswordCreation += numberCharSet.charAt(Math.floor(Math.random() * numberCharSet.length));
  counter++;
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
//All variables are true
if (NormalCase===true && UpperCase === true && SpecialCharacters === true && NumberCase==true){
  charset = normalCharSet.concat(UpperCharSet,SpecialCharSet,numberCharSet);
  console.log(charset);
}



//Charset uses uppercase, special characters and numbers
if (NormalCase ===false && UpperCase === true && SpecialCharacters === true && NumberCase === true){
  charset = UpperCase.concat(SpecialCharSet,numberCharSet);
  console.log(charset);
}

//Charset uses lowercase, special charactesr and numbers
if (NormalCase === true && UpperCase === false && SpecialCharacters === true && NumberCase === true){
  charset = normalCharSet.concat(SpecialCharSet,numberCharSet);
  console.log(charset);
}


//Charset uses lower case, uper case and numbers
if (NormalCase==true && UpperCase === true && SpecialCharacters === false && NumberCase === true){
  charset = normalCharSet.concat(UpperCharSet,numberCharSet);
  console.log(charset);
}

//Charset uses lower case, uper case and special caracters
if (NormalCase===true && UpperCase === true && SpecialCharacters === true && NumberCase === false){
  charset = normalCharSet.concat(UpperCharSet,SpecialCharSet);
  console.log(charset);
}

//Charset uses lower case, uper case and special caracters
if (NormalCase===false && UpperCase === false && SpecialCharacters === true && NumberCase === true){
  charset = SpecialCharSet.concat(numberCharSet);
  console.log(charset);
}

//Char set only uses normal characters
if (NormalCase===true && UpperCase === false && SpecialCharacters === false && NumberCase === true){

  charset = normalCharSet.concat(numberCharSet);
  console.log(charset);
}

if (NormalCase===true && UpperCase === true && SpecialCharacters === false && NumberCase === false){

  charset = normalCharSet.concat(UpperCase);
  console.log(charset);
}

if (NormalCase===false && UpperCase === false && SpecialCharacters === false && NumberCase === true){

  charset = numberCharSet;
  console.log(charset);
}

if (NormalCase===true && UpperCase === false && SpecialCharacters === false && NumberCase === false){

  charset = normalCharSet;
  console.log(charset);
}

if (NormalCase===false && UpperCase === true && SpecialCharacters === false && NumberCase === false){

  charset = UpperCharSet;
  console.log(charset);
}

if (NormalCase===false && UpperCase === false && SpecialCharacters === true && NumberCase === false){

  charset = SpecialCharSet;
  console.log(charset);
}


//The password is then created
for (var i = 0 ; i < (PasswordLength-counter); i++) {

  console.log(i);
  PasswordCreation += charset.charAt(Math.floor(Math.random() * charset.length));
  console.log(PasswordCreation);
  
}

return PasswordCreation;

}