import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
    sender: string;
    receiver: string;
    content: string;
    timestamp: Date;
    status: "sent" | "delivered" | "read";
}

const MessageSchema: Schema = new Schema(
    {
        sender: { type: String, required: true },
        receiver: { type: String, required: true },
        content: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
        status: { type: String, enum: ["sent", "delivered", "read"], default: "sent" },
    },
    { timestamps: true }
);

export default mongoose.model<IMessage>("Message", MessageSchema);

