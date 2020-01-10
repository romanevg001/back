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
const clime_1 = require("clime");
const __1 = require("../../..");
const fs = require("fs");
class StartOptions extends clime_1.Options {
    constructor() {
        super(...arguments);
        this.port = 3000;
        this.host = '0.0.0.0';
        this.databaseName = 'lxdhub';
        this.databaseHost = 'postgres';
        this.databasePassword = 'lxdhub';
        this.databasePort = 5432;
        this.databaseUsername = 'lxdhub';
        this.cert = `${process.env.HOME}/.config/lxc/client.crt`;
        this.key = `${process.env.HOME}/.config/lxc/client.key`;
        this.logLevel = 'info';
        this.docUrl = '/api/v1/doc';
    }
}
__decorate([
    clime_1.option({
        flag: 'p',
        description: 'Port on which lxdhub-api should listen. Default is 3000',
    }),
    __metadata("design:type", Number)
], StartOptions.prototype, "port", void 0);
__decorate([
    clime_1.option({
        flag: 'h',
        description: 'Hostname of lxdhub-api. Default is 0.0.0.0'
    }),
    __metadata("design:type", String)
], StartOptions.prototype, "host", void 0);
__decorate([
    clime_1.option({
        description: 'The name of the database to connect to. Default is lxdhub'
    }),
    __metadata("design:type", Object)
], StartOptions.prototype, "databaseName", void 0);
__decorate([
    clime_1.option({
        description: 'The host of the database to connect to. Default is localhost'
    }),
    __metadata("design:type", String)
], StartOptions.prototype, "databaseHost", void 0);
__decorate([
    clime_1.option({
        description: 'The database password for the given user. Default is lxdhub'
    }),
    __metadata("design:type", String)
], StartOptions.prototype, "databasePassword", void 0);
__decorate([
    clime_1.option({
        description: 'The database port to connect to. Default is 5432'
    }),
    __metadata("design:type", Number)
], StartOptions.prototype, "databasePort", void 0);
__decorate([
    clime_1.option({
        description: 'The database username. Default is lxdhub'
    }),
    __metadata("design:type", String)
], StartOptions.prototype, "databaseUsername", void 0);
__decorate([
    clime_1.option({
        description: 'The LXD certificate for the remote'
    }),
    __metadata("design:type", String)
], StartOptions.prototype, "cert", void 0);
__decorate([
    clime_1.option({
        description: 'The LXC key for the remote'
    }),
    __metadata("design:type", String)
], StartOptions.prototype, "key", void 0);
__decorate([
    clime_1.option({
        description: 'The log level'
    }),
    __metadata("design:type", String)
], StartOptions.prototype, "logLevel", void 0);
__decorate([
    clime_1.option({
        description: 'The url to the swagger documentation'
    }),
    __metadata("design:type", String)
], StartOptions.prototype, "docUrl", void 0);
exports.StartOptions = StartOptions;
let default_1 = class default_1 extends clime_1.Command {
    async execute(options) {
        const apiOptions = {
            port: options.port || 3000,
            hostUrl: options.host || '0.0.0.0',
            logLevel: options.logLevel || 'info',
            docUrl: options.docUrl || '/api/v1/doc',
            database: {
                database: options.databaseName || 'lxdhub',
                host: options.databaseHost || 'localhost',
                password: options.databasePassword || 'lxdhub',
                port: options.databasePort || 5432,
                username: options.databaseUsername || 'lxdhub'
            },
            lxd: {
                // @ts-ignore
                cert: fs.readFileSync(options.cert || `${process.env.HOME}/.config/lxc/client.crt`),
                // @ts-ignore
                key: fs.readFileSync(options.key || `${process.env.HOME}/.config/lxc/client.key`)
            }
        };
        await new __1.LXDHubAPI(apiOptions).run();
    }
};
__decorate([
    clime_1.metadata,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [StartOptions]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "execute", null);
default_1 = __decorate([
    clime_1.command({
        description: 'Start the lxdhub api'
    })
], default_1);
exports.default = default_1;
//# sourceMappingURL=default.js.map