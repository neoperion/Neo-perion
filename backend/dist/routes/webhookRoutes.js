"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const calendlyController_1 = require("../controllers/calendlyController");
const router = (0, express_1.Router)();
// Endpoint for Calendly Webhooks
router.post('/calendly', calendlyController_1.handleCalendlyWebhook);
exports.default = router;
