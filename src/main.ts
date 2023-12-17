import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  // Detectando validação. Trabalha com apoio do classValidation
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
