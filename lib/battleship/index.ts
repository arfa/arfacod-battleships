import { Grid } from './grid';
import { BoardBuilder } from './boardBuilder';
import { Game } from './game';
import { Direction, ShipFactory, ShipType } from './ship';
import { input } from '@inquirer/prompts';

const BOARD_SIZE = 10;

export async function playGame() {
  const boardBuilder = new BoardBuilder(new Grid(BOARD_SIZE));
  const battleship = ShipFactory.createShip(ShipType.BATTLESHIP, 0, 0, Direction.HORIZONTAL);
  const destroyer = ShipFactory.createShip(ShipType.DESTROYER, 0, 3, Direction.VERTICAL);

  boardBuilder.placeShip(battleship).placeShip(destroyer);

  const game = new Game(boardBuilder);

  const grid = game.getGrid();

  while (!game.isGameOver()) {
    const answer = await input({ message: 'Enter a coordinate to attack (e.g. A1): ' });
    const formattedAnswer = answer.toUpperCase();

    if (formattedAnswer.match(/^[A-J][0-9]$/)) {
      const col = formattedAnswer.charCodeAt(0) - 65;
      const row = parseInt(formattedAnswer[1]);
      if (row < 0 || row >= grid.getSize() || col < 0 || col >= grid.getSize()) {
        console.log('coordinate out of bounds, please try again');
        continue;
      }

      game.play(row, col);
      console.log(grid.render());
    } else {
      console.log('Invalid coordinate, please try again');
    }
  }

  console.log('Game over - you win!');
}

playGame();
