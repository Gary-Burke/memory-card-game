// Global Variables
let currentScore = 0;
let bestScore = 0;

// Wait for the DOM to load before executing functions
document.addEventListener("DOMContentLoaded", function () {
    // Get the card elements and assign them to array "cards"
    let cards = document.getElementsByClassName("card");

    /**
     * Assign blank card class to cover content of cards.
     * This creates the illusion that the cards have a front and back side.
     * Add event listener to each card when clicked
     */
    for (card of cards) {
        card.classList.add("card-blank");
        card.addEventListener("click", game);
    }


})