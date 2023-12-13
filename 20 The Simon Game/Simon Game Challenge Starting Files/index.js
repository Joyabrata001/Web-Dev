var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function playSound(activeColor) {
    new Audio("./sounds/" + activeColor + ".mp3").play();
}

function nextSequence() {
    userClickedPattern = [];
    ++level;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function animatePress(activeColor) {
    $("#" + activeColor).addClass("pressed");
    setTimeout(() => {
        $("#" + activeColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("Success");
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("Failure");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Enter Key to Restart");
        new Audio("./sounds/wrong.mp3").play();
        setTimeout(function () {
            $("body").removeClass("game-over");
            startOver();
        }, 1000);
    }
}

function startOver() {
    level = 0;
    userClickedPattern = [];
    started = false;
    gamePattern = [];
    $("#level-title").text("Press Enter Key to Start");
}

$(".btn").on("click", function () {
    if (!started) {
        $("#level-title").text("First Press Enter Key!");
        $("body").addClass("game-over");
        new Audio("./sounds/wrong.mp3").play();
        setTimeout(function () {
            $("#level-title").text("Press Enter Key to Start");
            $("body").removeClass("game-over");
        }, 1000);
    } else {
        var userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        console.log(userClickedPattern);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length - 1);
    }
});

$(document).on("keypress", function () {
    if (!started) {
        nextSequence();
        started = true;
    }
});