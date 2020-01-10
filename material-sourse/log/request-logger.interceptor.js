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
const _1 = require(".");
let RequestLoggerInterceptor = 
/**
 * Logs every request
 */
class RequestLoggerInterceptor {
    /**
     * Inititalizes the RequestLoggerInterceptor
     * and its logger
     */
    constructor() {
        this.logger = new _1.LogService('Request');
    }
    /**
     * Intercepts every request and logs it
     * @param context The execution context
     * @param call$ The stream to for callback
     */
    // @ts-ignore
    intercept(context, next) {
        // Is actually a request
        const req = context.switchToHttp().getRequest();
        if (req.method) {
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            let message = `Requesting ${req.method}: ${req.originalUrl} with IP ${ip}`;
            message += ` -> ${context.getClass().name}:${context.getHandler().name}`;
            this.logger.log(message);
        }
        return next.handle();
    }
};
RequestLoggerInterceptor = __decorate([
    common_1.Injectable()
    /**
     * Logs every request
     */
    ,
    __metadata("design:paramtypes", [])
], RequestLoggerInterceptor);
exports.RequestLoggerInterceptor = RequestLoggerInterceptor;
//# sourceMappingURL=request-logger.interceptor.js.map