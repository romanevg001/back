import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaModule } from './idea/idea.module';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { ValidationPipe } from './shared/validation.pipe';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { DictionaryModule } from './dictionaries/dictionary.module';
import { BoxModule } from './box/box.module';
import { PsrobjectModule } from './psrobject/psrobject.module';
import { FileModule } from './file/file.module';
import { TagModule } from './tag/tag.module';
import { TypeModule } from './type/type.module';
import { SearchModule } from './search/search.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({req}) => ({ headers: req.headers }),
    }),
    TypeOrmModule.forRoot(),
    ItemsModule,
    IdeaModule,
    UserModule,
    CommentModule,
    DictionaryModule,
    BoxModule,
    PsrobjectModule,
    FileModule,
    TagModule,
    TypeModule,
    SearchModule,
    AuthModule,
  ],
  controllers: [
  ],
  providers: [
    {provide: APP_FILTER, useClass: HttpErrorFilter },
    {provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    {provide: APP_PIPE, useClass: ValidationPipe },
  ],
})
export class AppModule {}
