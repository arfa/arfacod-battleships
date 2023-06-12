export type GridCellProps = {
  value: string;
  width?: number;
  height?: number;
  disabled?: boolean;
  onClick: () => void;
};

export const GridCell = ({ value, width = 50, height = 50, disabled, onClick }: GridCellProps) => (
  <button
    type='button'
    className='bg-blue-500 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 px-4'
    style={{ width, height }}
    onClick={onClick}
    disabled={disabled}
  >
    {value}
  </button>
);
