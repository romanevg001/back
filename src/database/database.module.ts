// import { Module, Global, DynamicModule } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';

// import { typeOrmConfig } from '../../typeorm.config';

// @Global()
// @Module({
//   // imports: [
//   //   TypeOrmModule.forRoot(typeOrmConfig),
//   // ],
//   // exports: [
//   //   TypeOrmModule.forFeature(),
//   // ],
// })
// export class DatabaseModule {
//   static forRoot(entities = [], options?): DynamicModule {
//     const providers = TypeOrmModule.forRoot(typeOrmConfig);
//     return {
//       module: DatabaseModule,
//       providers: providers,
//       exports: providers,
//     };
//   }
// }
