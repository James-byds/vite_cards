import {aiContainer, playerContainer} from "./variables.js";
import { addDragListeners } from "./game.js";
const Display = (PlayerDeck, AIDeck) => {
  //Display player's hand and chosen ai card
  aiContainer.innerHTML = ""; // Clear previous AI card
  playerContainer.innerHTML = ""; // Clear previous cards
  //Player Display
  PlayerDeck.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    //add draggable attribute to each card
    cardElement.setAttribute("draggable", "true");
    cardElement.innerHTML = `
    <span class="sign sign-top">${card.sign}</span>
    <span>${card.value} </span>
    <span class="sign sign-bot">${card.sign}</span>
    `;// Display the card number
    cardElement.classList.add(card.color); // Add color class
    playerContainer.appendChild(cardElement);
  });
  //AI Display
  const aiCard = AIDeck[Math.floor(Math.random() * AIDeck.length)];
  const aiCardElement = document.createElement("div");
  aiCardElement.className = "card";
  aiCardElement.innerHTML = `
    <span class="sign sign-top">${aiCard.sign}</span>
    <span>${aiCard.value} </span>
    <span class="sign sign-bot">${aiCard.sign}</span>
    `;
  aiCardElement.classList.add(aiCard.color); // Add color class
  aiContainer.appendChild(aiCardElement);
  addDragListeners();
}

const Card_generator = (deck, length) => {
  //Generate starting deck with 5 unique cards
  let color = "red";
  const signs = ["♠", "♥", "♦", "♣"];
  while (deck.length < length) {
    let randomSign = signs[Math.floor(Math.random() * signs.length)];
    color = randomSign === "♥" || randomSign === "♦" ? "red" : "black";
    let card ={"value" : Math.floor(Math.random() * 10) + 1, "color": color, "sign": randomSign};
    let loop = true; //help to control the loop
    //Unique card for the deck
    console.log("Generating card:", card); // Debugging log
    do {
      const exist = deck.some(
        (genCard) => genCard.value === card.value && genCard.color === card.color && genCard.sign === card.sign
      );//.some checks if the card already exists in the deck and sends a boolean
      if (!exist) {
        deck.push(card);
        loop = false;  
        console.log("Card added to deck:", card); // Debugging log
        console.log("Current deck:", deck); // Debugging log
        console.log("Deck length:", deck.length); // Debugging log
      }
      else {
        console.log("Card already exists in deck, generating a new one.");
        console.log("Current card:", card); // Debugging log
        randomSign = signs[Math.floor(Math.random() * signs.length)];
        color = randomSign === "♥" || randomSign === "♦" ? "red" : "black";
        card ={"value" : Math.floor(Math.random() * 10) + 1, "color": color, "sign": randomSign};
      }
    } while (loop==true);
  }
  return deck;
}

export { Card_generator, Display };