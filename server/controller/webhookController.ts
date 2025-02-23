import { Request, Response } from "express";
import User from "../model/User";

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

        let user = await User.findOne({ clerkId: id });

        if (!user) {
            user = new User({ userId: id, email, name, avatar });
        } else {
            user.email = email;
            user.name = name;
            user.avatar = avatar;
        }

        await user.save();
        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        console.error("Error processing webhook:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
