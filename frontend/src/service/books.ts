import api from "./api";

export const fetchBooks = async () => {
  const response = await api.get(`/books?limit=10`);
  return response.data;
};

export const fetchBookById = async (id: string) => {
  const response = await api.get(`/books/${id}`);
  return response.data;
};

export const submitReview = async (bookId: string, review: any) => {
  const response = await api.post(`/books/${bookId}/reviews`, review);
  return response.data;
};

export const fetchReviewsByBookId = async (bookId: string) => {
  const response = await api.get(`/books/${bookId}/reviews`);
  return response.data;
};
