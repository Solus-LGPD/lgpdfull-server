/*
  Warnings:

  - The primary key for the `data_flow_desc` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Store` on the `data_flow_desc` table. All the data in the column will be lost.
  - The primary key for the `lyfe_cycle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `store` to the `data_flow_desc` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "personal_data_category_id_key";

-- AlterTable
ALTER TABLE "data_flow_desc" DROP CONSTRAINT "data_flow_desc_pkey",
DROP COLUMN "Store",
ADD COLUMN     "store" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "data_flow_desc_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "data_flow_desc_id_seq";

-- AlterTable
ALTER TABLE "lyfe_cycle" DROP CONSTRAINT "lyfe_cycle_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "lyfe_cycle_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "lyfe_cycle_id_seq";
