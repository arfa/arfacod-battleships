import { Board } from './board';
import { Direction, Ship } from './ship';

export class Game {
  private board: Board;
  private ships: Ship[];

  constructor(boardSize: number) {
    this.board = new Board(boardSize);
    this.ships = [];
  }

  getBoard() {
    return this.board;
  }

  getShips() {
    return this.ships;
  }

  printShip(ship: Ship) {
    if (ship.direction === Direction.HORIZONTAL) {
      for (let i = 0; i < ship.size; i++) {
        this.board.setBoardValue(ship.row, ship.col + i, 'S');
      }
    } else {
      for (let i = 0; i < ship.size; i++) {
        this.board.setBoardValue(ship.row + i, ship.col, 'S');
      }
    }
  }

  placeShip(ship: Ship) {
    if (this.isValidPlacement(ship)) {
      this.printShip(ship);
      this.ships.push(ship);
    } else {
      console.log('Invalid ship placement');
    }
  }

  isValidPlacement(ship: Ship) {
    if (ship.direction === Direction.HORIZONTAL) {
      for (let i = 0; i < ship.size; i++) {
        if (this.board.getBoardValue(ship.row, ship.col + i) !== ' ') {
          return false;
        }
      }
    } else {
      for (let i = 0; i < ship.size; i++) {
        if (this.board.getBoardValue(ship.row + i, ship.col) !== ' ') {
          return false;
        }
      }
    }
    return true;
  }

  attack(row: number, col: number) {
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].inTarget(row, col)) {
        this.ships[i].hit();
        this.board.setBoardValue(row, col, 'X');
        return;
      }
    }
    this.board.setBoardValue(row, col, 'O');
  }

  isGameOver() {
    return this.ships.every((ship) => ship.isSunk());
  }

  play(row: number, col: number) {
    if (this.isGameOver()) {
      console.log('Game over');
      return;
    }

    this.attack(row, col);
  }
}
