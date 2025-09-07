/* jshint esversion: 11 */

// Global Variables
let currentScore = 0; // Counter to determine the current live score
let bestScore = Number(localStorage.getItem("bestScore")) || 0; // Assign value from local storage or zero if no stored value
let selection1 = ""; // identify which card was selected 1st
let selection2 = ""; // identify which card was selected 2nd
let pair1 = ""; // identify which pair card belongs to
let pair2 = ""; // identify which pair card belongs to
let gameOver = 0; // Counter to determine when game is completed, 10 = completed
let isProcessing = false; // Prevent clicks during timeout - solution from chatGPT

const cardAmount = 20; // Amount of cards that are used

// Wait for the DOM to load before executing functions
document.addEventListener("DOMContentLoaded", function () {
    createCards();
    currentScoreCal();
    document.querySelector("#best-score span").innerText = bestScore;

    // Get the card elements and assign them to html collection "cards"
    let cards = document.getElementsByClassName("card");
    cardContent(cards);
    faceDown(cards);

    // Add event listener to each card when clicked to execute game action
    for (let card of cards) {
        card.addEventListener("click", game);
    }

    // Start a new game when the current one has been completed
    let newGameButton = document.querySelector('button[data-button="game-over-new-game"]');
    newGameButton.addEventListener("click", () => {
        newGame(cards);
        document.getElementById("restart-game-button").classList.toggle("visibility");
    });

    // Restart the game but cards still get randomized and best score remains
    let restartGameButton = document.querySelector(`i[data-icon="restartGame"]`);
    restartGameButton.addEventListener("click", () => {
        restartGame(cards);
    });
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
    if (isProcessing) return; // Ignore clicks if processing

    let card = e.target;

    if (!selection1) { // logs selection 1 if variable is an empty string
        card.classList.toggle("card-blank");
        selection1 = card.getAttribute("data-selection");
        pair1 = card.getAttribute("data-pair");
    } else if (selection1 !== card.getAttribute("data-selection")) { // logs selection2 and ensures the same card can't be selected
        card.classList.toggle("card-blank");
        selection2 = card.getAttribute("data-selection");
        pair2 = card.getAttribute("data-pair");
        ++currentScore;
    }
    currentScoreCal();

    // Solution regarding the use of the setTimeout function: https://stackoverflow.com/a/1183886/30846754
    if (pair1 === pair2) { // if pairs match then apply class hidden
        isProcessing = true;
        ++gameOver;
        setTimeout(function () {
            let pairs = document.querySelectorAll(`[data-pair='${pair1}']`);
            for (let pair of pairs) {
                pair.classList.add("hidden");
            }

            if (gameOver === cardAmount / 2) { // 20 cards equals 10 pairs which triggers game over
                gameOverBox();
                document.getElementById("restart-game-button").classList.toggle("visibility");
            }
            reset();
            isProcessing = false; // Unlock after timeout completes
        }, 800);

    } else if (selection2) { // If two selection have been made but don't match, reset cards and selection  
        isProcessing = true;
        setTimeout(function () {
            document.querySelector(`[data-selection='${selection1}']`).classList.toggle("card-blank");
            document.querySelector(`[data-selection='${selection2}']`).classList.toggle("card-blank");
            reset();
            isProcessing = false; // Unlock after timeout completes
        }, 800);
    }
}

/**
 * Assign images via classes to cards in matching pairs
 * Generate 20 unique numbers to randomize to class assignment, thus randomizing the card positions in the game
 */
function cardContent(cards) {

    // Generate 20 unique numbers between 0 - 19 for the 20 cards - inspiration from CI Lotto numbers challenge
    // Important to start at 0 to correspond with the array indexing
    let numbers = [];

    while (numbers.length < cardAmount) {
        var i = Math.floor(Math.random() * cardAmount);
        if (!numbers.includes(i)) {
            numbers.push(i);
        }
    }

    // Assign card classes and attribute data-pair in pairs to all cards
    for (let i = 0; i < cardAmount; ++i) {
        const cardType = Math.floor(i / 2) + 1;
        cards[numbers[i]].classList.add(`card-${cardType}`);
        cards[numbers[i]].setAttribute("data-pair", cardType);
    }

    // Assign data-selection attribute to each card with a range of 20 unique numbers
    for (let i = 0; i < cardAmount; ++i) {
        cards[numbers[i]].setAttribute("data-selection", i + 1);
    }
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
 * Toggles Game Over Box on/off and and calculate best score
 */
function gameOverBox() {
    document.getElementById("game-over").classList.toggle("visibility");
    bestScoreCal();
}

/** 
 * Resets all cards, gameOver and currentScore counter
 */
function cardReset(cards) {
    for (let card of cards) {
        card.className = "card";
    }
    gameOver = 0;
    currentScore = 0;
}

/** 
 * Display current score 
 */
function currentScoreCal() {
    document.querySelector("#current-score span").innerText = currentScore;
}

/** 
 * Calculate best score and display messages accordingly
 */
function bestScoreCal() {
    let message = "";

    if ((currentScore < bestScore) || (bestScore === 0)) {
        bestScore = currentScore;
        localStorage.setItem("bestScore", `${bestScore}`);
        document.querySelector("#best-score span").innerText = bestScore;
        message = "You have set a NEW Best Score!";

    } else if ((currentScore >= bestScore) && (currentScore <= (bestScore + 3))) {
        message = "That was ALMOST a new score!";
    } else if ((currentScore >= (bestScore + 4)) && (currentScore <= (bestScore + 7))) {
        message = "That was a GOOD effort!";
    } else {
        message = "Winning isn't everything...";
    }

    document.querySelector("#game-over p").innerText = message;
}

/** 
 * When the game is done, it resets all classes and values but keeps best score, i.e starts a new game
 */
function newGame(cards) {
    gameOverBox();
    reset();
    cardReset(cards);
    cardContent(cards);
    faceDown(cards);
    currentScoreCal();
}

/**
 * Starts a new game without finishing current one. Resets all classes and values but keeps best score, i.e starts a new game
 */
function restartGame(cards) {
    reset();    
    cardReset(cards);
    cardContent(cards);
    faceDown(cards);
    currentScoreCal();
}

/**
 * Create card elements based on cardAmount
 * Assign Bootstrap class col for responsiveness
 * Assign class Card for CSS
 */
function createCards() {
    for (let i = 1; i <= cardAmount; ++i) {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card");

        cardDiv.appendChild(card); // add card inside the col div
        document.getElementById("card-grid").appendChild(cardDiv); // add col to the grid
    }
}