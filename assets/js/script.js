// Global Variables
let currentScore = 0;
let bestScore = 0;
let selection1 = "";
let selection2 = "";

// Wait for the DOM to load before executing functions
document.addEventListener("DOMContentLoaded", function () {

    // Get the card elements and assign them to array "cards"
    // Call cardContent function
    let cards = document.getElementsByClassName("card");
    cardContent(cards);

    // Add event listener to each card when clicked
    for (let card of cards) {
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

    console.log(numbers);
}