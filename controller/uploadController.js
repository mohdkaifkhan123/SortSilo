import prisma from "../prisma/prismaClient.js";

export const uploadFile = async (req, res) => {
  try {
    const { fieldname, originalname, path, size,mimetype } = req.file;
    console.log("File uploaded:", fieldname, originalname, path, size);
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const file = await prisma.file.create({
      data: {
        fileName: originalname,
        fileUrl: path,
        fileSize: size,
        UserId: req.userId,
        mimetype: mimetype,
      },
      include: {
        user: true,
      },
    });
    return res.status(200).json({ message: "File saved successfully", file });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
