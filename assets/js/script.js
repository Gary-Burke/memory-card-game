// Global Variables
let currentScore = 0;
let bestScore = 0;
let selection1 = ""; // identify which card was selected 1st
let selection2 = ""; // identify which card was selected 2nd
let pair1 = ""; // identify which pair card belongs to
let pair2 = ""; // identify which pair card belongs to
let gameOver = 0; // Counter to determine when game is completed, 10 = completed

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
                gameOverReset();
                reset();
                cardReset(cards);
                cardContent(cards);
                faceDown(cards);
                currentScore = 0;
                currentScoreCal();
            }
        })
    }

    // Restart the game but cards still get randomized
    let icons = document.getElementsByTagName("i");
    for (let icon of icons) {
        icon.addEventListener("click", function (e) {
            if (this.getAttribute("data-icon") === "restartGame") {
                gameOverReset();
                reset();
                cardReset(cards);
                cardContent(cards);
                faceDown(cards);
                currentScore = 0;
                currentScoreCal();
            }
        })
    }
})

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

    if (!selection1) {
        card.classList.toggle("card-blank");
        selection1 = card.getAttribute("data-selection");
        pair1 = card.getAttribute("data-pair");
    } else {
        selection2 = card.getAttribute("data-selection");
        pair2 = card.getAttribute("data-pair");

        if (selection1 !== selection2) {
            card.classList.toggle("card-blank");
            ++currentScore;
        }
        
    }

    /* 
    After some research, I came across this solution from stackoverflow regarding the setTimeout function: 
    https://stackoverflow.com/a/1183886/30846754
    */
    if ((pair1 === pair2) && (selection1 !== selection2)) { // if pairs match then apply class hidden
        ++gameOver;
        setTimeout(function () {
            let pairs = document.querySelectorAll(`[data-pair='${pair1}']`);
            for (let pair of pairs) {
                pair.classList.add("hidden");
            }

            if (gameOver === 10) { // 20 tiles equals 10 pairs which triggers game over
                gameOverBox();
            }
            reset();
        }, 800);

    } else if (selection2 && (pair1 !== pair2)) { // If two selection have been made but don't match, reset cards and selection        
        setTimeout(function () {
            document.querySelector(`[data-selection='${selection1}']`).classList.toggle("card-blank");
            document.querySelector(`[data-selection='${selection2}']`).classList.toggle("card-blank");
            reset();
        }, 800);
    }
    currentScoreCal();
}

/**
 * Assign images via classes to cards in matching pairs
 * Generate 20 unique numbers to randomize to class assignment, thus randomizing the card positions in the game
 */
function cardContent(cards) {

    // Generate 20 unique numbers between 0 - 19 for the 20 cards
    // Important to start at 0 to correspond with the array indexing
    let numbers = [];

    while (numbers.length < 20) {
        var i = Math.floor(Math.random() * 20);
        if (!numbers.includes(i)) {
            numbers.push(i);
        }
    }

    cards[numbers[0]].classList.add("card-1");
    cards[numbers[1]].classList.add("card-1");
    cards[numbers[2]].classList.add("card-2");
    cards[numbers[3]].classList.add("card-2");
    cards[numbers[4]].classList.add("card-3");
    cards[numbers[5]].classList.add("card-3");
    cards[numbers[6]].classList.add("card-4");
    cards[numbers[7]].classList.add("card-4");
    cards[numbers[8]].classList.add("card-5");
    cards[numbers[9]].classList.add("card-5");
    cards[numbers[10]].classList.add("card-6");
    cards[numbers[11]].classList.add("card-6");
    cards[numbers[12]].classList.add("card-7");
    cards[numbers[13]].classList.add("card-7");
    cards[numbers[14]].classList.add("card-8");
    cards[numbers[15]].classList.add("card-8");
    cards[numbers[16]].classList.add("card-9");
    cards[numbers[17]].classList.add("card-9");
    cards[numbers[18]].classList.add("card-10");
    cards[numbers[19]].classList.add("card-10");

    cards[numbers[0]].setAttribute("data-pair", "1");
    cards[numbers[1]].setAttribute("data-pair", "1");
    cards[numbers[2]].setAttribute("data-pair", "2");
    cards[numbers[3]].setAttribute("data-pair", "2");
    cards[numbers[4]].setAttribute("data-pair", "3");
    cards[numbers[5]].setAttribute("data-pair", "3");
    cards[numbers[6]].setAttribute("data-pair", "4");
    cards[numbers[7]].setAttribute("data-pair", "4");
    cards[numbers[8]].setAttribute("data-pair", "5");
    cards[numbers[9]].setAttribute("data-pair", "5");
    cards[numbers[10]].setAttribute("data-pair", "6");
    cards[numbers[11]].setAttribute("data-pair", "6");
    cards[numbers[12]].setAttribute("data-pair", "7");
    cards[numbers[13]].setAttribute("data-pair", "7");
    cards[numbers[14]].setAttribute("data-pair", "8");
    cards[numbers[15]].setAttribute("data-pair", "8");
    cards[numbers[16]].setAttribute("data-pair", "9");
    cards[numbers[17]].setAttribute("data-pair", "9");
    cards[numbers[18]].setAttribute("data-pair", "10");
    cards[numbers[19]].setAttribute("data-pair", "10");

    cards[numbers[0]].setAttribute("data-selection", "1");
    cards[numbers[1]].setAttribute("data-selection", "2");
    cards[numbers[2]].setAttribute("data-selection", "3");
    cards[numbers[3]].setAttribute("data-selection", "4");
    cards[numbers[4]].setAttribute("data-selection", "5");
    cards[numbers[5]].setAttribute("data-selection", "6");
    cards[numbers[6]].setAttribute("data-selection", "7");
    cards[numbers[7]].setAttribute("data-selection", "8");
    cards[numbers[8]].setAttribute("data-selection", "9");
    cards[numbers[9]].setAttribute("data-selection", "10");
    cards[numbers[10]].setAttribute("data-selection", "11");
    cards[numbers[11]].setAttribute("data-selection", "12");
    cards[numbers[12]].setAttribute("data-selection", "13");
    cards[numbers[13]].setAttribute("data-selection", "14");
    cards[numbers[14]].setAttribute("data-selection", "15");
    cards[numbers[15]].setAttribute("data-selection", "16");
    cards[numbers[16]].setAttribute("data-selection", "17");
    cards[numbers[17]].setAttribute("data-selection", "18");
    cards[numbers[18]].setAttribute("data-selection", "19");
    cards[numbers[19]].setAttribute("data-selection", "20");

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
}

/**
 * Reset gameOver counter
 */
function gameOverReset() {
    gameOver = 0;
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