import { DynamicModule } from '@nestjs/common';
import { LXDHubAPISettings } from '.';
/**
 * The main appliaction module for LXDHub
 */
export declare class AppModule {
    static forRoot(settings: LXDHubAPISettings): DynamicModule;
}
