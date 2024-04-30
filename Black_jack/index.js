let card_1 =57
let card_2 =
let cards = [firstCard, secondCard]
let sum = card_1 + card_2
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame()
{
    renderGame()
}

function newCard()
{
    let n_card=4
     sum += n_card
    cards.push(cards)
    console.log(cards)
     renderGame()
}


function renderGame()
{
    document.querySelector(".card-el").textContent= "Cards :"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i]
    }
if (sum <= 20) {
    message= "Do you want to draw a new card?"
} 
else if (sum === 21) 
{
    message ="You've got Blackjack! "
    hasBlackJack = true
} else {
    message="You're out of the game! "
    isAlive = false
}
document.getElementById("message-el").textContent= message
document.querySelector(".sum-el").textContent= "Sum :" +" " + sum
}
