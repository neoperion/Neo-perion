"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const validateEnv_1 = require("./config/validateEnv");
const logger_1 = require("./utils/logger");
const env_1 = require("./config/env");
// Validate environment before starting
(0, validateEnv_1.validateEnv)();
const PORT = env_1.config.port || 5000;
app_1.default.listen(PORT, () => {
    logger_1.logger.info(`Neo Perion Backend API is running on port ${PORT} in ${env_1.config.nodeEnv} mode`);
});
