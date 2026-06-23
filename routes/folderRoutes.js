import { createFolder } from "../controller/folderController.js";
import { Router } from "express";
import { protect } from "../middleware/protect.js";
const router=Router();

router.post("/create",protect,createFolder)

export default router;