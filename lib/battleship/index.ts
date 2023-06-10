import { Board } from './board';
import { BoardBuilder } from './boardBuilder';
import { Game } from './game';
import { Destroyer, Battleship, Direction } from './ship';

export function playGame() {
  const ships = [
    new Destroyer(0, 0, Direction.HORIZONTAL),
    new Battleship(1, 1, Direction.VERTICAL),
  ];

  const shipPlacer = new BoardBuilder(new Board(10), ships);
  const game = new Game(shipPlacer);

  const board = game.getBoard();

  while (!game.isGameOver()) {
    // wait 3 seconds before prompting for input, using promises
    const coordInput = prompt('Enter a coordinate to attack (e.g. A1): ');
    const coord = coordInput?.split('');
    if (!coord || coord.length !== 2) {
      console.log('Invalid coordinate');
      continue;
    }

    const col = Number(coord[0].toUpperCase().charCodeAt(0) - 65);
    const row = Number(coord[1]);

    if (row < 0 || row >= board.getBoardSize() || col < 0 || col >= board.getBoardSize()) {
      console.log('Invalid coordinate');
      continue;
    }

    game.play(Number(row), Number(col));
    console.log(board.render());
  }

  console.log('Game over - you win!');
}
