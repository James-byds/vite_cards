import { Card_generator, Display } from "./card_handling.js";
import { AIDeck, PlayerDeck, score, scoreDisplay } from "./variables.js";
const Init = () => {
  AIDeck.length = 0; // Clear previous AI deck
  PlayerDeck.length = 0; // Clear previous player deck
  //Generating decks
  Card_generator(AIDeck);
  Card_generator(PlayerDeck);
  //Init score
  //score = 0;
  scoreDisplay.textContent = `Score: ${score}`;

  console.log("AI Deck:", AIDeck);
  console.log("Player Deck:", PlayerDeck);
  Display(PlayerDeck, AIDeck);
}

export { Init };