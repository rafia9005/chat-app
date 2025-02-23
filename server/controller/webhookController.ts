import { Request, Response } from "express";
import prisma from "../config/db";

export const clerkWebhook = async (req: Request, res: Response) => {
    try {
        const event = req.body;
        console.log("Received Clerk Webhook:", event);

        if (!event || !event.data) {
            return res.status(400).json({ message: "Invalid webhook data" });
        }

        const { id, email_addresses, first_name, last_name, image_url } = event.data;

        const email = email_addresses?.[0]?.email_address;
        const name = `${first_name || ""} ${last_name || ""}`.trim();
        const avatar = image_url;

        const user = await prisma.user.upsert({
            where: { userId: id },
            update: { email, name, avatar },
            create: { userId: id, email, name, avatar },
        });

        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        console.error("Error processing webhook:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
