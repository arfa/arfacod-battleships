export enum ShipType {
  BATTLESHIP = 'BATTLESHIP',
  DESTROYER = 'DESTROYER',
}

export enum ShipSize {
  BATTLESHIP = 5,
  DESTROYER = 4,
}

export enum Direction {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}

export interface ShipOptions {
  size: ShipSize;
  type: ShipType;
  hits: number;
  sunk: boolean;
  col: number;
  row: number;
  direction: Direction;
}

export class Ship {
  size: ShipSize;
  type: ShipType;
  hits: number;
  sunk: boolean;
  col: number;
  row: number;
  direction: Direction;

  constructor(options: ShipOptions) {
    this.size = options.size;
    this.type = options.type;
    this.hits = options.hits;
    this.sunk = options.sunk;
    this.col = options.col;
    this.row = options.row;
    this.direction = options.direction;
  }

  hit() {
    this.hits++;
    this.sunk = this.hits === this.size;
  }

  isSunk() {
    return this.sunk;
  }

  inTarget(row: number, col: number) {
    if (this.direction === Direction.HORIZONTAL) {
      return row === this.row && col >= this.col && col < this.col + this.size;
    } else {
      return col === this.col && row >= this.row && row < this.row + this.size;
    }
  }
}

export class Battleship extends Ship {
  constructor(col: number, row: number, direction: Direction) {
    super({
      size: ShipSize.BATTLESHIP,
      type: ShipType.BATTLESHIP,
      hits: 0,
      sunk: false,
      col,
      row,
      direction,
    });
  }
}

export class Destroyer extends Ship {
  constructor(col: number, row: number, direction: Direction) {
    super({
      size: ShipSize.DESTROYER,
      type: ShipType.DESTROYER,
      hits: 0,
      sunk: false,
      col,
      row,
      direction,
    });
  }
}

export class ShipFactory {
  static createShip(type: ShipType, col: number, row: number, direction: Direction) {
    switch (type) {
      case ShipType.BATTLESHIP:
        return new Battleship(col, row, direction);
      case ShipType.DESTROYER:
        return new Destroyer(col, row, direction);
      default:
        throw new Error('Invalid ship type');
    }
  }
}
