import api from "@/service/api";
import { useQuery } from "@tanstack/react-query";


export interface Book {
  _id: string;
  title: string;
  author: string;
}

export function useBooks() {
  return useQuery<Book[]>({
    queryKey: ['books'],
    queryFn: async () => {
      const res = await api.get('/books');
      return res.data;
    },
  });
}
