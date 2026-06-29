import prisma from "../prisma/prismaClient.js";

export const uploadFile = async (req, res) => {
  try {
    const { fieldname, originalname, path, size, mimetype } = req.file;
    const { FolderId } = req.body;

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

export const shareFile = async (req, res) => {
  const { fileId, email, permission } = req.body;
  const findUserByMail = await prisma.user.findUnique({
    where: { email: email },
  });
  if (!findUserByMail)
    return res.status(404).json({ message: "User not found" });
  if (req.userId === findUserByMail.id)
    return res.status(403).json({ message: "Can't shared with yourself" });
  try {
    const sharedData = await prisma.shared.create({
      data: {
        fileId: fileId,
        senderUserId: req.userId,
        receiverUserId: findUserByMail.id,
        createdAt: new Date(),
        permission: permission,
      },
    });
    return res.status(200).json({ message: sharedData });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const removeAccess = async (req, res) => {
  const { shareId } = req.body;

  try {
    const sharedData = await prisma.shared.delete({
      where: { id: shareId },
    });
    return res.status(200).json({ message: "Access removed successfully" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};


