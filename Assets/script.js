//Array of special characters that can be included in the password
var specialCharacters = [
  '`',
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  '\\',
  '<',
  '>',
  '.',
  '/',
];

//Array of numeric characters that can be included in the password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//Array of lowercase characters that can be included in the password
var lowerCasedCharacters = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z',
];

//Array of uppercase characters that can be included in the password 
var upperCasedCharacters = [
'A',
'B',
'C',
'D',
'E',
'F',
'G',
'H',
'I',
'J',
'K',
'L',
'M',
'N',
'O',
'P',
'Q',
'R',
'S',
'T',
'U',
'V',
'W',
'X',
'Y',
'Z',
];


//Function will alert user of the password choices they will have
function getPasswordOptions() {
  //Variable that will keep record of the length of the users password
  var length = parseInt(
    prompt('How many characters will this password contain? 1-10'));

  //Conditional statement that will let us know if the length of the password is a number. The prompt will stop if the response isn't a number characters long. 
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  //Conditional statement to test if the length of the password is at least 8 characters in length. The alerts will stop if the response isnt at least 8 characters in length. 
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  } 

  //Conditional statement to test if password length is less 128 characters. The alerts will stop if the response comes short of 128 characters. 
  if (length > 128) {
    alert('Password length must be less than 129 characters');
    return null;
  }

  //Var to store boolean 
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  //Var to store boolean 
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );

//Var to store boolean 
var hasLowerCasedCharacters = confirm(
  'Click OF to confirm including lowercase characters.'
);

  //Var to store boolean 
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  //Conditional statement to check if user leaves out any types of characters.
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one character type');
    return null;
  }

  //Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
}

//Function used to get a random element from the array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  //Variable to store password as it's being concatenated
  var result = [];

//Array to store types of characters to include in password
var possibleCharacters = [];

//Array to contain one of each type of chosen character to ensure each will be used
var guaranteedCharacters = [];

//Check if an options object exist, if not exit the function
if (!options) return null;

//Conditional statement that adds array of special characters into array of possible characters.
//Push new random special character to guaranteedCharacters
if (options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters);
  guaranteedCharacters.push(getRandom(specialCharacters));
}

//Conditional statement that adds array of numeric characters into array of possible characters.
//Push new random special character to guaranteedCharacters
if (options.hasNumericCharacters) {
  possibleCharacters = possibleCharacters.concat(numericCharacters);
  guaranteedCharacters.push(getRandom(numericCharacters));
}

//Conditional statement that adds array of numeric characters into array of possible characters.
//Push new random special character to guaranteedCharacters
if (options.hasLowerCasedCharacters) {
  possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  guaranteedCharacters.push(getRandom(lowerCasedCharacters));
}

//Conditional statement that adds array of numeric characters into array of possible characters.
//Push new random special character to guaranteedCharacters
if (options.hasUpperCasedCharacters) {
  possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  guaranteedCharacters.push(getRandom(upperCasedCharacters));
}

//For loop to iterate over the password length from the options object, selecting random index will iterate the password.
for (var i = 0; i < options.length; i++) {
  var possibleCharacter = getRandom(possibleCharacters);

  result.push(possibleCharacter);
}

//Mix in at least one of each guaranteed character in the result
for (var i = 0; i < guaranteedCharacters.length; i++) {
  result[i] = guaranteedCharacters[i];
}

//Transform the result into a string and pass into writePassword
return result.join('');
}

//Get references to the #generate element
var generateBtn = document.querySelector('#generate');

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
  //Add event Listener to generate button
  generateBtn.addEventListener('click', writePassword);



















