/*
  Warnings:

  - Added the required column `notes` to the `Lieu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lieu" ADD COLUMN     "notes" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "imagepath" TEXT NOT NULL,
    "lieuId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_lieuId_fkey" FOREIGN KEY ("lieuId") REFERENCES "Lieu"("lieu_id") ON DELETE CASCADE ON UPDATE CASCADE;
