//Global Variables
var LowerCharSet = "abcdefghijklmnopqrstuvwxyz";
var NumberCharSet = "0123456789";
var UpperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var SpecialCharSet = "!#$%&()*+-./:;<=>?@[\]^_`{|}~";
var LowerCase;
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


//Clear variables in case the user wants to restart the password generator
var PasswordLength=0;
var counter = 0;
var PasswordCreation = "";

//Asks if user wants to use lower case letters, selects one letter at random and adds to the counter to substract to the PasswordLength at the end
//This way we at least have one lower case character per the acceptance criteria
if (window.confirm("Do you want to use Lower Case Letters?")){

  LowerCase = true;
  console.log(LowerCase)
  PasswordCreation += LowerCharSet.charAt(Math.floor(Math.random() * LowerCharSet.length));
  console.log(PasswordCreation);
  counter++;

}

else{
  LowerCase = false;
}

//Asks if the user wants to use capital letters, selects one letter at random and adds to the counter to substract to the PasswordLength at the end
//This way we at least have one upper character per the accpetance criteria
if (window.confirm("Do you want to use Upper Case Letters?")){

    UpperCase = true;
    console.log(UpperCase)
    PasswordCreation += UpperCharSet.charAt(Math.floor(Math.random() * UpperCharSet.length));
    console.log(PasswordCreation);
    counter++;
  }

else{
    UpperCase = false;
    console.log(UpperCase);
}

//Ask if the user wants to use Special Characters and takes one letter at random and adds to the counter to substract to the PasswordLength at the end
//This way we at least have one special character per the acceptance criteria
if (window.confirm("Do you want to use Special Characters?")){

    SpecialCharacters = true;
    console.log(SpecialCharacters);
    PasswordCreation += SpecialCharSet.charAt(Math.floor(Math.random() * SpecialCharSet.length));
    console.log(PasswordCreation);
    counter++;
}

else{
  SpecialCharacters= false;
  console.log(SpecialCharacters);
}

//Ask if the user wants to use numbers and takes one number at random and adds to the counter to substract to the PasswordLength at the end
//This way we at least ahve one number per the acceptance criteria
if (window.confirm("Do you want to use numbers?")){

  NumberCase = true;
  console.log(NumberCase);
  PasswordCreation += NumberCharSet.charAt(Math.floor(Math.random() * NumberCharSet.length));
  console.log(PasswordCreation);
  counter++;
}

else {
    NumberCase = false;
    console.log(SpecialCharacters);
}


//Ask for the length of the password, if its not within the parameters, the function starts all over
PasswordLength = prompt ("How many characters do you want for your password? (8 - 128");

console.log(PasswordLength);


if (PasswordLength <8 || PasswordLength >128){
  alert ("Please choose a number between 8 and 128");
  return generatePassword()
}

//From the answers obtained above, the charset variable obtains its values
//Charset uses normal, upper case, special characters and numbers only
//I left the console lot to view the parameters the char set variable will have when creating the password
//User wants all the variables
//Scenario 1
if (LowerCase===true && UpperCase === true && SpecialCharacters === true && NumberCase===true){
  charset = LowerCharSet.concat(UpperCharSet,SpecialCharSet,NumberCharSet);
  console.log(charset);
}


//Charset uses uppercase, special characters and numbers
//Scenario 2
if (LowerCase ===false && UpperCase === true && SpecialCharacters === true && NumberCase === true){
  charset = UpperCharSet.concat(SpecialCharSet,NumberCharSet);
  console.log(charset);
}

//Charset uses lowercase, special characters and numbers
//Scenario 3 
if (LowerCase === true && UpperCase === false && SpecialCharacters === true && NumberCase === true){
  charset = LowerCharSet.concat(SpecialCharSet,NumberCharSet);
  console.log(charset);
}


//Charset uses lower case, uper case and numbers
//Scenario 4
if (LowerCase === true && UpperCase === true && SpecialCharacters === false && NumberCase === true){
  charset = LowerCharSet.concat(UpperCharSet,NumberCharSet);
  console.log(charset);
}

//Charset uses lower case, uper case and special caracters
//Scenario 5
if (LowerCase === true && UpperCase === true && SpecialCharacters === true && NumberCase === false){
  charset = LowerCharSet.concat(UpperCharSet,SpecialCharSet);
  console.log(charset);
}

//Charset uses special characters and numbers only
//Scenario 6
if (LowerCase === false && UpperCase === false && SpecialCharacters === true && NumberCase === true){
  charset = SpecialCharSet.concat(NumberCharSet);
  console.log(charset);
}

//Char set only uses lower case characters and numbers
//Scenario 7
if (LowerCase === true && UpperCase === false && SpecialCharacters === false && NumberCase === true){
  charset = LowerCharSet.concat(NumberCharSet);
  console.log(charset);
}

//Char set uses lower case and upper case
//Scenario 8
if (LowerCase === true && UpperCase === true && SpecialCharacters === false && NumberCase === false){
  charset = LowerCharSet.concat(UpperCharSet);
  console.log(charset);
}

//Char set for upper and special characters
//Scenario 9
if (LowerCase === false && UpperCase === true && SpecialCharacters === true && NumberCase === false){
  charset = UpperCharSet.concat(SpecialCharSet);
  console.log(charset);
}


//Char set uses only numbers
//Scenario 10
if (LowerCase === false && UpperCase === false && SpecialCharacters === false && NumberCase === true){
  charset = NumberCharSet;
  console.log(charset);
}

//Char set uses lower case 
//Scenario 11
if (LowerCase === true && UpperCase === false && SpecialCharacters === false && NumberCase === false){
  charset = LowerCharSet;
  console.log(charset);
}

//Char set only used uppercase
//Scenario 12
if (LowerCase === false && UpperCase === true && SpecialCharacters === false && NumberCase === false){
  charset = UpperCharSet;
  console.log(charset);
}

//Char set uses special characters only
//Scenario  13
if (LowerCase === false && UpperCase === false && SpecialCharacters === true && NumberCase === false){
  charset = SpecialCharSet;
  console.log(charset);
}

//Restarts the password generation since no variable was selected
//Scenario 14 
if (LowerCase === false && UpperCase === false && SpecialCharacters === false && NumberCase === false){
  alert ("Please choose select at least one variable for the password creation");
  return generatePassword()
}

//Since we have 1 random character per each variable accepted above, the acceptance criteria is met 
//The rest of the password is created by substracting the counter from the accepted variables from the PasswordLength selected
//The rest of the password is created randomly using the char set formed 
for (var i = 0 ; i < (PasswordLength-counter); i++) {

  PasswordCreation += charset.charAt(Math.floor(Math.random() * charset.length));
  console.log(PasswordCreation);
  
}

return PasswordCreation;

}