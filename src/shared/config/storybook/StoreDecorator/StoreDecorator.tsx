import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { DeepPartial } from "redux";

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
