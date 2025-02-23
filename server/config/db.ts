import mongoose from "mongoose";
import { ENV } from "../env";

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(ENV.MONGO_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

export default connectDB;
