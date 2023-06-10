import { Board } from '@/lib/battleship/board';

const BOARD_SIZE = 10;

describe('Board', () => {
  it('should be able to be created', () => {
    const board = new Board(BOARD_SIZE);
    expect(board).toBeTruthy();
    expect(board.getBoardSize()).toBe(BOARD_SIZE);
  });

  it('should be able to place a ship', () => {
    const board = new Board(BOARD_SIZE);
    board.setBoardValue(0, 0, 'S');
    expect(board.getBoardValue(0, 0)).toBe('S');
  });
});
