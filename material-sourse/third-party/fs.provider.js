"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fs = require("fs-extra");
/**
 * The Fs provider, which encapsulates
 * the Fs package into a injectable
 * module
 */
exports.FsProvider = {
    provide: 'Fs',
    useFactory: () => Fs
};
//# sourceMappingURL=fs.provider.js.map