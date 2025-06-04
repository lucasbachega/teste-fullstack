"use client";

import { useReviews } from "@/hooks/useReviews";
import { IReview } from "@/types/book";
import { useCallback } from "react";
import ReviewListItem from "./ReviewListItem";

interface Props {
  bookId: string;
}

const ReviewList = ({ bookId }: Props) => {
  const { data: reviews, isLoading, error } = useReviews(bookId);

  const renderItems = useCallback((review: IReview, idx: number) => {
    return <ReviewListItem key={idx.toString()} {...review} />;
  }, []);

  if (isLoading) {
    return (
      <p className="my-20 text-center text-sm text-gray-400">
        Carregando avaliações...
      </p>
    );
  }

  if (error) {
    return (
      <p className="my-20 text-center text-red-500">
        Erro ao carregar as avaliações.
      </p>
    );
  }

  if (!reviews || reviews.length === 0) {
    return (
      <p className="my-20 text-center text-gray-500">
        Nenhuma avaliação encontrada.
      </p>
    );
  }

  return <ul className="space-y-4 mt-6">{reviews.map(renderItems)}</ul>;
};

export default ReviewList;
