import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets('static', { prefix: '/pages' });

  app.enableCors();

  // app.use({
  //   cors: {
  //     origin: 'http://172.30.80.1:3000',
  //     credentials: true,
  //   },
  // });

  await app.listen(3000);
}
bootstrap();
