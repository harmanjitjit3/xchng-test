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

const allowedOrigins = process.env.CLIENT_URI;

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],
  credentials: true,
};


app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Auth Routes
app.use("/api/v1/auth", authRoute);

// Request Routes
app.use("/api/v1/requests", requestRoute);

// Notifications Routes
app.use("/api/v1/notifications", notificationRoute);

app.get("/", (req, res) => {
  res.send("Backend is running....");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
