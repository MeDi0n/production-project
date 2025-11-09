import { memo, useCallback } from "react";

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { ArticleDetails } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/addCommentForm";
import { addCommentForArticle } from "pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Text } from "shared/ui/Text/Text";

import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import {
  articleDetailsCommentReducer,
  getArticleComments,
} from "../../model/slices/articleDetailsCommentsSlice";

import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation("article-details");
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentIsLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );
  }
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={t("Комментарии")} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
