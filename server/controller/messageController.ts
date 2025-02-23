import { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import prisma from "../config/db";

export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) return res.status(401).json({ message: "Unauthorized" });

        const { receiver, content } = req.body;
        if (!receiver || !content) {
            return res.status(400).json({ message: "Receiver and content are required" });
        }

        const message = await prisma.message.create({
            data: {
                sender: userId,
                receiver,
                content,
                status: "sent",
            },
        });

        res.status(201).json(message);
    } catch (error) {
        console.error("Error in sendMessage:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getMessages = async (req: Request, res: Response) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) return res.status(401).json({ message: "Unauthorized" });

        const { chatUserId } = req.params;
        if (!chatUserId) {
            return res.status(400).json({ message: "Chat user ID is required" });
        }

        const messages = await prisma.message.findMany({
            where: {
                OR: [
                    { sender: userId, receiver: chatUserId },
                    { sender: chatUserId, receiver: userId },
                ],
            },
            orderBy: { timestamp: "asc" },
        });

        res.status(200).json(messages);
    } catch (error) {
        console.error("Error in getMessages:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

