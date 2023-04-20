/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `progression` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "progression_userId_key" ON "progression"("userId");
