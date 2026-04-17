const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        // Use the DATABASE_URL from Render environment variables
        const dbUrl = process.env.DATABASE_URL;
        
        if (!dbUrl) {
            console.error(" DATABASE_URL is not defined in environment variables");
            process.exit(1);
        }
        
        console.log("📡 Connecting to MongoDB Atlas...");
        await mongoose.connect(dbUrl);
        console.log(" MongoDB Connected Successfully!");
        
    } catch (error) {
        console.error(" MongoDB Connection Error:", error.message);
        // Don't exit process - let it retry
        setTimeout(connectDB, 5000);
    }
}

module.exports = connectDB