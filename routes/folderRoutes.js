import { createFolder } from "../controller/folderController.js";
import { Router } from "express";
import { protect } from "../middleware/protect.js";
import { findFoldersFiles } from "../controller/folderController.js";
const router = Router();

router.post("/create", protect, createFolder);
router.get("/", protect, findFoldersFiles);

export default router;
