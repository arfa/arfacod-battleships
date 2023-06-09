import { render, screen } from '@testing-library/react';
import {
  Ship,
  Battleship,
  Destroyer,
  Board,
  Game,
  Direction,
  ShipSize,
  ShipOptions,
  ShipType,
} from '@/lib/battleship';

const BOARD_SIZE = 10;

const shipOptions: ShipOptions = {
  size: ShipSize.DESTROYER,
  type: ShipType.DESTROYER,
  hits: 0,
  sunk: false,
  col: 0,
  row: 0,
  direction: Direction.HORIZONTAL,
};

describe('Ship Entities', () => {
  describe('Ship', () => {
    it('should be able to be hit', () => {
      const ship = new Ship(shipOptions);
      expect(ship.hits).toBe(0);
      ship.hit();
      expect(ship.hits).toBe(1);
    });

    it('should be able to be sunk', () => {
      const ship = new Ship(shipOptions);
      expect(ship.sunk).toBe(false);
      ship.hit();
      ship.hit();
      ship.hit();
      ship.hit();
      expect(ship.sunk).toBe(true);
    });
  });

  describe('Battleship', () => {
    it('should be able to be created', () => {
      const ship = new Battleship(0, 0, Direction.HORIZONTAL);
      expect(ship.size).toBe(ShipSize.BATTLESHIP);
      expect(ship.type).toBe(ShipType.BATTLESHIP);
      expect(ship.hits).toBe(0);
      expect(ship.sunk).toBe(false);
      expect(ship.col).toBe(0);
      expect(ship.row).toBe(0);
      expect(ship.direction).toBe(Direction.HORIZONTAL);
    });
  });

  describe('Destroyer', () => {
    it('should be able to be created', () => {
      const ship = new Destroyer(0, 0, Direction.HORIZONTAL);
      expect(ship.size).toBe(ShipSize.DESTROYER);
      expect(ship.type).toBe(ShipType.DESTROYER);
      expect(ship.hits).toBe(0);
      expect(ship.sunk).toBe(false);
      expect(ship.col).toBe(0);
      expect(ship.row).toBe(0);
      expect(ship.direction).toBe(Direction.HORIZONTAL);
    });
  });
});

describe('Board', () => {
  it('should be able to be created', () => {
    const board = new Board(BOARD_SIZE);
    expect(board).toBeTruthy();
    expect(board.getBoardSize()).toBe(BOARD_SIZE);
  });

  it('should be able to place a ship', () => {
    const board = new Board(BOARD_SIZE);
    board.setBoardValue(0, 0, 'S');
    expect(board.getBoardValue(0, 0)).toBe('S');
  });
});

describe('Game', () => {
  it('should be able to be created', () => {
    const game = new Game(BOARD_SIZE);
    expect(game).toBeTruthy();
    expect(game.getBoard().getBoardSize()).toBe(BOARD_SIZE);
    expect(game.getShips().length).toBe(0);
  });
});
