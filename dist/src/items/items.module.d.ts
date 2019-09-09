import { NestModule } from '@nestjs/common';
import { MiddlewareConsumer } from '@nestjs/common';
export declare class ItemsModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
