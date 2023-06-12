import React from 'react';

export type GridCellProps = {
  value: 'S' | 'X' | 'O' | ' ';
  width?: number;
  height?: number;
  onClick: () => void;
};

export const GridCell = ({ value, width = 50, height = 50, onClick }: GridCellProps) => (
  <button
    type='button'
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'
    style={{ width, height }}
    onClick={onClick}
  >
    {value}
  </button>
);
