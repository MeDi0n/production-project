import { memo, ReactElement } from 'react';

import { getFeatureFlags } from '../../lib/setGetFeatures';

import { FeatureFlags } from '@/shared/types/featureFlags';

interface ToggleFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures = memo((props: ToggleFeaturesProps) => {
  const { on, off, feature } = props;

  if (getFeatureFlags(feature)) {
    return on;
  }

  return off;
});
