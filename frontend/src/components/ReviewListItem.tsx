import { IReview } from "@/types/book";
import Stars from "./ui/Stars";

const ReviewListItem = ({ comment, rating, reviewer, createdAt }: IReview) => {
  return (
    <li className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl">
      <p className="text-sm text-zinc-800 dark:text-zinc-100">
        <span className="font-bold">{reviewer ?? "Anônimo"}</span>: {comment}
      </p>
      <Stars disableText reviewsCount={null} avgRating={rating} className="mt-2"/>
    </li>
  );
};

export default ReviewListItem;
