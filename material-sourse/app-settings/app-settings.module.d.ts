import { DynamicModule } from '@nestjs/common';
import { LXDHubAPISettings } from '..';
/**
 * The AppSettingsModule, which bundles all
 * operational or processable app-settings related
 * modules, controllers and components
 */
export declare class AppSettingsModule {
    static forRoot(settings?: LXDHubAPISettings): DynamicModule;
}
