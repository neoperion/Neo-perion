import { Router } from 'express';
import { handleCalendlyWebhook } from '../controllers/calendlyController';

const router = Router();

// Endpoint for Calendly Webhooks
router.post('/calendly', handleCalendlyWebhook);

export default router;
