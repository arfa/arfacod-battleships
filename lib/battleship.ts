enum ShipType {
  BATTLESHIP,
  DESTROYER,
}

enum ShipSize {
  BATTLESHIP = 5,
  DESTROYER = 4,
}

enum Direction {
  HORIZONTAL,
  VERTICAL,
}

interface ShipOptions {
  size: ShipSize;
  type: ShipType;
  hits: number;
  sunk: boolean;
  col: number;
  row: number;
  direction: Direction;
}

class Ship {
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
}

class Battleship extends Ship {
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

class Destroyer extends Ship {
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

class Board {
  private boardSize: number;
  private board: string[][];

  constructor(boardSize: number) {
    this.boardSize = boardSize;
    this.board = this.createBoard();
  }

  createBoard() {
    const board: string[][] = [];
    for (let i = 0; i < this.boardSize; i++) {
      const row: string[] = [];
      for (let j = 0; j < this.boardSize; j++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  }

  getBoardValue(row: number, col: number) {
    return this.board[row][col];
  }

  setBoardValue(row: number, col: number, value: string) {
    this.board[row][col] = value;
  }

  getBoardSize() {
    return this.boardSize;
  }
}

class Game {
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
}
