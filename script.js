// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("in my write password function")
  var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getLength(){
  //var length = //how do we ask the user?
  var length = prompt("What's the length you'd like your password to be?")
  console.log(length)
  if(length >= 8 && length <= 128){
   return length
  } 
    console.log("invalid")
    return getLength()
  
}

function generatePassword() {
  console.log("entered my generatePassword")
  var passwordLength = getLength()
  console.log(passwordLength, " in my generatePassword")
  var passwordCharacters = getCharacters()
  
  //make the password down here
  var passWordToReturn = ""

  return passWordToReturn
}

function getCharacters(){
  console.log("getting characters")
  var passwordCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
