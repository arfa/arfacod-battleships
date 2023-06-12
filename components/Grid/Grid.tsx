import { GridCell } from '../GridCell';

export type GridProps = {
  grid: string[][];
  onCellClick?: (row: number, col: number) => void;
};

export const Grid = ({ grid, onCellClick }: GridProps) => (
  <div className='inline-grid grid-cols-10 gap-1'>
    {grid.map((row, rowIndex) =>
      row.map((col, colIndex) => (
        <GridCell
          key={`${rowIndex}-${colIndex}`}
          value={col}
          onClick={() => onCellClick && onCellClick(rowIndex, colIndex)}
        />
      ))
    )}
  </div>
);
