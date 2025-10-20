import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { Comment } from "entities/Comment/model/types/comments";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from "./CommentList.module.scss";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { t } = useTranslation("article-details");
  const { className, isLoading, comments } = props;

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => {
          return <CommentCard className={cls.comment} comment={comment} />;
        })
      ) : (
        <Text text={t("Коментарии отсутствуют")} />
      )}
    </div>
  );
});
