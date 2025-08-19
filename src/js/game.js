import { Card_generator, Display } from "./card_handling.js";
import { AIDeck, PlayerDeck, score, scoreDisplay, playerContainer, aiContainer, skipButton, dropZone, draggableCards } from "./variables.js";
import { Init } from "./init.js";

//Init Dragged card
let pickedCard = null;

const resetGame = () => {
  alert("Game Over! Your final score is: " + score.value);
  // Reset the game
  Init();
}
//assiging dragged card to active
draggableCards.forEach((card) => {
  card.addEventListener("dragstart", (event) => {
    pickedCard = event.target;
    event.target.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move"; // Allow move effect
  });
});

//active drop handling
dropZone.addEventListener("dragover", (event) => {
  event.preventDefault(); // Prevent default to allow drop
  event.dataTransfer.dropEffect = "move"; // Show move effect
  event.target.classList.add('active');
});

dropZone.addEventListener("dragleave", (event) => {//remove active when out
  event.preventDefault();// Prevent default to allow drop
  event.target.classList.remove('active');
});

playerContainer.addEventListener("click", (event) => {
  //getting values
  const selectedCard = parseInt(event.target.textContent);
  const cardFind = aiContainer.querySelector(".card");
  const aiValue = parseInt(cardFind.textContent);
  //Handle player's card selection
  if (selectedCard === aiValue) {
    score.value += 1;
  }
  else {//score -- if the card doesn't match
    score.value -= 1;
    console.log("Card not found in AI's deck.");
  }
  // AIDeck = AIDeck.filter((card) => card !== cardValue);
 // Instead of filtering, we can use splice to remove the card because AIDeck is read only
  const indexValue = AIDeck.indexOf(aiValue);
  AIDeck.splice(indexValue, 1);
  console.log("Player Score:", score.value);
  //doing same for player deck
  const playerIndex = PlayerDeck.indexOf(selectedCard);
  PlayerDeck.splice(playerIndex, 1);
  scoreDisplay.textContent = `Score: ${score.value}`;
  if (AIDeck.length === 0) {
    resetGame(); // Reset the game if AI deck is empty
    return;
  }
  else {
  Display(PlayerDeck, AIDeck);
  }
});

skipButton.addEventListener("click", () => {
  //Handle skip action
  const cardValue = parseInt(aiContainer.querySelector(".card").textContent);
 // AIDeck = AIDeck.filter((card) => card !== cardValue);
 // Instead of filtering, we can use splice to remove the card because AIDeck is read only
  const indexValue = AIDeck.indexOf(cardValue);
  AIDeck.splice(indexValue, 1);
  console.log("Skipped card:", cardValue);
  if (AIDeck.length === 0) {
    resetGame(); // Reset the game if AI deck is empty
    return;
  }
  else {
    Display(PlayerDeck, AIDeck);
  }
});