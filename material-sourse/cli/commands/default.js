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
var APICommand_1;
Object.defineProperty(exports, "__esModule", { value: true });
const clime_1 = require("clime");
const Fs = require("fs");
const Path = require("path");
class DefaultOptions extends clime_1.Options {
    constructor() {
        super(...arguments);
        this.version = false;
    }
}
__decorate([
    clime_1.option({
        flag: 'v',
        description: 'The version of lxdhub-api',
        toggle: true,
        required: false
    }),
    __metadata("design:type", Boolean)
], DefaultOptions.prototype, "version", void 0);
exports.DefaultOptions = DefaultOptions;
let APICommand = APICommand_1 = class APICommand extends clime_1.Command {
    async execute(options) {
        const isVersion = !!options.version;
        if (isVersion) {
            const packageJsonPath = Path.join(__dirname, '../../package.json');
            const packageJsonContent = Fs.readFileSync(packageJsonPath, 'utf8');
            const packageJson = JSON.parse(packageJsonContent);
            return packageJson.version;
        }
        return APICommand_1.getHelp();
    }
};
__decorate([
    clime_1.metadata,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [DefaultOptions]),
    __metadata("design:returntype", Promise)
], APICommand.prototype, "execute", null);
APICommand = APICommand_1 = __decorate([
    clime_1.command({
        description: 'lxdhub-api is a CLI-tool to manage the LXDHub API.'
    })
], APICommand);
exports.default = APICommand;
//# sourceMappingURL=default.js.map