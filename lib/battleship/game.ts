import { Grid } from './grid';
import { BoardBuilder } from './boardBuilder';
import { Direction, Ship } from './ship';

export class Game {
  private grid: Grid;
  private ships: Ship[];

  constructor(shipBoardBuilder: BoardBuilder) {
    this.grid = shipBoardBuilder.getGrid();
    this.ships = shipBoardBuilder.getShips();
  }

  getGrid() {
    return this.grid;
  }

  getShips() {
    return this.ships;
  }

  attack(row: number, col: number) {
    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].inTarget(row, col)) {
        this.ships[i].hit();
        this.grid.setValue(row, col, 'X');
        return;
      }
    }
    this.grid.setValue(row, col, 'O');
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
