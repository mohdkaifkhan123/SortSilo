import prisma from "../prisma/prismaClient.js";

export const uploadFile = async (req, res) => {
  try {
    console.log("sfdfghjk");
    const { fieldname, originalname, path, size, mimetype } = req.file;
    const { FolderId } = req.body;
    console.log(req.body);
    console.log(
      "File uploaded:",
      fieldname,
      originalname,
      path,
      size,
      FolderId,
    );
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
        FolderId: parseInt(FolderId),
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

export const getFile = async (req, res) => {
  try {
    const userId = req.userId;
    const fileList = await prisma.file.findMany({
      where: { UserId: userId },
    });
    return res.status(200).json({ message: "Files retrieved", fileList });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
export const deleteFile = async (req, res) => {
  try {
    const fileId = req.params.id;
    await prisma.file.update({
      where: { id: parseInt(fileId) },
      data: { deletedAt: new Date() },
    });
    return res.status(200).json({ message: "File deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
