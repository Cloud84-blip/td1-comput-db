import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createTable } from './database.functions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await createTable();

  await app.listen(8080);
}
bootstrap();
