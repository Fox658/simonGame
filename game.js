var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(document).one("keypress", function (event){
    nextSequence();
});

$(".btn").on("click", function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length);
});
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel-1] === userClickedPattern[currentLevel-1]){
        if(level === currentLevel){
            setTimeout(function () {nextSequence();}, 1000);
            userClickedPattern = [];
        }
    } else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");}, 200);
        $("#level-title").text("Game Over, Press any Key to Restart");
        $(document).one("keypress", function (){
            startOver();
        });
    }
}
function startOver(){
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    nextSequence();
}
    
function nextSequence(){
    level++;
    let randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#level-title").text("level "+level);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);
}

function playSound(name){
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play(); 
}

function animatePress(currentColor) {
    $("#"+currentColor).on("click", function() {
        $(this).addClass('pressed');
        setTimeout(() => {$(this).removeClass('pressed')},100);
    });
}
