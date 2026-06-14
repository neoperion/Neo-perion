import express from 'express';
import { db } from '../config/database';

const router = express.Router();

router.post('/consent', async (req, res) => {
  try {
    const { session_id, necessary, analytics, marketing, preferences, consent_version, ip_hash, user_agent } = req.body;
    
    // In a real scenario, you'd generate a session_id if not provided, and hash the IP properly
    const { error } = await db.getAdminClient().from('cookie_consents').insert([
      {
        session_id: session_id || 'anonymous_session',
        necessary,
        analytics,
        marketing,
        preferences,
        consent_version,
        ip_hash,
        user_agent
      }
    ]);

    if (error) throw error;
    res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('Error logging cookie consent:', err);
    res.status(500).json({ error: 'Failed to log consent' });
  }
});

export default router;
