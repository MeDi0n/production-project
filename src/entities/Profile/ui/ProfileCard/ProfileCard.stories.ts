import type { Meta, StoryObj } from "@storybook/react";

import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/storybook.jpg";

import { ProfileCard } from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "entities/ProfileCard",
  component: ProfileCard,
};
export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
  args: {
    data: {
      username: "admin",
      age: 22,
      country: Country.Ukraine,
      lastname: "rostik",
      first: "asd",
      city: "asf",
      currency: Currency.USD,
      avatar,
    },
  },
};

export const WithError: Story = {
  args: { error: "true" },
};

export const Loading: Story = {
  args: { isLoading: true },
};
