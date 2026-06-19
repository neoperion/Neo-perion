import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({
  verify: (req: any, res, buf) => {
    if (req.originalUrl.startsWith('/api/webhooks')) {
      req.rawBody = buf.toString('utf8');
    }
  }
}));
app.use(morgan('dev'));

import cookieRoutes from './routes/cookieRoutes';

import webhookRoutes from './routes/webhookRoutes';

// Routes
app.use('/api/cookies', cookieRoutes);
app.use('/api/webhooks', webhookRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Neo Perion API is running' });
});

// Root path handler to prevent "Cannot GET /" 404s
app.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Welcome to the Neo Perion API',
    docs: 'Endpoints are available under /api',
    health: '/health'
  });
});

export default app;
