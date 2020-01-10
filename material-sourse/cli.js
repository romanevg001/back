#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./cli/commands/start/default");
const clime_1 = require("clime");
const Path = require("path");
const cli = new clime_1.CLI('lxdhub-api', Path.join(__dirname, 'cli/commands'));
const shim = new clime_1.Shim(cli);
shim.execute(process.argv);
//# sourceMappingURL=cli.js.map