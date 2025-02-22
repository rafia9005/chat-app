import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { auth } from "./middleware";

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get("/protected", auth, (req, res) => {
  res.json({ message: "Protected route accessed!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
