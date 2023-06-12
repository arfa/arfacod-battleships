import { Grid } from './grid';
import { Ship, Direction } from './ship';
import { Strategy } from './types';

export class BoardBuilder {
  private grid: Grid;
  private ships: Ship[];
  private strategies: Record<string, Strategy> = {};

  constructor(grid: Grid) {
    this.grid = grid;
    this.ships = [];
  }

  use(strategy: Strategy) {
    this.strategies[strategy.name] = strategy;
    return this;
  }

  build(name: string, ...args: any) {
    if (!this.strategies[name]) {
      console.error(`Strategy ${name} does not exist`);
      return this;
    }

    this.strategies[name].build([this, ...args]);

    return this;
  }

  getGrid() {
    return this.grid;
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
        if (
          ship.col + i >= this.grid.getSize() ||
          this.grid.getValue(ship.row, ship.col + i) !== ' '
        ) {
          return false;
        }
      }
    } else {
      for (let j = 0; j < ship.size; j++) {
        if (
          ship.row + j >= this.grid.getSize() ||
          this.grid.getValue(ship.row + j, ship.col) !== ' '
        ) {
          return false;
        }
      }
    }
    return true;
  }

  private updateBoard(ship: Ship) {
    if (ship.direction === Direction.HORIZONTAL) {
      for (let i = 0; i < ship.size; i++) {
        this.grid.setValue(ship.row, ship.col + i, 'S');
      }
    } else {
      for (let i = 0; i < ship.size; i++) {
        this.grid.setValue(ship.row + i, ship.col, 'S');
      }
    }
  }
}
