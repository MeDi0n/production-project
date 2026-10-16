import { Story } from '@storybook/react';

// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';

export const NewDesignDecorator =
  (StoryComponent: Story) => (StoryComponent: Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
    return (
      <div className="app_redesigned">
        <StoryComponent />
      </div>
    );
  };
