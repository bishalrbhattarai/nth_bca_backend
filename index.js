import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import dotenv from "dotenv";
dotenv.config();
const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, "/uploads")));
app.use(express.static(join(__dirname, "/pdfUploads")));

import connection from "./db/connection.js";

import adminRoutes from "./routes/adminRoutes.js";
import recordRoutes from "./routes/recordRoutes.js";
app.use("/record", recordRoutes);
app.use("/admin", adminRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "The Backend is Running",
  });
});

app.listen(process.env.PORT || 3000, async () => {
  console.log(`Server running on port ${process.env.PORT}`);
  try {
    await connection();
  } catch (error) {
    console.log(error);
  }
});
