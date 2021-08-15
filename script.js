// Assignment Code
var generateBtn = document.querySelector("#generate");
// All arrays needed for the characters
var textLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var textUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharc = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "<", ",", ".", ">", "?", ";", ":", "/", "'"];

// Write password to the #password input
// Ask user to how many characters they would like to use
function generatePassword() {
    var passwordLength = prompt("How long would you like the password? 8-128 characters");
    //Make sure users chooses between 8-128 characters
    while (passwordLength < 8 || passwordLength > 128) {
        alert("Value needs to be between 8-128 characters!");
        var passwordLength = prompt("How many characters would you like the password to have? Choose between 8-128 characters.");
    }
    //Ask for the criteria for the password then adds the arrays together if true
    var passwordCharc = []

    var upper = confirm("Would you like Uppercase letters?");
    if (upper === true) {
        passwordCharc = passwordCharc.concat(textUpper)
    }

    var lower = confirm("Would you like Lowercase letters?");
    if (lower === true) {
        passwordCharc = passwordCharc.concat(textLower)
    }

    var special = confirm("Would you like special characters?");
    if (special === true) {
        passwordCharc = passwordCharc.concat(specialCharc)
    }

    var numeric = confirm("Would you like numbers characters?");
    if (numeric === true) {
        passwordCharc = passwordCharc.concat(numbers)
    }

    // for loop to generate a random password 
    var random = ""
    for (var i = 0; i < passwordLength; i++) {
        random = random + passwordCharc[Math.floor(Math.random() * passwordCharc.length)];
        console.log(random)
    }
    return random;
}

function writePassword() {
    var password = generatePassword()
    var passwordCharc = document.querySelector("#password");

    passwordCharc.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
