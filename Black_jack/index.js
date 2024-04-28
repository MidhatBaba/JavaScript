var card_1 = 10
var card_2 = 7
let sum = card_1+ card_2

if (sum <= 20) {
    console.log("Do you want to draw a new card? ")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! ")
} else {
    console.log("You're out of the game! ")
}