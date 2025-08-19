import { Card_generator, Display } from "./card_handling.js";
import { AIDeck, PlayerDeck, score, scoreDisplay } from "./variables.js";
import { addDragListeners } from "./game.js";
const Init = () => {
  AIDeck.length = 0; // Clear previous AI deck
  PlayerDeck.length = 0; // Clear previous player deck
  //Generating decks
  Card_generator(AIDeck, 20);
  Card_generator(PlayerDeck, 5);
  //Init score
  score.value = 0;
  scoreDisplay.textContent = `Score: ${score.value}`;

  console.log("AI Deck:", AIDeck);
  console.log("Player Deck:", PlayerDeck);
  Display(PlayerDeck, AIDeck);
  addDragListeners();
}

export { Init };