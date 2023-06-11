import { Grid } from '@/lib/battleship/grid';

const GRID_SIZE = 10;

describe('Board', () => {
  it('should be able to be created', () => {
    const grid = new Grid(GRID_SIZE);
    expect(grid).toBeTruthy();
    expect(grid.getSize()).toBe(GRID_SIZE);
  });

  it('should be able to place a ship', () => {
    const board = new Grid(GRID_SIZE);
    board.setValue(0, 0, 'S');
    expect(board.getValue(0, 0)).toBe('S');
  });
});
