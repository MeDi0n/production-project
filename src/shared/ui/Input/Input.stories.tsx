import { ComponentStory, ComponentMeta } from "@storybook/react";
import "app/styles/index.scss";
import { Input } from "./Input";

export default {
  title: "pages/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => <Input />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Type text",
  value: "123",
};
