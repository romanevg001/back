
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { BoxModule } from './box.module';

async function bootstrap() {
  const boxApp = await NestFactory.createMicroservice(BoxModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 8877,
    },
  });
  await boxApp.listen(() => console.log('Microservice is listening'));
}
bootstrap();