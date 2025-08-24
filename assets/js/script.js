// Global Variables
let currentScore = 0;
let bestScore = 0;

// Wait for the DOM to load before executing functions
document.addEventListener("DOMContentLoaded", function () {
    // Get the card elements and assign them to array "cards"
    // Add event listener to each card when clicked
    let cards = document.getElementsByClassName("card");

    for (card of cards) {
        cardContent(cards);
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


/**
 * Assign images by classes to cards in matching pairs
 */
function cardContent(cards) {
    cards[0].classList.add("card-1");
    cards[1].classList.add("card-1");
    cards[2].classList.add("card-2");
    cards[3].classList.add("card-2");
    cards[4].classList.add("card-3");
    cards[5].classList.add("card-3");
    cards[6].classList.add("card-4");
    cards[7].classList.add("card-4");
    cards[8].classList.add("card-5");
    cards[9].classList.add("card-5");
    cards[10].classList.add("card-6");
    cards[11].classList.add("card-6");
    cards[12].classList.add("card-7");
    cards[13].classList.add("card-7");
    cards[14].classList.add("card-8");
    cards[15].classList.add("card-8");
    cards[16].classList.add("card-9");
    cards[17].classList.add("card-9");
    cards[18].classList.add("card-9");
    cards[19].classList.add("card-9");
}