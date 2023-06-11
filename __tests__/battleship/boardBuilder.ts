import { Destroyer, Direction } from '@/lib/battleship/ship';
import { Grid } from '@/lib/battleship/grid';
import { BoardBuilder } from '@/lib/battleship/boardBuilder';

const BOARD_SIZE = 10;

describe('Board Builder', () => {
  it('should be able to be created', () => {
    const boardBuilder = new BoardBuilder(new Grid(BOARD_SIZE));
    boardBuilder.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));
    expect(boardBuilder.getGrid().getSize()).toBe(BOARD_SIZE);
    expect(boardBuilder.getShips().length).toBe(1);
  });

  it('should be able to place a ship', () => {
    const boardBuilder = new BoardBuilder(new Grid(BOARD_SIZE));
    boardBuilder.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));

    const grid = boardBuilder.getGrid();

    // it should print the ship on the grid
    expect(grid.getValue(0, 0)).toBe('S');
    expect(grid.getValue(0, 1)).toBe('S');
    expect(grid.getValue(0, 2)).toBe('S');
    expect(grid.getValue(0, 3)).toBe('S');

    // it should add the ship to the array of ships
    expect(boardBuilder.getShips().length).toBe(1);
  });

  it('should not be able to place a ship if it is out of bounds', () => {
    const boardBuilder = new BoardBuilder(new Grid(BOARD_SIZE));
    boardBuilder.placeShip(new Destroyer(BOARD_SIZE - 1, BOARD_SIZE - 1, Direction.HORIZONTAL));

    const grid = boardBuilder.getGrid();

    // it should not print the ship on the grid
    expect(grid.getValue(BOARD_SIZE - 1, BOARD_SIZE - 1)).toBe(' ');

    // it should not add the ship to the array of ships
    expect(boardBuilder.getShips().length).toBe(0);
  });

  it('should not be able to place a ship if it overlaps another ship', () => {
    const boardBuilder = new BoardBuilder(new Grid(BOARD_SIZE));
    boardBuilder
      .placeShip(new Destroyer(0, 0, Direction.HORIZONTAL))
      .placeShip(new Destroyer(0, 0, Direction.VERTICAL));

    const grid = boardBuilder.getGrid();

    // it should print the first ship on the grid
    expect(grid.getValue(0, 0)).toBe('S');
    expect(grid.getValue(0, 1)).toBe('S');
    expect(grid.getValue(0, 2)).toBe('S');
    expect(grid.getValue(0, 3)).toBe('S');

    // it should add one ship to the array of ships
    expect(boardBuilder.getShips().length).toBe(1);

    // it should not print the second ship on the grid
    expect(grid.getValue(0, 0)).toBe('S');
    expect(grid.getValue(1, 0)).toBe(' ');
    expect(grid.getValue(2, 0)).toBe(' ');
    expect(grid.getValue(3, 0)).toBe(' ');
  });
});
