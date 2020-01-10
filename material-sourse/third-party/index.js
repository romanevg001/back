"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The third-party module is made
 * for easier test handling. Third party
 * libraries are usually no injectable through
 * NestJS. This module tries to bypass this.
 */
__export(require("./axios.provider"));
__export(require("./fs.provider"));
__export(require("./fs.mock"));
__export(require("./path.provider"));
__export(require("./path.mock"));
//# sourceMappingURL=index.js.map