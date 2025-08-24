// Global Variables
let currentScore = 0;
let bestScore = 0;

// Wait for the DOM to load before executing functions
document.addEventListener("DOMContentLoaded", function () {
    // Get the card elements and assign them to array "cards"
    // Add event listener to each card when clicked
    let cards = document.getElementsByClassName("card");

    for (card of cards) {
        faceDown(card);
        card.addEventListener("click", game);
    }
})

/**
 * Assign blank card class to every card in order to cover content of cards.
 * This creates the illusion that the cards have a front and back side.
 */
function faceDown(card) {
    card.classList.add("card-blank");
}

/** 
 * Turn selected card around and reveal its content by toggling the blank class assigned to this card on/off.
 */
function game(e) {
    let card = e.target;
    card.classList.toggle("card-blank");
}