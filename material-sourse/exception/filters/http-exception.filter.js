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
const common_1 = require("@nestjs/common");
let HttpExceptionFilter = 
/**
 * The HTTPExceptionFilter catches
 * all Exceptions and responds with a
 * HTTP status and returns
 * a JSON obejct with the exception message.
 */
class HttpExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger('HttpException');
    }
    /**
     * Catches exceptions, thrown from the Appliaction
     * and responds accordingly
     * @param exception The exception which is thrown
     * @param response The response object from Express
     */
    catch(exception, host) {
        const status = exception.getStatus();
        const response = host.switchToHttp().getResponse();
        this.logger.error(`Exception thrown: ${JSON.stringify(exception.getResponse())}`);
        response
            .status(status)
            .json({
            statusCode: status,
            message: exception.getResponse(),
        });
    }
};
HttpExceptionFilter = __decorate([
    common_1.Catch(common_1.HttpException)
    /**
     * The HTTPExceptionFilter catches
     * all Exceptions and responds with a
     * HTTP status and returns
     * a JSON obejct with the exception message.
     */
    ,
    __metadata("design:paramtypes", [])
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map