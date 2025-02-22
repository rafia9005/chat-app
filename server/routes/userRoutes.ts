import express from "express";
import { findUserByClerkId } from "../controller/userController";

const router = express.Router();

router.get("/:clerkId", findUserByClerkId);

export default router;
