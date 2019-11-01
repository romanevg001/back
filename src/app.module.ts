import { Module, CacheModule  } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { APP_GUARD } from '@nestjs/core';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaModule } from './idea/idea.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { GqlHttpExceptionFilter } from './shared/gql-http-error.filter';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { ValidationPipe } from './shared/validation.pipe';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { DictionaryModule } from './dictionaries/dictionary.module';
import { PsrobjectModule } from './psrobject/psrobject.module';
import { FileModule } from './file/file.module';
import { TagModule } from './tag/tag.module';
import { TypeModule } from './type/type.module';
import { SearchModule } from './search/search.module';
import { AuthModule } from './auth/auth.module';
// import { GraphQlBridge, TypeGQLModule } from 'nestjs-type-graphql';
import { GraphQLModule } from '@nestjs/graphql';

import { typeOrmConfig } from '../typeorm.config';
import { RoleGuard } from './shared/role.guard';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forRoot(typeOrmConfig),
    ItemsModule,
    IdeaModule,
    UserModule,
    CommentModule,
    DictionaryModule,

    PsrobjectModule,
    FileModule,
    TagModule,
    TypeModule,
    SearchModule,
    ClientsModule.register([
      { name: 'BoxMicroservice', transport: Transport.TCP },
    ]),

    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      typePaths: ['./**/*.graphql'],
      context: ({req}) => ({ req }),
    }),
  ],
  controllers: [
  ],
  providers: [
 //   {provide: APP_FILTER, useClass: HttpErrorFilter },
    {provide: 'APP_FILTER_GQL', useClass: GqlHttpExceptionFilter },
    {provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    {provide: APP_PIPE, useClass: ValidationPipe },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
