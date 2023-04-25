let userNumber = 0;
let guessed = 0;
let randomNumber = Math.floor(Math.random()*10 + 1);
document.getElementById("submitButton").onclick = function(){
   userNumber = document.getElementById("userNumber").value;
   let message = userNumber == randomNumber ? 'You guessed it right' : 'You guessed it wrong';
   console.log(message);
  
   document.getElementById("message").innerHTML = message + `It you ${guessed} attempts`; 
   guessed++;


}