import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT =  5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  await app.listen(PORT, () => console.log(`server started on port=${PORT}`))

  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
}
bootstrap();
