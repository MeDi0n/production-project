import { Popover } from '@headlessui/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'shared/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
