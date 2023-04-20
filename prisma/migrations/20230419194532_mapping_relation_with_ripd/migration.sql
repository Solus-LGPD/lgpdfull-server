/*
  Warnings:

  - Added the required column `mappingId` to the `ripd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mappingName` to the `ripd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ripd" ADD COLUMN     "mappingId" TEXT NOT NULL,
ADD COLUMN     "mappingName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ripd" ADD CONSTRAINT "ripd_mappingId_fkey" FOREIGN KEY ("mappingId") REFERENCES "data_mapping"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
