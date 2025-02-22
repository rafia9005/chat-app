import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import webhookRoutes from "./routes/webhookRoutes";
import messageRoutes from "./routes/messageRoutes";
import connectDB from "./config/db";

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

connectDB();

app.use("/api/messages", messageRoutes);
app.use("/api/webhooks", webhookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
