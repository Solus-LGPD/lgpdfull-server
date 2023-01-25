/*
  Warnings:

  - Added the required column `natural_person` to the `dpo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dpo" ADD COLUMN     "natural_person" BOOLEAN NOT NULL;
