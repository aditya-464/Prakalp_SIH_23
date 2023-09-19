import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js"
import { resendOTP, signupAdmin } from "./controllers/auth.js";

dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json({
    limit: "10mb",
    extended: true
}));
app.use(express.urlencoded({
    limit: "10mb",
    extended: true
}));
app.use(cors());
// app.use("/auth", authRoutes);

app.post("/signup/admin",signupAdmin);
app.patch("/resendOTP", resendOTP);



// Starting the server and connection with database
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI).then(() => {
    console.log("Connection with database is Successful!");
}).catch((e) => {
    console.log(e);
})
app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
})