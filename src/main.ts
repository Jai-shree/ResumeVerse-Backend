import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173', // Local development
      'https://resume-builder-five-liard.vercel.app', // Production frontend
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies or headers)
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
