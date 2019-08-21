"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const envVars = process.env;
const configuration = Object.freeze({
    graphqlUri: envVars.SERVICE_URL,
    port: envVars.PORT,
});
console.log('config is::::', configuration);
exports.default = configuration;
//# sourceMappingURL=configuration.js.map