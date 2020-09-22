var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];
var randomChosenColor = "";

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = buttonColours[randomNumber];
    console.log(randomChosenColor);
    $("."+randomChosenColor).toggle().fadeIn();
    var audio = new Audio(`sounds/${randomChosenColor}.mp3`);
    audio.play();
   
    gamePattern.push(randomChosenColor);
}

// console.log(randomNumber);
// alert("Conio");