-- CreateTable
CREATE TABLE "progression" (
    "id" TEXT NOT NULL,
    "arrayProgression" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "progression_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "progression" ADD CONSTRAINT "progression_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
