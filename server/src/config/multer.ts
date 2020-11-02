import path from 'path';
import * as multer from 'multer';
import { Request } from 'express';

const multerConfig = {
  dest: path.resolve(__dirname, "..", "..", "public", "uploads"),
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.resolve(__dirname, "..", "..", "public", "uploads"));
    },
    filename: function(req, file, cb) {
      const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      const fileName = `${randomString}_${Date.now()}`;
      cb(null, fileName);
    }
  }),
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: (req: Request, file: any, cb: any) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif"
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  }
};

export default multerConfig;