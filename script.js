let userNumber = 0;
let guessCounter = 0;
let randomNumber = Math.floor(Math.random()*10 + 1);


document.getElementById("submitButton").onclick = function(){
   
   userNumber = document.getElementById("userNumber").value;
   userNumber = Number(userNumber);

   if(userNumber === randomNumber ){
      document.getElementById("message").innerHTML = `You guessed the Correct Number <br> It took you ${guessCounter+1} times to guess`;
   }
   else if(userNumber < randomNumber){
      document.getElementById("message").innerHTML = `You guessed a smaller #`;
   }
   else if(userNumber > randomNumber){
      document.getElementById("message").innerHTML = `You guessed a larger #`;
   }
   guessCounter++;
}