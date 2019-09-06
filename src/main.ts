import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './shared/validation.pipe';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const port = process.env.PORT || 3002;

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const server = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true,
  });

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
