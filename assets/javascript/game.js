// function showDiv() {
//     var toggleButton = document.getElementById("start");
//     var startButton = document.getElementById("startButton");
//     if (toggleButton.style.display === "none") {
//         toggleButton.style.display = "block";
//         startButton.style.display = "none";

//         console.log(toggleButton.style.display);
//     } else {
//         toggleButton.style.display = "none";
//     }
// }
var winsContentChanged = document.getElementById('wins');
var lossesContentChanged = document.getElementById('losses');
var guessesRemaining = 10;
if (window.addEventListener) {
    // Normal browsers
    winsContentChanged.addEventListener('DOMSubtreeModified', clearDivs, false);
    lossesContentChanged.addEventListener('DOMSubtreeModified', clearDivs, false);

}
if (window.addEventListener) {
    // Normal browsers
    winsContentChanged.addEventListener('DOMSubtreeModified', contentChanged, false);
    lossesContentChanged.addEventListener('DOMSubtreeModified', contentChanged, false);

}
clearDivs();
contentChanged();


function clearDivs() {
    document.getElementById("letters-guessed").innerHTML = "";
}

function contentChanged() {
    var dogBreeds = ["mastiff", "bernese", "bulldog", "pug", "maltese", "bulldog", "poodle"];

    var randomWord = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];
    var blankArray = [];
    var randomLength = randomWord.length;
    var wins = 0;
    var losses = 0;




    for (var i = 0; i < randomWord.length; i++) {
        console.log(randomWord);
        blankArray.push("_");
        document.getElementById("word-to-guess").innerHTML = blankArray.join(" ");
    }

    document.onkeydown = function (event) {
        var guess = String.fromCharCode(event.keyCode).toLowerCase();
        document.getElementById("letters-guessed").innerHTML += guess + ", ";

        for (j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === guess && randomLength > 1 && randomWord.indexOf(guess) >= 0) {
                blankArray[j] = guess;
                randomLength--;
                //had to increment guesses remaining because it kept decrementing it even if the
                guessesRemaining++;
                // console.log(randomLength);
                document.getElementById("word-to-guess").innerHTML = blankArray.join(" ");

                console.log("if");

            } else if (randomWord[j] === guess && randomLength <= 1) {
                blankArray[j] = guess;
                randomLength--;
                document.getElementById("word-to-guess").innerHTML = blankArray.join(" ");
                randomWord = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];
                var delayInMilliseconds = 100;

                setTimeout(function () {
                    wins++;
                    document.getElementById("wins").innerHTML = wins;
                    randomWord = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];

                }, delayInMilliseconds);
                // console.log(randomLength);
                console.log("elseif");

            }


        }
        if (randomWord[j] != guess) {
            //blankArray.includes(event.key)
            guessesRemaining--;
            document.getElementById("guesses-remaining").innerHTML = guessesRemaining;
        }

        if (guessesRemaining == 0) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            alert("You Lost!");
            randomWord = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];
            dogBreeds;
        }

        // console.log(guessesRemaining);
        // document.getElementById("text").innerHTML = guessesRemaining;
        // if (guessesRemaining == 0) {
        //     alert("you lose!")
        // }

        // var checkForLetter = document.getElementById("word-to-guess").innerHTML;
        // console.log(checkForLetter);
        // var letterString = checkForLetter.toString();
        // var randomWordString = randomWord.toString();
        // console.log("letterstring = ", letterString);
        // console.log("randomstring = ", randomWordString);
        // console.log("check indexof", letterString.indexOf("bernese"));

        // var guessesRemaining = 6;
        // console.log("checkForLetter works!");
        // --guessesRemaining;
        // document.getElementById("text").innerHTML = guessesRemaining;
        // console.log("guessesRemaining =", --guessesRemaining);



        // if (randomWord[j] !== guess) {
        //     //blankArray.includes(event.key)

        //     console.log(guessesRemaining);
        //     // console.log(guessesRemaining);
        //     // document.getElementById("text").innerHTML = guessesRemaining;
        //     // if (guessesRemaining == 0) {
        //     //     alert("you lose!")
        //     // }


        // }
    }
}