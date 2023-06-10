import { Board } from './board';
import { Ship, Direction } from './ship';

export class BoardBuilder {
  private board: Board;
  private ships: Ship[];

  constructor(board: Board) {
    this.board = board;
    this.ships = [];
  }

  getBoard() {
    return this.board;
  }

  getShips() {
    return this.ships;
  }

  placeShip(ship: Ship) {
    if (this.isValidPlacement(ship)) {
      this.updateBoard(ship);
      this.ships.push(ship);
    } else {
      console.log(
        `Invalid ship placement for ${ship.type}: \n${ship.row}, ${ship.col} ${ship.direction}`
      );
    }

    return this;
  }

  private isValidPlacement(ship: Ship) {
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

  private updateBoard(ship: Ship) {
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
}
