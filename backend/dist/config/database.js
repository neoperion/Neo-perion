"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const supabase_1 = require("./supabase");
exports.db = {
    // Add database utility functions here as needed
    getClient: () => supabase_1.supabase,
    getAdminClient: () => supabase_1.supabaseAdmin
};
