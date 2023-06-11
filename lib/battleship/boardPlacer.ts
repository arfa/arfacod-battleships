import { BoardBuilder } from './boardBuilder';
import { Direction, ShipFactory, ShipType } from './ship';
import { Strategy } from './types';

export class RandomPlacer implements Strategy {
  name = 'random';

  build(args: any[]) {
    const boardBuilder: BoardBuilder = args[0];
    const grid = boardBuilder.getGrid();
    const ships = boardBuilder.getShips();

    const shipTypes = [ShipType.BATTLESHIP, ShipType.DESTROYER, ShipType.DESTROYER];

    while (ships.length < shipTypes.length) {
      const type = shipTypes[ships.length];
      const col = Math.floor(Math.random() * grid.getSize());
      const row = Math.floor(Math.random() * grid.getSize());
      const direction = Math.random() > 0.5 ? Direction.HORIZONTAL : Direction.VERTICAL;

      const ship = ShipFactory.createShip(type, col, row, direction);

      boardBuilder.placeShip(ship);
    }
  }
}
