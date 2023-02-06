-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "social_name" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pass" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dpo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "social_name" TEXT NOT NULL,
    "actual" BOOLEAN NOT NULL DEFAULT true,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "dpo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_mapping" (
    "id" TEXT NOT NULL,
    "dpo_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "sectorId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "tag_name" TEXT NOT NULL,
    "source_data" TEXT NOT NULL,
    "colleted_data" TEXT NOT NULL,
    "reason_data" TEXT NOT NULL,
    "how_storage" TEXT NOT NULL,
    "security_data" TEXT NOT NULL,
    "deadline_data" TEXT NOT NULL,
    "justification" TEXT NOT NULL,
    "under_age_data" BOOLEAN NOT NULL,
    "sensitive_data" BOOLEAN NOT NULL,
    "controller" TEXT NOT NULL,

    CONSTRAINT "data_mapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sector" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "tag_name" TEXT NOT NULL,

    CONSTRAINT "sector_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "dpo" ADD CONSTRAINT "dpo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_mapping" ADD CONSTRAINT "data_mapping_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_mapping" ADD CONSTRAINT "data_mapping_dpo_id_fkey" FOREIGN KEY ("dpo_id") REFERENCES "dpo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_mapping" ADD CONSTRAINT "data_mapping_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "sector"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sector" ADD CONSTRAINT "sector_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
