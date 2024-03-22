import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const express = await NestFactory.create(AppModule); // text/html when express
  const fastify = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  ); // text/plain when fastify

  await express.listen(3000);
  await fastify.listen(3001);
}
bootstrap();
