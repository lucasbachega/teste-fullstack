export interface IBook {
  _id?: string;
  title: string;
  description?: string;
  author?: string;
  avgRating: number;
  reviewsCount: number;
}