import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewsService } from 'src/reviews/reviews.service';
import { Review } from 'src/reviews/schemas/review.schema';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    private readonly reviewsService: ReviewsService,
  ) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Post(':bookId/reviews')
  createReview(
    @Param('bookId') bookId: string,
    @Body() createReviewDto: any,
  ): Promise<Review> {
    return this.reviewsService.create({
      ...createReviewDto,
      bookId,
    });
  }
}
