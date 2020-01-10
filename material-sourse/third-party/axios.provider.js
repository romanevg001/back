"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.AxiosToken = Symbol('Axios');
exports.AxiosProvider = {
    provide: exports.AxiosToken,
    useValue: axios_1.default
};
//# sourceMappingURL=axios.provider.js.map