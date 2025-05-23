/*
  Warnings:

  - The primary key for the `Lien` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `lien_id` on the `Lien` table. All the data in the column will be lost.
  - You are about to drop the column `audioia` on the `Lieu` table. All the data in the column will be lost.
  - You are about to drop the `LienExterneDe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Paragaphe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ParagrapheDe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ThemeDe` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[audioId]` on the table `Lieu` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Lien` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `lieuId` to the `Lien` table without a default value. This is not possible if the table is not empty.
  - Added the required column `themeId` to the `Lieu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Lieu` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LienExterneDe" DROP CONSTRAINT "LienExterneDe_idLien_fkey";

-- DropForeignKey
ALTER TABLE "LienExterneDe" DROP CONSTRAINT "LienExterneDe_idLieu_fkey";

-- DropForeignKey
ALTER TABLE "ParagrapheDe" DROP CONSTRAINT "ParagrapheDe_idLieu_fkey";

-- DropForeignKey
ALTER TABLE "ParagrapheDe" DROP CONSTRAINT "ParagrapheDe_idParagraphe_fkey";

-- DropForeignKey
ALTER TABLE "ThemeDe" DROP CONSTRAINT "ThemeDe_idLieu_fkey";

-- DropForeignKey
ALTER TABLE "ThemeDe" DROP CONSTRAINT "ThemeDe_idTheme_fkey";

-- AlterTable
ALTER TABLE "Lien" DROP CONSTRAINT "Lien_pkey",
DROP COLUMN "lien_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "lieuId" TEXT NOT NULL,
ADD CONSTRAINT "Lien_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Lieu" DROP COLUMN "audioia",
ADD COLUMN     "audioId" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "themeId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "LienExterneDe";

-- DropTable
DROP TABLE "Paragaphe";

-- DropTable
DROP TABLE "ParagrapheDe";

-- DropTable
DROP TABLE "ThemeDe";

-- CreateTable
CREATE TABLE "Audioia" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Audioia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paragraphe" (
    "id" TEXT NOT NULL,
    "description_md" TEXT NOT NULL,
    "lieuId" TEXT NOT NULL,

    CONSTRAINT "Paragraphe_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lieu_audioId_key" ON "Lieu"("audioId");

-- AddForeignKey
ALTER TABLE "Lieu" ADD CONSTRAINT "Lieu_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("theme_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lieu" ADD CONSTRAINT "Lieu_audioId_fkey" FOREIGN KEY ("audioId") REFERENCES "Audioia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lien" ADD CONSTRAINT "Lien_lieuId_fkey" FOREIGN KEY ("lieuId") REFERENCES "Lieu"("lieu_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paragraphe" ADD CONSTRAINT "Paragraphe_lieuId_fkey" FOREIGN KEY ("lieuId") REFERENCES "Lieu"("lieu_id") ON DELETE CASCADE ON UPDATE CASCADE;
