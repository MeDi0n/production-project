import { Button, ButtonSize, ThemeButton } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: "Text",
  theme: ThemeButton.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: "Text",
  theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: ">",
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: ">",
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: ">",
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};
