"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const business_1 = __importDefault(require("../controllers/business"));
const router = express_1.Router();
router.route('/business/:id').get(business_1.default.getBusiness);
exports.default = router;
