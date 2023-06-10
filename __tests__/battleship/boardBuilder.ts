import { Destroyer, Direction } from '@/lib/battleship/ship';
import { Board } from '@/lib/battleship/board';
import { BoardBuilder } from '@/lib/battleship/boardBuilder';

const BOARD_SIZE = 10;

describe('Board Builder', () => {
  it('should be able to be created', () => {
    const boardBuilder = new BoardBuilder(new Board(BOARD_SIZE));
    boardBuilder.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));
    expect(boardBuilder.getBoard().getBoardSize()).toBe(BOARD_SIZE);
    expect(boardBuilder.getShips().length).toBe(1);
  });

  it('should be able to place a ship', () => {
    const boardBuilder = new BoardBuilder(new Board(BOARD_SIZE));
    boardBuilder.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));

    const board = boardBuilder.getBoard();

    // it should print the ship on the board
    expect(board.getBoardValue(0, 0)).toBe('S');
    expect(board.getBoardValue(0, 1)).toBe('S');
    expect(board.getBoardValue(0, 2)).toBe('S');
    expect(board.getBoardValue(0, 3)).toBe('S');

    // it should add the ship to the array of ships
    expect(boardBuilder.getShips().length).toBe(1);
  });

  it('should not be able to place a ship if it is out of bounds', () => {
    const boardBuilder = new BoardBuilder(new Board(BOARD_SIZE));
    boardBuilder.placeShip(new Destroyer(BOARD_SIZE - 1, BOARD_SIZE - 1, Direction.HORIZONTAL));

    const board = boardBuilder.getBoard();

    // it should not print the ship on the board
    expect(board.getBoardValue(BOARD_SIZE - 1, BOARD_SIZE - 1)).toBe(' ');

    // it should not add the ship to the array of ships
    expect(boardBuilder.getShips().length).toBe(0);
  });

  it('should not be able to place a ship if it overlaps another ship', () => {
    const boardBuilder = new BoardBuilder(new Board(BOARD_SIZE));
    boardBuilder
      .placeShip(new Destroyer(0, 0, Direction.HORIZONTAL))
      .placeShip(new Destroyer(0, 0, Direction.VERTICAL));

    const board = boardBuilder.getBoard();

    // it should print the first ship on the board
    expect(board.getBoardValue(0, 0)).toBe('S');
    expect(board.getBoardValue(0, 1)).toBe('S');
    expect(board.getBoardValue(0, 2)).toBe('S');
    expect(board.getBoardValue(0, 3)).toBe('S');

    // it should add one ship to the array of ships
    expect(boardBuilder.getShips().length).toBe(1);

    // it should not print the second ship on the board
    expect(board.getBoardValue(0, 0)).toBe('S');
    expect(board.getBoardValue(1, 0)).toBe(' ');
    expect(board.getBoardValue(2, 0)).toBe(' ');
    expect(board.getBoardValue(3, 0)).toBe(' ');
  });
});
