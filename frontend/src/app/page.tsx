"use client";

import { useBooks } from "@/hooks/useBooks";

export default function Home() {
  const { data: books, isLoading, isError } = useBooks();

  if (isLoading) return <p className="p-4 text-gray-600">Loading books...</p>;
  if (isError) return <p className="p-4 text-red-600">Failed to load books.</p>;

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Book List</h1>
      <ul className="space-y-4">
        {books?.map((book) => (
          <li
            key={book._id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <p className="font-semibold">{book.title}</p>
            <p className="text-sm text-gray-500">by {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
