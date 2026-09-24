import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { useArticleRecommendationsList } from '../../api/aritcleRecommendationsApi';

import { ArticleList } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      isLoading,
      data: articles,
      error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
      return null;
    }

    return (
      <VStack
        data-testid="ArticleRecommendationsList"
        gap="8"
        className={classNames('', {}, [className])}
      >
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Text
              size="l"
              title={t('Рекомендуем')}
            />
          }
          off={
            <TextDeprecated
              size={TextSize.L}
              title={t('Рекомендуем')}
            />
          }
        />
        <ArticleList
          articles={articles}
          target="_blank"
        />
      </VStack>
    );
  },
);
