import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

import cookieRoutes from './routes/cookieRoutes';

// Routes
app.use('/api/cookies', cookieRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Neo Perion API is running' });
});

// We will add cookieRoutes.ts and other routes here later

export default app;
