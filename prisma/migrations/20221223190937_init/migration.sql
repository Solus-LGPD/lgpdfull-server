-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "pass" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dpo" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "actual" BOOLEAN NOT NULL DEFAULT true,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "dpo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "process" (
    "id" TEXT NOT NULL,
    "dpo_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "operator" TEXT NOT NULL,
    "data_flow" TEXT NOT NULL,
    "controller" TEXT NOT NULL,
    "employee_sector" TEXT NOT NULL,

    CONSTRAINT "process_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory" (
    "id" TEXT NOT NULL,
    "dpo_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "reference_id" TEXT NOT NULL,
    "dpo_name" TEXT NOT NULL,
    "controller" TEXT NOT NULL,
    "operator" TEXT NOT NULL,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lyfe_cycle" (
    "id" SERIAL NOT NULL,
    "invt_id" TEXT NOT NULL,
    "collect" BOOLEAN NOT NULL,
    "store" BOOLEAN NOT NULL,
    "use" BOOLEAN NOT NULL,
    "share" BOOLEAN NOT NULL,
    "destroy" BOOLEAN NOT NULL,

    CONSTRAINT "lyfe_cycle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_flow_desc" (
    "id" SERIAL NOT NULL,
    "invt_id" TEXT NOT NULL,
    "collect" TEXT NOT NULL,
    "Store" TEXT NOT NULL,
    "use" TEXT NOT NULL,
    "share" TEXT NOT NULL,
    "destroy" TEXT NOT NULL,

    CONSTRAINT "data_flow_desc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_scope" (
    "id" TEXT NOT NULL,
    "invt_id" TEXT NOT NULL,
    "geographic_area" TEXT NOT NULL,
    "source" TEXT NOT NULL,

    CONSTRAINT "data_scope_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_finality" (
    "id" TEXT NOT NULL,
    "invt_id" TEXT NOT NULL,
    "case" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "goals" TEXT NOT NULL,
    "expected_profits" TEXT NOT NULL,
    "legal_forecast" TEXT NOT NULL,

    CONSTRAINT "data_finality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_treatment_info" (
    "id" TEXT NOT NULL,
    "invt_id" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "category_info" TEXT NOT NULL,
    "data_under_age" BOOLEAN NOT NULL,
    "data_vulnerable_group" BOOLEAN NOT NULL,

    CONSTRAINT "data_treatment_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_share" (
    "id" TEXT NOT NULL,
    "invt_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "data_share_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personal_data_category" (
    "id" TEXT NOT NULL,
    "invt_id" TEXT NOT NULL,
    "personal_data" TEXT,
    "financial_data" TEXT,
    "characater_data" TEXT,
    "habits_data" TEXT,
    "psicological_data" TEXT,
    "family_data" TEXT,
    "leisure_data" TEXT,
    "association_data" TEXT,
    "legal_data" TEXT,
    "consunption_data" TEXT,
    "residential_data" TEXT,
    "education_data" TEXT,

    CONSTRAINT "personal_data_category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "inventory_reference_id_key" ON "inventory"("reference_id");

-- CreateIndex
CREATE UNIQUE INDEX "lyfe_cycle_invt_id_key" ON "lyfe_cycle"("invt_id");

-- CreateIndex
CREATE UNIQUE INDEX "data_flow_desc_invt_id_key" ON "data_flow_desc"("invt_id");

-- CreateIndex
CREATE UNIQUE INDEX "data_scope_invt_id_key" ON "data_scope"("invt_id");

-- CreateIndex
CREATE UNIQUE INDEX "data_finality_invt_id_key" ON "data_finality"("invt_id");

-- CreateIndex
CREATE UNIQUE INDEX "data_treatment_info_invt_id_key" ON "data_treatment_info"("invt_id");

-- CreateIndex
CREATE UNIQUE INDEX "data_share_invt_id_key" ON "data_share"("invt_id");

-- CreateIndex
CREATE UNIQUE INDEX "personal_data_category_id_key" ON "personal_data_category"("id");

-- CreateIndex
CREATE UNIQUE INDEX "personal_data_category_invt_id_key" ON "personal_data_category"("invt_id");

-- AddForeignKey
ALTER TABLE "dpo" ADD CONSTRAINT "dpo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "process" ADD CONSTRAINT "process_dpo_id_fkey" FOREIGN KEY ("dpo_id") REFERENCES "dpo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_dpo_id_fkey" FOREIGN KEY ("dpo_id") REFERENCES "dpo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lyfe_cycle" ADD CONSTRAINT "lyfe_cycle_invt_id_fkey" FOREIGN KEY ("invt_id") REFERENCES "inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_flow_desc" ADD CONSTRAINT "data_flow_desc_invt_id_fkey" FOREIGN KEY ("invt_id") REFERENCES "inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_scope" ADD CONSTRAINT "data_scope_invt_id_fkey" FOREIGN KEY ("invt_id") REFERENCES "inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_finality" ADD CONSTRAINT "data_finality_invt_id_fkey" FOREIGN KEY ("invt_id") REFERENCES "inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_treatment_info" ADD CONSTRAINT "data_treatment_info_invt_id_fkey" FOREIGN KEY ("invt_id") REFERENCES "inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_share" ADD CONSTRAINT "data_share_invt_id_fkey" FOREIGN KEY ("invt_id") REFERENCES "inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personal_data_category" ADD CONSTRAINT "personal_data_category_invt_id_fkey" FOREIGN KEY ("invt_id") REFERENCES "inventory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
