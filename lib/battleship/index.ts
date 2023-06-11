import { Grid } from './grid';
import { BoardBuilder } from './boardBuilder';
import { Game } from './game';
import { Direction, ShipFactory, ShipType } from './ship';
import { input } from '@inquirer/prompts';
import { RandomPlacer } from './boardPlacer';

const BOARD_SIZE = 10;

export async function playGame() {
  const grid = new Grid(BOARD_SIZE);
  const boardBuilder = new BoardBuilder(grid).use(new RandomPlacer()).build('random');
  const game = new Game(boardBuilder);

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
