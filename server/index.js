import express from "express";
import dotenv from "dotenv";
import connectDB from "./connectdb.js";
import authRoutes from "./routes/authRoutes.js";
import prisma from "./prisma/prismaClient.js";
import fileRoutes from "./routes/fileRoutes.js";
import folderRoutes from "./routes/folderRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/folder", folderRoutes);
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error", error: err.message });
});

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
