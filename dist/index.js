"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HealthCheck_1 = require("./routes/HealthCheck");
const app = (0, express_1.default)();
app.use('/health', HealthCheck_1.healthCheckRouter);
app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000, () => {
    var _a;
    console.log('Application running on port', (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000);
});
