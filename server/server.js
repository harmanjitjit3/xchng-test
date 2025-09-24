import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import { connectToDB } from './db/connection1.db.js';
import authRoute from './routes/auth.routes.js';
import requestRoute from "./routes/request.routes.js";
import notificationRoute from "./routes/notification.routes.js";

const PORT = process.env.PORT;

connectToDB();

const app = express();

app.use(cors({
  // origin: process.env.CLIENT_URI,
  origin: ["http://localhost:5173", "http://192.168.1.5:5173"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Auth Routes
app.use("/api/v1/auth", authRoute);

// Request Routes
app.use("/api/v1/requests", requestRoute);

// Notifications Routes
app.use("/api/v1/notifications", notificationRoute);


app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
