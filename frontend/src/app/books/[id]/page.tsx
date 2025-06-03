import { fetchBookById } from "@/service/books";

interface Props {
  params: {
    id: string;
  };
}

export default async function BookDetailPage({ params }: Props) {
  const book = await fetchBookById(params.id);

  if (!book) {
    return <div className="p-10 text-center">Livro não encontrado.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 space-y-6">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p className="text-gray-500 dark:text-gray-300">Autor: {book.author}</p>
      <p className="text-zinc-700 dark:text-zinc-400">{book.description}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Avaliações</h2>
        <ul className="space-y-4">
          {book.reviews?.map((review: any, idx: number) => (
            <li
              key={idx}
              className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl"
            >
              <p className="text-sm text-zinc-800 dark:text-zinc-100">
                <span className="font-bold">{review.user ?? "Anônimo"}</span>:{" "}
                {review.comment}
              </p>
              <div className="text-yellow-500 mt-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
