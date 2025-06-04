"use client";

import { useReviews } from "@/hooks/useReviews";
import ReviewListItem from "./ReviewListItem";

interface Props {
  bookId: string | undefined;
}

const ReviewList = ({ bookId }: Props) => {
  const { data: reviews, isLoading, error } = useReviews(bookId);

  if (!bookId) return null;

  if (isLoading) {
    return (
      <p className="text-center text-sm text-gray-400">
        Carregando avaliações...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        Erro ao carregar as avaliações.
      </p>
    );
  }

  if (!reviews || reviews.length === 0) {
    return (
      <p className="text-center text-gray-500">Nenhuma avaliação encontrada.</p>
    );
  }

  return (
    <ul className="space-y-4 mt-6">
      {reviews.map((review, idx) => (
        <ReviewListItem key={idx.toString()} {...review} />
      ))}
    </ul>
  );
};

export default ReviewList;
