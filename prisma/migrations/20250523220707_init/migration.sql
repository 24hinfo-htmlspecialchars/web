-- CreateTable
CREATE TABLE "Theme" (
    "theme_id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("theme_id")
);

-- CreateTable
CREATE TABLE "Lieu" (
    "lieu_id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "audioia" TEXT,

    CONSTRAINT "Lieu_pkey" PRIMARY KEY ("lieu_id")
);

-- CreateTable
CREATE TABLE "Lien" (
    "lien_id" TEXT NOT NULL,
    "lien" TEXT NOT NULL,

    CONSTRAINT "Lien_pkey" PRIMARY KEY ("lien_id")
);

-- CreateTable
CREATE TABLE "Paragaphe" (
    "paragaphe_id" TEXT NOT NULL,
    "description_md" TEXT NOT NULL,

    CONSTRAINT "Paragaphe_pkey" PRIMARY KEY ("paragaphe_id")
);

-- CreateTable
CREATE TABLE "ThemeDe" (
    "idTheme" TEXT NOT NULL,
    "idLieu" TEXT NOT NULL,

    CONSTRAINT "ThemeDe_pkey" PRIMARY KEY ("idTheme","idLieu")
);

-- CreateTable
CREATE TABLE "LienExterneDe" (
    "idLien" TEXT NOT NULL,
    "idLieu" TEXT NOT NULL,

    CONSTRAINT "LienExterneDe_pkey" PRIMARY KEY ("idLien","idLieu")
);

-- CreateTable
CREATE TABLE "ParagrapheDe" (
    "idParagraphe" TEXT NOT NULL,
    "idLieu" TEXT NOT NULL,

    CONSTRAINT "ParagrapheDe_pkey" PRIMARY KEY ("idParagraphe","idLieu")
);

-- CreateTable
CREATE TABLE "FavorisDe" (
    "userId" TEXT NOT NULL,
    "lieuId" TEXT NOT NULL,

    CONSTRAINT "FavorisDe_pkey" PRIMARY KEY ("userId","lieuId")
);

-- AddForeignKey
ALTER TABLE "ThemeDe" ADD CONSTRAINT "ThemeDe_idTheme_fkey" FOREIGN KEY ("idTheme") REFERENCES "Theme"("theme_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThemeDe" ADD CONSTRAINT "ThemeDe_idLieu_fkey" FOREIGN KEY ("idLieu") REFERENCES "Lieu"("lieu_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LienExterneDe" ADD CONSTRAINT "LienExterneDe_idLien_fkey" FOREIGN KEY ("idLien") REFERENCES "Lien"("lien_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LienExterneDe" ADD CONSTRAINT "LienExterneDe_idLieu_fkey" FOREIGN KEY ("idLieu") REFERENCES "Lieu"("lieu_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParagrapheDe" ADD CONSTRAINT "ParagrapheDe_idParagraphe_fkey" FOREIGN KEY ("idParagraphe") REFERENCES "Paragaphe"("paragaphe_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParagrapheDe" ADD CONSTRAINT "ParagrapheDe_idLieu_fkey" FOREIGN KEY ("idLieu") REFERENCES "Lieu"("lieu_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavorisDe" ADD CONSTRAINT "FavorisDe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavorisDe" ADD CONSTRAINT "FavorisDe_lieuId_fkey" FOREIGN KEY ("lieuId") REFERENCES "Lieu"("lieu_id") ON DELETE CASCADE ON UPDATE CASCADE;
