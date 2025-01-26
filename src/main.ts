import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://resume-builder-five-liard.vercel.app/', // Allow only your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies or headers)
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
