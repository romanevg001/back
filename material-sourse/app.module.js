"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("@lxdhub/db");
const app_settings_1 = require("./app-settings");
const app_controller_1 = require("./app.controller");
const image_availability_1 = require("./image-availability");
const image_module_1 = require("./image/image.module");
const log_1 = require("./log");
const lxd_1 = require("./lxd");
const remote_1 = require("./remote");
const search_module_1 = require("./search/search.module");
const third_party_module_1 = require("./third-party/third-party.module");
const sync_run_module_1 = require("./sync-run/sync-run.module");
/**
 * The main appliaction module for LXDHub
 */
class AppModule {
    static forRoot(settings) {
        return {
            module: AppModule,
            imports: [
                app_settings_1.AppSettingsModule.forRoot(settings),
                db_1.DatabaseModule.forRoot(Object.assign({}, settings.database, { logLevel: settings.logLevel })),
                log_1.LogModule,
                image_module_1.ImageModule,
                image_availability_1.ImageAvailabilityModule,
                sync_run_module_1.SyncRunModule,
                remote_1.RemoteModule,
                search_module_1.SearchModule,
                lxd_1.LXDModule,
                remote_1.RemoteModule,
                third_party_module_1.ThirdPartyModule
            ],
            controllers: [app_controller_1.AppController]
        };
    }
}
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map