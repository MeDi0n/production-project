import { ComponentStory, ComponentMeta } from "@storybook/react";
import "app/styles/index.scss";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title lorem ipsum",
  text: "Title lorem ipsum",
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Title lorem ipsum",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "Title lorem ipsum",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: "Title lorem ipsum",
  text: "Title lorem ipsum",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: "Title lorem ipsum",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: "Title lorem ipsum",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: "Title lorem ipsum",
  text: "Title lorem ipsum",
  theme: TextTheme.ERROR,
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
