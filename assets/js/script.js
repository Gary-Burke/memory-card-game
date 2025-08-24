// Global Variables
let currentScore = 0;
let bestScore = 0;

// Wait for the DOM to load before executing functions
document.addEventListener("DOMContentLoaded", function () {
    // Get the card elements and assign them to array "cards"
    let cards = document.getElementsByClassName("card");

    // Add event listener to each card when clicked
    for (i of cards) {
        i.addEventListener("click", game);
    }

})