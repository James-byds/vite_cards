//Global Variables
let AIDeck = []
let PlayerDeck = []
let score ={"value" : 0} // Score object to allow reactivity in the UI
//HTML Elements
const board = document.querySelector("#board");
const playerContainer = board.querySelector("#player-hand");
const aiContainer = board.querySelector("#ai-card");
const scoreDisplay = board.querySelector("#score");
const skipButton = board.querySelector("#skip");
//drag'n'drop elements
const dropZone = board.querySelector(".drop");

export { AIDeck, PlayerDeck, score, board, playerContainer, aiContainer, scoreDisplay, skipButton, dropZone };
