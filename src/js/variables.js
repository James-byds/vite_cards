//Global Variables
let AIDeck = []
let PlayerDeck = []
let score = 0
const board = document.querySelector("#board");
const playerContainer = board.querySelector("#player-hand");
const aiContainer = board.querySelector("#ai-card");
const scoreDisplay = board.querySelector("#score");
const skipButton = board.querySelector("#skip");

export { AIDeck, PlayerDeck, score, board, playerContainer, aiContainer, scoreDisplay, skipButton };
