import {aiContainer, playerContainer} from "./variables.js";
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
    cardElement.textContent = card; // Display the card number
    playerContainer.appendChild(cardElement);
  });
  //AI Display
  const aiCard = AIDeck[Math.floor(Math.random() * AIDeck.length)];
  const aiCardElement = document.createElement("div");
  aiCardElement.className = "card";
  aiCardElement.textContent = aiCard; // Display the AI card number
  aiContainer.appendChild(aiCardElement);
}

const Card_generator = (deck) => {
  //Generate starting deck with 5 unique cards
  while (deck.length < 5) {
    let card = Math.floor(Math.random() * 10) + 1;
    let loop = true; //help to control the loop
    //Unique card for the deck
    do {
      if (!deck.includes(card)) {
        deck.push(card);
        loop = false;  
        console.log("Card added to deck:", card); // Debugging log
        console.log("Current deck:", deck); // Debugging log
        console.log("Deck length:", deck.length); // Debugging log
      }
      else {
        console.log("Card already exists in deck, generating a new one.");
        card = Math.floor(Math.random() * 10) + 1;
      }
    } while (loop==true);
  }
  return deck;
}

export { Card_generator, Display };