"use client";

import Stars from "@/components/ui/Stars";
import { fetchBookById } from "@/service/books";
import { useQuery } from "@tanstack/react-query";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

interface Props {
  bookId: string;
}

const BookDetail = ({ bookId }: Props) => {
  const {
    data: book,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["book", bookId],
    queryFn: () => fetchBookById(bookId),
  });

  if (isLoading) return <p>Loading book details...</p>;
  if (error || !book) return <p>Failed to load the book.</p>;

  return (
    <div>
      <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-2">
        {book.title}
      </h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-2">
        <span className="font-medium">Autor:</span> {book.author}
      </p>
      <p className="text-base text-zinc-700 dark:text-zinc-400 italic mb-4">
        {book.description}
      </p>

      <Stars
        avgRating={book.avgRating}
        reviewsCount={book.reviewsCount}
        className="mb-8"
      />

      <div className="border-t border-zinc-200 dark:border-zinc-700 pt-8">
        <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
          Avaliações ({book.reviewsCount})
        </h3>
        <ReviewForm bookId={bookId} />
        <ReviewList bookId={bookId} />
      </div>
    </div>
  );
};

export default BookDetail;
