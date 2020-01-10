"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const app_module_1 = require("./app.module");
const exception_1 = require("./exception");
const log_1 = require("./log");
const request_logger_interceptor_1 = require("./log/request-logger.interceptor");
const Chalk = require("chalk");
const express = require("express");
const cors = require("cors");
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
const platform_express_1 = require("@nestjs/platform-express");
/**
 * The LXDHub API settings
 */
class LXDHubAPISettings {
    constructor() {
        this.port = 3000;
        this.hostUrl = '0.0.0.0';
        this.logLevel = 'silly';
        this.docUrl = '/api/v1/doc';
    }
}
__decorate([
    class_validator_1.IsInt(),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], LXDHubAPISettings.prototype, "port", void 0);
__decorate([
    class_validator_1.IsString(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], LXDHubAPISettings.prototype, "hostUrl", void 0);
exports.LXDHubAPISettings = LXDHubAPISettings;
/**
 * The LXDHub API is the interface for the
 * LXDHub Web user interface.
 */
class LXDHubAPI {
    constructor(settings, server) {
        this.settings = settings;
        this.server = server;
        this.logger = new log_1.LogService('LXDHubAPI', settings.logLevel);
        this.url = `http://${this.settings.hostUrl}:${this.settings.port}`;
    }
    /**
     * Conigurates Swagger for Nest
     */
    setupSwagger() {
        const options = new swagger_1.DocumentBuilder()
            .setTitle('LXDHub API')
            .setDescription('Display, search and copy LXD images using a web interface.')
            .setVersion('1.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(this.app, options);
        swagger_1.SwaggerModule.setup(this.settings.docUrl || '/api/v1/doc', this.app, document);
    }
    /**
     * Creates the Nest App
     */
    async createNestApp() {
        const nestSettings = { logger: this.logger };
        if (!this.server) {
            this.server = express();
        }
        this.app = await core_1.NestFactory.create(app_module_1.AppModule.forRoot(this.settings), new platform_express_1.ExpressAdapter(this.server), nestSettings);
        this.app.useWebSocketAdapter(new platform_socket_io_1.IoAdapter(this.app.getHttpServer()));
    }
    /**
     * Setup the middleware for LXDHub API
     */
    setupMiddleware() {
        // this.app.setGlobalPrefix('/api/v1');
        // Global execution handler
        this.app.useGlobalFilters(new exception_1.HttpExceptionFilter());
        // Global request logger
        this.app.useGlobalInterceptors(new request_logger_interceptor_1.RequestLoggerInterceptor());
        // In development, allow any origin to access the website
        if (process.env.NODE_ENV !== 'production') {
            this.app.use(cors({
                origin: true,
                credentials: true
            }));
        }
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, DEVICE_ID, SSO_TOKEN');
            next();
        });
    }
    /**
     * Bootstraps the LXDHub API and returns the
     * Express instance
     */
    async bootstrap() {
        await this.createNestApp();
        this.setupSwagger();
        this.setupMiddleware();
        return this.server;
    }
    /**
     * Bootstraps & starts LXDHub API with the given conifgurations
     */
    async run() {
        this.logger.log('Bootstraping application');
        try {
            await this.bootstrap();
        }
        catch (err) {
            err = err;
            this.logger.error(`An error occured while bootstraping the application`);
            this.logger.error(err.message);
        }
        // Starts listening on the given port and host url
        await this.app.listen(this.settings.port, this.settings.hostUrl);
        this.logger.log(`Open on ${Chalk.default.blue(this.url)}`);
    }
}
exports.LXDHubAPI = LXDHubAPI;
//# sourceMappingURL=main.js.map