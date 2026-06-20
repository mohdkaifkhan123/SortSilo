import express from "express";
import dotenv from "dotenv";
import connectDB from "./connectdb.js";
import authRoutes from "./routes/authRoutes.js";
import prisma from "./prisma/prismaClient.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error", error: err.message });
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

app.listen(process.env.PORT, () => {
  console.log(
    "Server is running on port",
    process.env.PORT
  );
});