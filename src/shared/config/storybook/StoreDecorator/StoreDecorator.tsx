import { Story } from "@storybook/react";

import { articleDetailsReducer } from "../../../../entities/Article/model/slice/articleDetailsSlice";
import { addCommentFormReducer } from "../../../../features/addCommentForm/model/slices/addCommentFormSlice";
import { profileReducer } from "../../../../features/editableProfileCard/model/slice/profileSlice";

import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { loginReducer } from "@/features/AuthByUsername/testing";
// eslint-disable-next-line ulbi-tv-plugin/public-api-imports
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/testing";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) => (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <StoryComponent />
    </StoreProvider>
  );
