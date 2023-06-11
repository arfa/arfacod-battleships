import { GameFactory } from './game';
import { input } from '@inquirer/prompts';

const BOARD_SIZE = 10;

export async function playGame() {
  const game = GameFactory.createGame(BOARD_SIZE);
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
