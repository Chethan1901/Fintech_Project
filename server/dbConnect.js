import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://m001-student:12345@sandbox.merrw3s.mongodb.net/sahulatTest")
        console.log("Mongo DB is Connected");
    } catch (error) {
        console.log(error);
    }
}

connectDB();