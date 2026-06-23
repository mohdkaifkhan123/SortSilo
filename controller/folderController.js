import prisma from "../prisma/prismaClient.js";

export const createFolder = async (req,res) => {
  const { folderName, parentId } = req.body;
    console.log("jhj",req.userId,folderName, parentId )

   if (parentId) {
      const parent = await prisma.folder.findUnique({ where: { id: parseInt(parentId) } });
      if (!parent || parent.UserId !== req.userId) {
        return res.status(403).json({ message: "Parent folder not found or unauthorized" });
      }
    }
  try {
    const finalRes = await prisma.folder.create({
      folderName: folderName,
      UserId: req.userId,
      parentId: parentId,
    });
    res.status(200).json({ finalRes });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
