import { Card_generator, Display } from "./card_handling.js";
import { AIDeck, PlayerDeck, score, scoreDisplay, playerContainer, aiContainer, skipButton, dropZone } from "./variables.js";
import { Init } from "./init.js";

//Init Dragged card
let pickedCard = null;

const addDragListeners = () => {
  //assiging dragged card to active
  const draggableCards = playerContainer.querySelectorAll("[draggable]");
  console.log("Draggable cards:", draggableCards); // Debugging log
  draggableCards.forEach((card) => {
  card.addEventListener("dragstart", (event) => {
    console.log("Dragging card:", card.textContent); // Debugging log
    pickedCard = card;
    console.log("Picked card:", pickedCard.textContent); // Debugging log
    event.target.classList.add("dragging");
    event.dataTransfer.effectAllowed = "move"; // Allow move effect
  });
});
}

const resetGame = () => {
  alert("Game Over! Your final score is: " + score.value);
  // Reset the game
  Init();
  addDragListeners(); // Re-add drag listeners after reset
}

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

//drop game logic
dropZone.addEventListener("drop", (event) => {
  event.preventDefault(); // Prevent default behavior
  //getting values
  const cardValue = parseInt(pickedCard.textContent);
  const cardFind = aiContainer.querySelector(".card");
  const aiValue = parseInt(cardFind.textContent);
  //Handle player's card selection
  if (cardValue === aiValue) {
    score.value += 1;
  }
  else {//score -- if the card doesn't match
    score.value -= 1;
    console.log("Card not found in AI's deck.");
  }
  //append card to drop zone
  dropZone.appendChild(pickedCard);
  pickedCard.classList.remove("dragging");
  dropZone.classList.remove('active');
  
  // AIDeck = AIDeck.filter((card) => card !== cardValue);
 // Instead of filtering, we can use splice to remove the card because AIDeck is read only
  const indexValue = AIDeck.indexOf(aiValue);
  AIDeck.splice(indexValue, 1);
  console.log("Player Score:", score.value);
  //doing same for player deck
  const playerIndex = PlayerDeck.indexOf(cardValue);
  PlayerDeck.splice(playerIndex, 1);
  scoreDisplay.textContent = `Score: ${score.value}`;
  
  //Timeout to allow UI update
  setTimeout(() => {
    pickedCard.remove(); // Remove the card from the player's hand
    pickedCard = null; // Reset picked card
    if (AIDeck.length === 0) {
      resetGame(); // Reset the game if AI deck is empty
      return;
    }
    else {
      Display(PlayerDeck, AIDeck);
    }
  }, 1000);
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

export { addDragListeners };