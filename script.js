let player = {
    name: "Mo",
    chips: 250
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let msg = ""
let msgEl = document.getElementById("msg-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRand(){
    let num = Math.ceil(Math.random()*13)
    if (num === 1){
        return 11
    }
    else if (num > 10){
        return 10
    }
    else{
        return num 
    }
    
}

function startG(){
    isAlive = true
    let fCard = getRand()
    let sCard = getRand()
    cards = [fCard, sCard]
    sum = fCard + sCard
    renderG()
}
function renderG(){
    cardsEl.textContent = "Cards:"
        for (let count = 0; count < cards.length; count+= 1){
            cardsEl.textContent += " " + cards[count] 
        }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        msg = "Do you want to draw a new card?"
    } else if (sum === 21) {
        msg = "You've got blackjack!"
        hasBlackJack = true 
    } else {
        msg = "You're out bozzo!"
        isAlive = false
    }
    msgEl.textContent = msg
}

function newC(){
    if (isAlive && !hasBlackJack ){
     console.log("Drawing a new card from the deck...")
     let nCard = getRand()
     sum += nCard
     cards.push(nCard)
     console.log(cards)
     renderG()
    }
}

