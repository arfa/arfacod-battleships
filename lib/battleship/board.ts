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

  render() {
    let boardString = '  ';
    for (let i = 0; i < this.boardSize; i++) {
      boardString += `${String.fromCharCode(65 + i)} `;
    }
    boardString += '\n';
    for (let i = 0; i < this.boardSize; i++) {
      boardString += `${i} `;
      for (let j = 0; j < this.boardSize; j++) {
        boardString += this.board[i][j] === 'S' ? '  ' : `${this.board[i][j]} `;
      }
      boardString += '\n';
    }
    return boardString;
  }
}
