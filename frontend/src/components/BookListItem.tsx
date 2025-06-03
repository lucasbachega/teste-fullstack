import { IBook } from "@/types/book";
import { renderStars } from "@/utils/books";
import Link from "next/link";
import { Card } from "./ui/Card";

interface Props extends IBook {
  position: number;
}

const BookListItem = ({
  _id: bookId,
  title,
  description,
  avgRating = 0,
  reviewsCount,
  position,
  author,
}: Props) => {
  return (
    <Card
      variant="elevated"
      className="flex items-start justify-between gap-3 relative"
    >
      <div className="flex-1 space-y-1">
        <div className="text-sm text-zinc-400 absolute top-4 right-4">
          #{position}
        </div>

        <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
          {title}
        </h2>

        {author && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">
            by {author}
          </p>
        )}

        {Boolean(description) && (
          <p className="text-sm text-zinc-700 dark:text-zinc-300 line-clamp-3">
            {description}
          </p>
        )}

        <div className="flex items-center gap-1 text-sm mt-2">
          {renderStars(avgRating)}
          <span className="ml-2 text-zinc-500 dark:text-zinc-400">
            {avgRating.toFixed(1)} ({reviewsCount ?? 0} review
            {reviewsCount !== 1 ? "s" : ""})
          </span>
        </div>
      </div>

      <div className="self-end">
        <Link href={`/books/${bookId}`}>Ver livro</Link>
        {/* <Button variant="text">Ver livro</Button> */}
      </div>
    </Card>
  );
};

export default BookListItem;
