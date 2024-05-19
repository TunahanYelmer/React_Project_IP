// server.ts
import express from "express";
import next from "next";
import multer from "multer";
import path from "path";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const storage = multer.diskStorage({
  destination: "../static/images",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

nextApp.prepare().then(() => {
  const app = express();

  app.post("/api/upload", upload.single("image"), (req, res) => {
    res.status(200).json({ message: "Image uploaded successfully" });
  });

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(3000, (err?: any) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
