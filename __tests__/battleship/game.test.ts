import { Destroyer, Direction } from '@/lib/battleship/ship';
import { Game } from '@/lib/battleship/game';
import { Grid } from '@/lib/battleship/grid';
import { BoardBuilder } from '@/lib/battleship/boardBuilder';

const GRID_SIZE = 10;

describe('Game', () => {
  it('should be able to be created', () => {
    const boardBuilder = new BoardBuilder(new Grid(GRID_SIZE));
    boardBuilder.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));
    const game = new Game(boardBuilder);
    expect(game).toBeTruthy();
    expect(game.getGrid().getSize()).toBe(GRID_SIZE);
    expect(game.getShips().length).toBe(1);
  });

  it('should be able to hit a ship', () => {
    const boardBuilder = new BoardBuilder(new Grid(GRID_SIZE));
    boardBuilder.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));
    const game = new Game(boardBuilder);
    const grid = game.getGrid();

    game.play(0, 0);
    game.play(0, 2);

    // it should print the ship on the grid
    expect(grid.getValue(0, 0)).toBe('X');
    expect(grid.getValue(0, 1)).toBe('S');
    expect(grid.getValue(0, 2)).toBe('X');
    expect(grid.getValue(0, 3)).toBe('S');

    // it should add the ship to the array of ships
    expect(game.getShips().length).toBe(1);
  });

  it('should be able to sink a ship', () => {
    const boardBuilder = new BoardBuilder(new Grid(GRID_SIZE));
    boardBuilder.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));
    const game = new Game(boardBuilder);
    const grid = game.getGrid();

    game.play(0, 0);
    game.play(0, 1);
    game.play(0, 2);
    game.play(0, 3);

    // it should print the ship on the grid
    expect(grid.getValue(0, 0)).toBe('X');
    expect(grid.getValue(0, 1)).toBe('X');
    expect(grid.getValue(0, 2)).toBe('X');
    expect(grid.getValue(0, 3)).toBe('X');

    // it should add the ship to the array of ships
    expect(game.getShips().length).toBe(1);

    // it should sink the ship
    expect(game.getShips()[0].sunk).toBe(true);
  });

  it('should be able to miss a ship', () => {
    const boardBuilder = new BoardBuilder(new Grid(GRID_SIZE));
    boardBuilder.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));
    const game = new Game(boardBuilder);
    const grid = game.getGrid();

    game.play(1, 0);

    // it should print the ship on the grid
    expect(grid.getValue(1, 0)).toBe('O');

    // it should add the ship to the array of ships
    expect(game.getShips().length).toBe(1);
  });

  it('should be able to win the game', () => {
    const boardBuilder = new BoardBuilder(new Grid(GRID_SIZE));
    boardBuilder.placeShip(new Destroyer(0, 0, Direction.HORIZONTAL));
    const game = new Game(boardBuilder);
    const grid = game.getGrid();

    game.play(0, 0);
    game.play(0, 1);
    game.play(0, 2);
    game.play(0, 3);

    // it should print the ship on the grid
    expect(grid.getValue(0, 0)).toBe('X');
    expect(grid.getValue(0, 1)).toBe('X');
    expect(grid.getValue(0, 2)).toBe('X');
    expect(grid.getValue(0, 3)).toBe('X');

    // it should add the ship to the array of ships
    expect(game.getShips().length).toBe(1);

    // it should sink the ship
    expect(game.getShips()[0].sunk).toBe(true);

    // it should win the game
    expect(game.isGameOver()).toBe(true);
  });
});
