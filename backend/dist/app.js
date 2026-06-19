"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json({
    verify: (req, res, buf) => {
        if (req.originalUrl.startsWith('/api/webhooks')) {
            req.rawBody = buf.toString('utf8');
        }
    }
}));
app.use((0, morgan_1.default)('dev'));
const cookieRoutes_1 = __importDefault(require("./routes/cookieRoutes"));
const webhookRoutes_1 = __importDefault(require("./routes/webhookRoutes"));
// Routes
app.use('/api/cookies', cookieRoutes_1.default);
app.use('/api/webhooks', webhookRoutes_1.default);
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Neo Perion API is running' });
});
exports.default = app;
