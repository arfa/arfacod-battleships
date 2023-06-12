export class Grid {
  private gridSize: number;
  private grid: string[][];

  constructor(boardSize: number) {
    this.gridSize = boardSize;
    this.grid = this.initGrid();
  }

  initGrid() {
    const grid: string[][] = [];
    for (let i = 0; i < this.gridSize; i++) {
      const row: string[] = [];
      for (let j = 0; j < this.gridSize; j++) {
        row.push(' ');
      }
      grid.push(row);
    }
    return grid;
  }

  getValue(row: number, col: number) {
    return this.grid[row][col];
  }

  setValue(row: number, col: number, value: string) {
    this.grid[row][col] = value;
  }

  getSize() {
    return this.gridSize;
  }

  render() {
    let gridString = '  ';
    for (let i = 0; i < this.gridSize; i++) {
      gridString += `${String.fromCharCode(65 + i)} `;
    }
    gridString += '\n';
    for (let i = 0; i < this.gridSize; i++) {
      gridString += `${i} `;
      for (let j = 0; j < this.gridSize; j++) {
        gridString += this.grid[i][j] === 'S' ? '  ' : `${this.grid[i][j]} `;
      }
      gridString += '\n';
    }
    return gridString;
  }

  getSnapshot() {
    return this.grid.map((row) =>
      row.map((col) => {
        return col === 'S' ? ' ' : col;
      })
    );
  }
}
