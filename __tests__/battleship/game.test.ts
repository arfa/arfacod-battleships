import { Destroyer, Direction } from '@/lib/battleship/ship';
import { Game } from '@/lib/battleship/game';

const BOARD_SIZE = 10;

describe('Game', () => {
  it('should be able to be created', () => {
    const game = new Game(BOARD_SIZE);
    expect(game).toBeTruthy();
    expect(game.getBoard().getBoardSize()).toBe(BOARD_SIZE);
    expect(game.getShips().length).toBe(0);
  });

  it('should be able to place a ship', () => {
    const game = new Game(BOARD_SIZE);
    const board = game.getBoard();
    game.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));

    // it should print the ship on the board
    expect(board.getBoardValue(0, 0)).toBe('S');
    expect(board.getBoardValue(0, 1)).toBe('S');
    expect(board.getBoardValue(0, 2)).toBe('S');
    expect(board.getBoardValue(0, 3)).toBe('S');

    // it should add the ship to the array of ships
    expect(game.getShips().length).toBe(1);
  });

  it('should not be able to place a ship if it is out of bounds', () => {
    const game = new Game(BOARD_SIZE);
    const board = game.getBoard();

    // it should not print the ship on the board
    expect(board.getBoardValue(BOARD_SIZE - 1, BOARD_SIZE - 1)).toBe(' ');

    // it should not add the ship to the array of ships
    expect(game.getShips().length).toBe(0);
  });

  it('should not be able to place a ship if it overlaps another ship', () => {
    const game = new Game(BOARD_SIZE);
    const board = game.getBoard();

    game.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));
    game.placeShip(new Destroyer(0, 0, Direction.VERTICAL));

    // it should print the first ship on the board
    expect(board.getBoardValue(0, 0)).toBe('S');
    expect(board.getBoardValue(0, 1)).toBe('S');
    expect(board.getBoardValue(0, 2)).toBe('S');
    expect(board.getBoardValue(0, 3)).toBe('S');

    // it should add one ship to the array of ships
    expect(game.getShips().length).toBe(1);

    // it should not print the second ship on the board
    expect(board.getBoardValue(0, 0)).toBe('S');
    expect(board.getBoardValue(1, 0)).toBe(' ');
    expect(board.getBoardValue(2, 0)).toBe(' ');
    expect(board.getBoardValue(3, 0)).toBe(' ');
  });

  it('should be able to hit a ship', () => {
    const game = new Game(BOARD_SIZE);
    const board = game.getBoard();

    game.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));
    game.play(0, 0);
    game.play(0, 2);

    // it should print the ship on the board
    expect(board.getBoardValue(0, 0)).toBe('X');
    expect(board.getBoardValue(0, 1)).toBe('S');
    expect(board.getBoardValue(0, 2)).toBe('X');
    expect(board.getBoardValue(0, 3)).toBe('S');

    // it should add the ship to the array of ships
    expect(game.getShips().length).toBe(1);
  });

  it('should be able to sink a ship', () => {
    const game = new Game(BOARD_SIZE);
    const board = game.getBoard();

    game.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));
    game.play(0, 0);
    game.play(0, 1);
    game.play(0, 2);
    game.play(0, 3);

    // it should print the ship on the board
    expect(board.getBoardValue(0, 0)).toBe('X');
    expect(board.getBoardValue(0, 1)).toBe('X');
    expect(board.getBoardValue(0, 2)).toBe('X');
    expect(board.getBoardValue(0, 3)).toBe('X');

    // it should add the ship to the array of ships
    expect(game.getShips().length).toBe(1);

    // it should sink the ship
    expect(game.getShips()[0].sunk).toBe(true);
  });

  it('should be able to miss a ship', () => {
    const game = new Game(BOARD_SIZE);
    const board = game.getBoard();

    game.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));
    game.play(1, 0);

    // it should print the ship on the board
    expect(board.getBoardValue(1, 0)).toBe('O');

    // it should add the ship to the array of ships
    expect(game.getShips().length).toBe(1);
  });

  it('should be able to win the game', () => {
    const game = new Game(BOARD_SIZE);
    const board = game.getBoard();

    game.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));
    game.play(0, 0);
    game.play(0, 1);
    game.play(0, 2);
    game.play(0, 3);

    // it should print the ship on the board
    expect(board.getBoardValue(0, 0)).toBe('X');
    expect(board.getBoardValue(0, 1)).toBe('X');
    expect(board.getBoardValue(0, 2)).toBe('X');
    expect(board.getBoardValue(0, 3)).toBe('X');

    // it should add the ship to the array of ships
    expect(game.getShips().length).toBe(1);

    // it should sink the ship
    expect(game.getShips()[0].sunk).toBe(true);

    // it should win the game
    expect(game.isGameOver()).toBe(true);
  });
});