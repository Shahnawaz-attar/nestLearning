import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const {ValidationPipe} = require('@nestjs/common');
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true
    }
  ));
  app.use(cookieSession({
    name: 'session',
    keys: ['user', 'all is well']

  }));


  await app.listen(3000);
}
bootstrap();
