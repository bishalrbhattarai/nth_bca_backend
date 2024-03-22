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
