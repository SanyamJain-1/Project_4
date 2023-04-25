let userNumber = 0;
let guessed = 0;
let randonNumber = Math.floor(Math.random()*10 + 1);
document.getElementById("submitButton").onclick = function(){
   userNumber = document.getElementById("userNumber").value;
   let message = userNumber == randonNumber ? 'You guessed it right' : 'You guessed it wrong';
   console.log(message);
  
   document.getElementById("message").innerHTML = message; 
   guessed++;
   console.log(randonNumber);
}