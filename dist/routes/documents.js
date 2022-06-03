"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_config_1 = __importDefault(require("../tools/multer.config"));
const documentsControllers_1 = require("../controllers/documentsControllers");
const router = (0, express_1.Router)();
const documents = new documentsControllers_1.DocumentsController();
router.get("/documents", multer_config_1.default.single("file"), documents.getActivitiesActives);
exports.default = router;
