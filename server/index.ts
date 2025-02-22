import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import { requireAuth, getAuth, clerkMiddleware } from "@clerk/express";

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

app.get("/api", async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return res.json({ message: "Success", userId });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
