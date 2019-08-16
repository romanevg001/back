import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const port = process.env.PORT || 3002;

async function bootstrap() {

  const server = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true,
  });

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(server, options);
  SwaggerModule.setup('api', server, document);

  await server.listen(port);
  Logger.log('Run on port:' + port);
}
bootstrap();
