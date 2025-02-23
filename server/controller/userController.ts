import { Request, Response } from "express";
import prisma from "../config/db";

export const findUserByClerkId = async (req: Request, res: Response) => {
    try {
        const { clerkId } = req.params;
        if (!clerkId) {
            return res.status(400).json({ message: "Clerk ID is required" });
        }

        const user = await prisma.user.findUnique({
            where: { userId: clerkId },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("❌ Error finding user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

