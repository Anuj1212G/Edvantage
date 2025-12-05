import express from "express";
import { subscribeUser } from "../controllers/subscribeController.js";

const router = express.Router();

router.post("/", subscribeUser);
router.get("/test", (req, res) => {
  res.json({ ok: true, message: "Request-info API working" });
});

export default router;
