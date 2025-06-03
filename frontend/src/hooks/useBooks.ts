import api from "@/service/api";
import { IBook } from "@/types/book";
import { useQuery } from "@tanstack/react-query";

const mockBooks: IBook[] = [
  {
    _id: "1",
    title: "Clean Code",
    author: "Robert C. Martin",
    description: "A Handbook of Agile Software Craftsmanship",
    avgRating: 4.7,
    reviewsCount: 12,
  },
  {
    _id: "2",
    title: "The Pragmatic Programmer",
    author: "Andy Hunt & Dave Thomas",
    description: "Your Journey to Mastery",
    avgRating: 3.5,
    reviewsCount: 8,
  },
  {
    _id: "3",
    title: "Refactoring",
    author: "Martin Fowler",
    description: "Improving the Design of Existing Code",
    avgRating: 4.2,
    reviewsCount: 5,
  },
];

export function useBooks() {
  return useQuery<IBook[]>({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await api.get("/books");
      return mockBooks;
    },
  });
}
