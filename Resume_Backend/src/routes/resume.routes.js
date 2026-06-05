import express from "express";

import protect from "../middleware/auth.middleware.js";

import upload from "../middleware/upload.middleware.js";

import {uploadResume,getMyResumes,getResumeById,deleteResume} from "../controllers/resume.controller.js";

const router = express.Router();

router.post(
  "/upload",
  protect,
  upload.single("file"),
  uploadResume
);

router.get("/", protect, getMyResumes);
router.get("/:id", protect, getResumeById);
router.delete("/:id", protect, deleteResume);


export default router;