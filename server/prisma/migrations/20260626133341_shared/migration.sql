-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('VIEWER', 'EDITOR');

-- CreateTable
CREATE TABLE "Shared" (
    "id" SERIAL NOT NULL,
    "fileId" INTEGER,
    "senderUserId" INTEGER NOT NULL,
    "receiverUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3),
    "permission" "Permission" NOT NULL,

    CONSTRAINT "Shared_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shared" ADD CONSTRAINT "Shared_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shared" ADD CONSTRAINT "Shared_senderUserId_fkey" FOREIGN KEY ("senderUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shared" ADD CONSTRAINT "Shared_receiverUserId_fkey" FOREIGN KEY ("receiverUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
