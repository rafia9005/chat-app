import express from "express";
import { clerkWebhook } from "../controller/webhookController";

const router = express.Router();

router.post("/clerk-webhook", clerkWebhook);

export default router;
