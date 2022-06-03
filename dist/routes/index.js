"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const documents_1 = __importDefault(require("./documents"));
const morgan_1 = __importDefault(require("morgan"));
const Routes = (0, express_1.Router)();
Routes.use((0, morgan_1.default)('dev'));
Routes.use('/marlo', documents_1.default);
exports.default = Routes;
