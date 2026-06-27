-- AlterTable
ALTER TABLE "Shared" ADD COLUMN     "folderId" INTEGER;

-- AddForeignKey
ALTER TABLE "Shared" ADD CONSTRAINT "Shared_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
