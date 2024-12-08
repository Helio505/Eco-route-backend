import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config({ path: '../.env' });

  const app = await NestFactory.create(AppModule);

  // Prefix all routes with /api
  app.setGlobalPrefix('api');

  // whitelisted
  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    // origin: "*",
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Only allows properties that are defined in the DTO.
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
