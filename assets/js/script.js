// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var allcaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdeghijklmopqrstuvwxyz"
var characters = "!@#$%^&*()"
var numbers = "1234567890"

function generatePassword() {
  console.log("you clicked the button");

  // prompt user for password criteria
  // length 8-128
  var passwordLength = window.prompt("How many characters do you need the password to be?")
  console.log(passwordLength)
  if (passwordLength > 8 && passwordLength < 128) {
    // include lowercase, uppercase, special, numbers
    var uppercase = window.confirm("Would you like the password to include uppercase letters?")
    var lowercase = window.confirm("Would you like the password to include lowercase letters?")
    var numeric = window.confirm("Would you like the password to include numbers?")
    var special = window.confirm("Would you like the password to include special characters letters?")
    // validate the input- must have correct length and select at least one character type
    if (uppercase || lowercase || numeric || special) {

      // generate password 
      var useable = ""
      if (uppercase === true) {
        useable = useable + allcaps
      }
      if (lowercase === true) {
        useable = useable + lower
      }
      if (special === true) {
        useable = useable + characters
      }
      if (numeric === true) {
        useable = useable + numbers
      }
      console.log(useable)
      var password = ""
      for (var i = 0; i < passwordLength; i++) {
        var num = Math.floor(Math.random() * useable.length)
        var char = useable[num]
        password = password + char

      }

      // display final password
      return password;
    } else {
      window.alert("Must choose one option")
    }

  } else {
    window.alert("Invalid password length")
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
