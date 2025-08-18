
const resetGame = () => {
  alert("Game Over! Your final score is: " + score);
  // Reset the game
  AIDeck = [];
  PlayerDeck = [];
  Init();
}

playerContainer.addEventListener("click", (event) => {
  //getting values
  const selectedCard = parseInt(event.target.textContent);
  const cardFind = aiContainer.querySelector(".card");
  const aiValue = parseInt(cardFind.textContent);
  //Handle player's card selection
  if (selectedCard === aiValue) {
    score += 1;
  }
  else {//score -- if the card doesn't match
    score -= 1;
    console.log("Card not found in AI's deck.");
  }
  AIDeck = AIDeck.filter((card) => card !== aiValue);
  console.log("Player Score:", score);
  scoreDisplay.textContent = `Score: ${score}`;
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
  AIDeck = AIDeck.filter((card) => card !== cardValue);
  console.log("Skipped card:", cardValue);
  if (AIDeck.length === 0) {
    resetGame(); // Reset the game if AI deck is empty
    return;
  }
  else {
    Display(PlayerDeck, AIDeck);
  }
});