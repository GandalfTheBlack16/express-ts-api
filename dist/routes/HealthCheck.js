"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckRouter = void 0;
const express_1 = require("express");
exports.healthCheckRouter = (0, express_1.Router)()
    .get('/', (req, res) => {
    res.json({
        status: 'OK'
    });
});
