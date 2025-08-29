// Global Variables
let currentScore = 0;
let bestScore = 0;
let selection1 = ""; // identify which card was selected 1st
let selection2 = ""; // identify which card was selected 2nd
let pair1 = ""; // identify which pair card belongs to
let pair2 = ""; // identify which pair card belongs to
let gameOver = 0; // Counter to determine when game is completed, 10 = completed

const cardAmount = 20; // Amount of cards that are used

// Wait for the DOM to load before executing functions
document.addEventListener("DOMContentLoaded", function () {

    // Get the card elements and assign them to html collection "cards"
    let cards = document.getElementsByClassName("card");
    cardContent(cards);
    faceDown(cards);
    currentScoreCal();
    bestScoreCal();

    // Add event listener to each card when clicked to execute game action
    for (let card of cards) {
        card.addEventListener("click", game);
    }

    // Start a new game when the current one has been completed
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function (e) {
            if (this.getAttribute("data-button") === "game-over-new-game") {
                gameOverBox();                
                reset();
                cardReset(cards);
                cardContent(cards);
                faceDown(cards);            
                currentScoreCal();
            }
        });
    }

    // Restart the game but cards still get randomized and best score remains
    let icons = document.getElementsByTagName("i");
    for (let icon of icons) {
        icon.addEventListener("click", function (e) {
            if (this.getAttribute("data-icon") === "restartGame") {
                reset();
                cardReset(cards);
                cardContent(cards);
                faceDown(cards);                
                currentScoreCal();
            }
        });
    }
});

/**
 * Assign blank card class to every card in order to cover content of cards.
 */
function faceDown(cards) {
    for (let card of cards) {
        card.classList.add("card-blank");
    }
}

/** 
 * Event listener click toggles card-blank class off.
 * Logs two selections of cards. If they match, then apply class hidden to both.
 * If they don't match, then toggle card-blank class back on for both and reset selections.
 */
function game(e) {
    let card = e.target;

    if (!selection1) { // logs selection 1
        card.classList.toggle("card-blank");
        selection1 = card.getAttribute("data-selection");
        pair1 = card.getAttribute("data-pair");
    } else if (selection1 !== card.getAttribute("data-selection")) { // logs selection2 and ensure the same card can't be selected
        card.classList.toggle("card-blank");
        selection2 = card.getAttribute("data-selection");
        pair2 = card.getAttribute("data-pair");
        ++currentScore;
    }
    currentScoreCal();
    /* 
    After some research, I came across this solution from stackoverflow regarding the setTimeout function: 
    https://stackoverflow.com/a/1183886/30846754
    */
    if (pair1 === pair2) { // if pairs match then apply class hidden
        ++gameOver;
        setTimeout(function () {
            let pairs = document.querySelectorAll(`[data-pair='${pair1}']`);
            for (let pair of pairs) {
                pair.classList.add("hidden");
            }

            if (gameOver === cardAmount / 2) { // 20 cards equals 10 pairs which triggers game over
                gameOverBox();
            }
            reset();
        }, 400);

    } else if (selection2) { // If two selection have been made but don't match, reset cards and selection        
        setTimeout(function () {
            document.querySelector(`[data-selection='${selection1}']`).classList.toggle("card-blank");
            document.querySelector(`[data-selection='${selection2}']`).classList.toggle("card-blank");
            reset();
        }, 500);
    }

}

/**
 * Assign images via classes to cards in matching pairs
 * Generate cardAmount unique numbers to randomize to class assignment, thus randomizing the card positions in the game
 */
function cardContent(cards) {

    // Generate 20 unique numbers between 0 - 19 for the 20 cards
    // Important to start at 0 to correspond with the array indexing
    let numbers = [];

    while (numbers.length < cardAmount) {
        var i = Math.floor(Math.random() * cardAmount);
        if (!numbers.includes(i)) {
            numbers.push(i);
        }
    };

    // Assign card classes in pairs to all cards
    for (let l = 0; l < cardAmount; ++l) {
        const cardType = Math.floor(l / 2) + 1;
        cards[numbers[l]].classList.add(`card-${cardType}`);
    };

    // Assign data-pair attribute to each card with a range of 20 unique numbers
    for (let j = 0; j < cardAmount; ++j) {
        const cardType = Math.floor(j / 2) + 1; // I was not sure how to achieve this logic by repeating a number twice in a loop and used chatGPT for this solution
        cards[numbers[j]].setAttribute("data-pair", cardType);
    };

    // Assign data-selection attribute to each card with a range of 20 unique numbers
    for (let k = 0; k < cardAmount; ++k) {
        cards[numbers[k]].setAttribute("data-selection", k + 1);
    };



    console.log("numbers: ", numbers); // !!!!!!!!!!!!!!!! Remember to DELETE when project is done !!!!!!!!!!!!!!!!!!!!
}

/**
 * Reset both selections and pairs
 */
function reset() {
    selection1 = "";
    selection2 = "";
    pair1 = "";
    pair2 = "";
}

/**
 * Toggles Game Over Box on/off and resets gameOver counter
 */
function gameOverBox() {
    document.getElementById("game-over").classList.toggle("visibility");
    bestScoreCal();
}

/** 
 * Removes all classes from cards and set each to .card only
 */
function cardReset(cards) {
    for (let card of cards) {
        card.className = "card";
    }
    gameOver = 0;
    currentScore = 0;
}

/** 
 * Calculate current score 
 */
function currentScoreCal() {
    document.querySelector("#current-score span").innerText = currentScore;
}

/** 
 * Calculate best score 
 */
function bestScoreCal() {
    if ((currentScore < bestScore) || (bestScore === 0)) {
        bestScore = currentScore;
        document.querySelector("#best-score span").innerText = bestScore;
        document.querySelector("#game-over p").innerText = "You have set a NEW Best Score!";
    } else {
        document.querySelector("#game-over p").innerText = "You have finished the game.";
    }
}