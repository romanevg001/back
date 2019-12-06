import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BoxModule } from './box/box.module';
import { ValidationPipe } from './shared/validation.pipe';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as config from 'config';

const serverConfig = config.get('server');

const port = process.env.PORT || serverConfig.port;

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const server = await NestFactory.create(AppModule, {
    bodyParser: true,
  });

  const boxApp = await NestFactory.createMicroservice(BoxModule, {
    transport: Transport.TCP,
  });
  await boxApp.listenAsync();
  await boxApp.listen(() => console.log('Microservice is listening'));

  // server.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: { port: 5667 },
  // });

  // await server.startAllMicroservicesAsync();

  if (process.env.NODE_ENV === 'development') {
    server.enableCors();
  } else {
    logger.log(`Accepting requests from origin "${serverConfig.origin}" `);
    server.enableCors({
      origin: serverConfig.origin,
    });
  }

  server.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(server, options);
  SwaggerModule.setup('api', server, document);

  await server.listen(port);
  logger.log('Run on port:' + port);
}
bootstrap();
