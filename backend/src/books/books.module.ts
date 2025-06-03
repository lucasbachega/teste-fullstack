import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewsService } from 'src/reviews/reviews.service';
import { Review, ReviewSchema } from 'src/reviews/schemas/review.schema';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book, BookSchema } from './schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
      { name: Review.name, schema: ReviewSchema },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService, ReviewsService],
})
export class BooksModule {}
