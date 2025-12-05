import express from "express";
import { submitRequestInfo } from "../controllers/requestInfoController.js";

const router = express.Router();

router.post("/submit", submitRequestInfo);

export default router;
