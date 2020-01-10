"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Path = require("path");
/**
 * The Path provider, which encapsulates
 * the Path package into a injectable
 * module
 */
exports.PathProvider = {
    provide: 'Path',
    useFactory: () => Path
};
//# sourceMappingURL=path.provider.js.map