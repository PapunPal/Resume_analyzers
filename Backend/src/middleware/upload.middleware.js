import multer from "multer";
import path from "path";
import os from "os";
import fs from "fs";

// Use system temp directory for Render compatibility
const uploadDir = process.env.NODE_ENV === "production" 
  ? os.tmpdir() 
  : "uploads/";

// Ensure uploads directory exists locally
if (process.env.NODE_ENV !== "production" && !fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
});

export default upload;