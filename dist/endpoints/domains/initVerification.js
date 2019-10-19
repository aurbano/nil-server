"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../../constants");
exports.default = (req, res) => {
    const domain = req.params.domain;
    const token = jsonwebtoken_1.default.sign(JSON.stringify(domain), constants_1.JWT_SECRET);
    res.json({
        token,
    });
};
//# sourceMappingURL=initVerification.js.map