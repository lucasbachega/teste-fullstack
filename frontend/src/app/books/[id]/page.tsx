import ReviewList from "@/components/ReviewList";
import { Card } from "@/components/ui/Card";
import Stars from "@/components/ui/Stars";
import { fetchBookById } from "@/service/books";

interface Props {
  params: {
    id: string;
  };
}

export default async function BookDetailPage({ params }: Props) {
  const book = await fetchBookById(params.id);

  if (!book) {
    return (
      <div className="p-10 text-center text-zinc-500">
        Livro não encontrado.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <Card variant="elevated">
        <h1 className="text-sm font-bold text-zinc-500 uppercase tracking-wide mb-2">
          Livro
        </h1>
        <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-2">
          {book.title}
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-2">
          <span className="font-medium">Autor:</span> {book.author}
        </p>
        <Stars
          avgRating={book.avgRating}
          reviewsCount={book.reviewsCount}
          className="mb-3"
        />
        <p className="text-base text-zinc-700 dark:text-zinc-400 italic mb-8">
          {book.description}
        </p>

        <div className="border-t border-zinc-200 dark:border-zinc-700 pt-8">
          <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
            Avaliações
          </h3>
          <ReviewList bookId={book._id} />
        </div>
      </Card>
    </div>
  );
}
