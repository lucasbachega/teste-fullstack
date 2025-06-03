import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './schemas/review.schema';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel(Review.name) private reviewModel: Model<Review>) {}

  create(data: CreateReviewDto) {
    return this.reviewModel.create(data);
  }

  findByBook(bookId: string) {
    return this.reviewModel.find({ bookId }).sort({ createdAt: -1 }).exec();
  }
}
