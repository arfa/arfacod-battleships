import { Board } from './board';
import { BoardBuilder } from './boardBuilder';
import { Direction, Ship } from './ship';

export class Game {
  private board: Board;
  private ships: Ship[];

  constructor(shipBoardBuilder: BoardBuilder) {
    this.board = shipBoardBuilder.getBoard();
    this.ships = shipBoardBuilder.getShips();
  }

  getBoard() {
    return this.board;
  }

  getShips() {
    return this.ships;
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
    this.attack(row, col);

    if (this.isGameOver()) {
      console.log('Game over - you win!');
    }
  }
}
