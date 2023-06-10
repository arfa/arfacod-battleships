export class Board {
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
