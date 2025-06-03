import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 9100;
  await app.listen(port);
  console.log(`NestJS API is running on http://localhost:${port}`);
}

bootstrap();
