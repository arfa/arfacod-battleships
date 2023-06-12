import { useCallback, useMemo, useState } from 'react';
import { GameFactory } from '@/lib/battleship/game';

const BOARD_SIZE = 10;

export function useBattleShip(size = BOARD_SIZE) {
  // setAttacksCount helps to re-render the component when the store changes
  // TODO: use useSyncExternalStore
  const [attacksCount, setAttacksCount] = useState(0);
  const game = useMemo(() => {
    return GameFactory.createGame(size);
  }, []);

  const play = useCallback(
    (row: number, col: number) => {
      game.play(row, col);
      setAttacksCount(attacksCount + 1);
    },
    [game, attacksCount]
  );

  const isGameOver = useMemo(() => {
    return game.isGameOver();
  }, [attacksCount]);

  const grid = useMemo(() => {
    return game.getGrid().getSnapshot();
  }, [attacksCount]);

  return {
    play,
    isGameOver,
    grid,
  };
}
