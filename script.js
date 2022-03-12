// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){



var passwordLength = prompt('How long do you want your password')
var shouldIncludeLowercase = confirm('Do you want lower case letters?');
var shouldIncludeUppercase = confirm('Do you want upper case letters?');
var shouldIncludeSpecialChars = confirm('Do you want Special Characters?');
var shouldIncludeNumbers = confirm('Do you want numbers?');

var lowercase = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialcharaters = [ '!','@','#','$','%','^','&','=','-']

var allowedCharacters = [];
if(shouldIncludeLowercase=== true)  {
    for(var i = 0; i<lowercase.length;i++) {
        allowedCharacters.push(lowercase[i]);
  }
}

if(shouldIncludeUppercase=== true)  {
    for(var i = 0; i<uppercase.length;i++) {
        allowedCharacters.push(uppercase[i]);
  }
}

if(shouldIncludeSpecialChars=== true)  {
    for(var i = 0; i<specialcharaters.length;i++) {
        allowedCharacters.push(specialcharaters[i]);
  }
}

if(shouldIncludeNumbers=== true)  {
    for(var i = 0; i<numbers.length;i++) {
        allowedCharacters.push(numbers[i]);
  }
}



console.log(allowedCharacters)

var password = '';

for (i = 0; i< passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowedCharacters.length);
    var randomChar = allowedCharacters[randomIndex];
    
    password = password + randomChar;
}

console.log(password);
return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
