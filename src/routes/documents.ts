import { Router } from "express";
import upload from "../tools/multer.config";
import { DocumentsController } from "../controllers/documentsControllers";

const router = Router();
const documents = new DocumentsController();

router.get(
  "/documents",
  upload.single("file"),
  documents.getActivitiesActives
);


export default router;
