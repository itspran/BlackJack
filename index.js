let firstCard = 0;
let secondCard = 0;
let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;

let player = {
  name: "Per",
  chips: 145,
};

// let playerEl = document.querySelector("#player-el");
// playerEl.textContent = player.name + ": $" + player.chips;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function getRandomCard() {
  let c = Math.floor(Math.random() * 13 + 1);
  if (c === 1) return 11;
  if (c > 10) return 10;
  return c;
}

function printArray(arr) {
  let out = "";
  for (let i = 0; i < arr.length; i++) {
    out += arr[i] + " ";
  }
  return out;
}

function renderGame() {
  cardsEl.textContent = "Cards: " + printArray(cards);
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Draw another card?";
  } else if (sum === 21) {
    message = "Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You've Lost.";
    isAlive = false;
  }

  messageEl.textContent = message;
  console.log(message);
}
function newCard() {
  if (isAlive && !hasBlackJack) {
    console.log("Drawing a new card from the deck");

    let newcard = getRandomCard();
    cards.push(newcard);

    sum += newcard;

    renderGame();
  }
}
