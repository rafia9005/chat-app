import { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import Message from "../model/Message";

export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { userId } = getAuth(req);
        if (!userId) return res.status(401).json({ message: "Unauthorized" });

        const { receiver, content } = req.body;

        if (!receiver || !content) {
            return res.status(400).json({ message: "Receiver and content are required" });
        }

        const message = new Message({
            sender: userId,
            receiver, 
            content,
        });

        await message.save();
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

    const messages = await Message.find({
      $or: [
        { sender: userId, recipient: chatUserId },
        { sender: chatUserId, recipient: userId },
      ],
    }).sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
