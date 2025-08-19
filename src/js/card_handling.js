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
    cardElement.textContent = card.value; // Display the card number
    cardElement.classList.add(card.color); // Add color class
    playerContainer.appendChild(cardElement);
  });
  //AI Display
  const aiCard = AIDeck[Math.floor(Math.random() * AIDeck.length)];
  const aiCardElement = document.createElement("div");
  aiCardElement.className = "card";
  aiCardElement.textContent = aiCard.value; // Display the AI card number
  aiCardElement.classList.add(aiCard.color); // Add color class
  aiContainer.appendChild(aiCardElement);
  addDragListeners();
}

const Card_generator = (deck) => {
  //Generate starting deck with 5 unique cards
  const colors = ["red","black"];
  while (deck.length < 5) {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let card ={"value" : Math.floor(Math.random() * 10) + 1, "color": randomColor};
    let loop = true; //help to control the loop
    //Unique card for the deck
    do {
      const exist = deck.some(
        (genCard) => genCard.value === card.value && genCard.color === card.color
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
        randomColor = colors[Math.floor(Math.random() * colors.length)];
        card ={"value" : Math.floor(Math.random() * 10) + 1, "color": randomColor};
      }
    } while (loop==true);
  }
  return deck;
}

export { Card_generator, Display };