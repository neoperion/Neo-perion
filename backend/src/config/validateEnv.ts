import dotenv from 'dotenv';
import { logger } from '../utils/logger';

dotenv.config();

const requiredEnvs = [
  'PORT',
  'SUPABASE_URL',
  'SUPABASE_SERVICE_KEY',
  // 'GEMINI_API_KEY',
  // 'RESEND_API_KEY'
];

export function validateEnv() {
  let hasError = false;

  requiredEnvs.forEach((env) => {
    if (!process.env[env]) {
      logger.error(`Missing required environment variable: ${env}`);
      hasError = true;
    }
  });

  if (hasError) {
    logger.error('Environment validation failed. Exiting process.');
    process.exit(1);
  }

  logger.info('Environment validation passed.');
}
