import { useEffect } from 'react';
import { useBattleShip } from './useBattleShip';
import { Grid } from '@/components/Grid';

export type BattleShipsProps = {};

export const BattleShips = () => {
  const { grid, play: onCellClick, isGameOver } = useBattleShip();

  useEffect(() => {
    if (isGameOver) {
      setTimeout(() => {
        alert('Game Over');
      }, 500);
    }
  }, [isGameOver]);

  return <Grid grid={grid} onCellClick={onCellClick} disabled={isGameOver} />;
};
