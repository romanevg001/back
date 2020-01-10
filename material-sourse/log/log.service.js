"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@lxdhub/common");
/**
 * The Winston Logger Strategy
 */
class LogService extends common_1.WinstonLogger {
    constructor(context, logLevel = 'info') {
        super(context, logLevel);
    }
    log(message) {
        super.log(message);
    }
    error(message) {
        super.error(message);
    }
    warn(message) {
        super.warn(message);
    }
}
exports.LogService = LogService;
//# sourceMappingURL=log.service.js.map