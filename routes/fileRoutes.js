import { uploadFile } from "../controller/uploadController.js";
import Router from "express";
import { upload } from "../middleware/upload.js";
import {protect} from "../middleware/protect.js";
const router = Router();

router.post("/upload", protect,upload.single("file"), uploadFile);

export default router;
