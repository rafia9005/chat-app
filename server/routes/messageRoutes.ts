import express from "express";
import { getMessages, sendMessage } from "../controller/messageController";
import { auth } from "../middleware";

const router = express.Router();

router.post("/", auth, sendMessage);
router.get("/:chatUserId", auth, getMessages);

export default router;
