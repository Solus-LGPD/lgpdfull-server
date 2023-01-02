/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `inventory` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `process` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `process` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "inventory" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "process" ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "inventory_user_id_key" ON "inventory"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "process_user_id_key" ON "process"("user_id");

-- AddForeignKey
ALTER TABLE "process" ADD CONSTRAINT "process_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
