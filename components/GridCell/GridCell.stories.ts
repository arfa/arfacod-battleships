import type { Meta, StoryObj } from '@storybook/react';

import { GridCell } from './GridCell';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'components/GridCell',
  component: GridCell,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: {
        type: 'select',
        options: ['S', 'X', 'O', ' '],
      },
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof GridCell>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    value: 'S',
  },
};
