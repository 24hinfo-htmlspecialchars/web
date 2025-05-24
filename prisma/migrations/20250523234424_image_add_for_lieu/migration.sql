/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_lieuId_fkey";

-- DropTable
DROP TABLE "Image";

-- CreateTable
CREATE TABLE "ImageLieu" (
    "id" TEXT NOT NULL,
    "imagepath" TEXT NOT NULL,
    "lieuId" TEXT NOT NULL,

    CONSTRAINT "ImageLieu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageLieu" ADD CONSTRAINT "ImageLieu_lieuId_fkey" FOREIGN KEY ("lieuId") REFERENCES "Lieu"("lieu_id") ON DELETE CASCADE ON UPDATE CASCADE;
