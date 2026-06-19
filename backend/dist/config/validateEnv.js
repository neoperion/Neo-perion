"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = validateEnv;
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = require("../utils/logger");
dotenv_1.default.config();
const requiredEnvs = [
    'PORT',
    'SUPABASE_URL',
    'SUPABASE_SERVICE_KEY',
    // 'GEMINI_API_KEY',
    // 'RESEND_API_KEY'
];
function validateEnv() {
    let hasError = false;
    requiredEnvs.forEach((env) => {
        if (!process.env[env]) {
            logger_1.logger.error(`Missing required environment variable: ${env}`);
            hasError = true;
        }
    });
    if (hasError) {
        logger_1.logger.error('Environment validation failed. Exiting process.');
        process.exit(1);
    }
    logger_1.logger.info('Environment validation passed.');
}
