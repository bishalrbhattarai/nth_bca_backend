// import express from "express";
// import img from "../middlewares/multer.js";
// import pdf from "../middlewares/pdfMulter.js";
// const router = express.Router();
// import { submitForm } from "../controllers/recordControllers.js";
// router.post(
//   "/submit-form",
//   img.fields([{ name: "profilePic" }, { name: "pdfFile" }]),
//   submitForm
// );

// export default router;

import express from "express";
import upload from "../middlewares/mul.js";
const router = express.Router();
import { submitForm, allRecords } from "../controllers/recordControllers.js";
router.post(
  "/submit-form",
  upload.fields([{ name: "profilePic" }, { name: "pdfFile" }]),
  submitForm
);

router.get("/all-records", allRecords);

export default router;
