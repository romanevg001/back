import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaModule } from './idea/idea.module';

@Module({
  imports: [
    ItemsModule,
    TypeOrmModule.forRoot(),
    IdeaModule,
   // MongooseModule.forRoot(),
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}
