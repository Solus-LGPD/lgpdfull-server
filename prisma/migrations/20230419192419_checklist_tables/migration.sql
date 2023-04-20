/*
  Warnings:

  - Added the required column `phone` to the `dpo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "data_mapping" ADD COLUMN     "images" TEXT;

-- AlterTable
ALTER TABLE "dpo" ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "progression" ADD COLUMN     "status" BOOLEAN DEFAULT true;

-- CreateTable
CREATE TABLE "ripd" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "dpoName" TEXT NOT NULL,
    "justification" TEXT NOT NULL,
    "colletedData" TEXT NOT NULL,
    "sourceData" TEXT NOT NULL,
    "controller" TEXT NOT NULL,
    "securityData" TEXT NOT NULL,
    "deadlineData" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "ripd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lia" (
    "id" TEXT NOT NULL,
    "liaQuestions" TEXT NOT NULL,
    "justification" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "deadlineData" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "dpoName" TEXT NOT NULL,
    "controller" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dpoId" TEXT NOT NULL,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "lia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "incidents" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "dpoName" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dpoId" TEXT NOT NULL,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "incidents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "access_control" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "check1" TEXT,
    "check2" TEXT,
    "check3" TEXT,
    "check4" TEXT,
    "check5" TEXT,
    "check6" TEXT,
    "check7" TEXT,
    "check8" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "access_control_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "storage_data" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "check1" TEXT,
    "check2" TEXT,
    "check3" TEXT,
    "check4" TEXT,
    "check5" TEXT,
    "check6" TEXT,
    "check7" TEXT,
    "check8" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "storage_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comunication_security" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "check1" TEXT,
    "check2" TEXT,
    "check3" TEXT,
    "check4" TEXT,
    "check5" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "comunication_security_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vunerability_management" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "check1" TEXT,
    "check2" TEXT,
    "check3" TEXT,
    "check4" TEXT,
    "check5" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "vunerability_management_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mobile_devices" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "check1" TEXT,
    "check2" TEXT,
    "check3" TEXT,
    "check4" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "mobile_devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cloud_service" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "check1" TEXT,
    "check2" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "cloud_service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cookies" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "check1" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "cookies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "security_policy" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "check1" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "security_policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "training" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "check1" TEXT,
    "check2" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contracts" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "check1" TEXT,
    "check2" TEXT,
    "check3" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "contracts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ripd" ADD CONSTRAINT "ripd_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lia" ADD CONSTRAINT "lia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lia" ADD CONSTRAINT "lia_dpoId_fkey" FOREIGN KEY ("dpoId") REFERENCES "dpo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "incidents" ADD CONSTRAINT "incidents_dpoId_fkey" FOREIGN KEY ("dpoId") REFERENCES "dpo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "access_control" ADD CONSTRAINT "access_control_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "storage_data" ADD CONSTRAINT "storage_data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunication_security" ADD CONSTRAINT "comunication_security_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vunerability_management" ADD CONSTRAINT "vunerability_management_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mobile_devices" ADD CONSTRAINT "mobile_devices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cloud_service" ADD CONSTRAINT "cloud_service_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cookies" ADD CONSTRAINT "cookies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "security_policy" ADD CONSTRAINT "security_policy_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "training" ADD CONSTRAINT "training_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contracts" ADD CONSTRAINT "contracts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
