import type { Meta, StoryObj } from '@storybook/react';

import { BattleShips } from '../containers/BattleShips/BattleShips';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'container/BattleShips',
  component: BattleShips,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BattleShips>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
