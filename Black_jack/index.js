let card_1 = 10
let card_2 = 11
let sum = card_1+ card_2
let hasBlackJack = false
let isAlive = true
let message = ""

function Start_game(){
if (sum <= 20) {
    message= "Do you want to draw a new card?"
} else if (sum === 21) {
    message ="Wohoo! You've got Blackjack! "
    hasBlackJack = true
} else {
    message="You're out of the game! "
    isAlive = false
}
console.log(message)
}