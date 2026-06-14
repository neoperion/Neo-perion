import app from './app';
import { validateEnv } from './config/validateEnv';
import { logger } from './utils/logger';
import { config } from './config/env';

// Validate environment before starting
validateEnv();

const PORT = config.port || 5000;

app.listen(PORT, () => {
  logger.info(`Neo Perion Backend API is running on port ${PORT} in ${config.nodeEnv} mode`);
});
