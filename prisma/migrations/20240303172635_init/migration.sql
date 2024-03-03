/*
  Warnings:

  - The primary key for the `Personaje` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Capitulo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `webhook` to the `Capitulo` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "_CapituloToPersonaje" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CapituloToPersonaje_A_fkey" FOREIGN KEY ("A") REFERENCES "Capitulo" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CapituloToPersonaje_B_fkey" FOREIGN KEY ("B") REFERENCES "Personaje" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Personaje" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "descripcion" TEXT,
    "pago" INTEGER NOT NULL
);
INSERT INTO "new_Personaje" ("descripcion", "id", "nombre", "pago", "rol") SELECT "descripcion", "id", "nombre", "pago", "rol" FROM "Personaje";
DROP TABLE "Personaje";
ALTER TABLE "new_Personaje" RENAME TO "Personaje";
CREATE UNIQUE INDEX "Personaje_rol_key" ON "Personaje"("rol");
CREATE TABLE "new_Capitulo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "sipnosis" TEXT NOT NULL,
    "pago" TEXT NOT NULL,
    "webhook" TEXT NOT NULL
);
INSERT INTO "new_Capitulo" ("id", "nombre", "pago", "sipnosis") SELECT "id", "nombre", "pago", "sipnosis" FROM "Capitulo";
DROP TABLE "Capitulo";
ALTER TABLE "new_Capitulo" RENAME TO "Capitulo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_CapituloToPersonaje_AB_unique" ON "_CapituloToPersonaje"("A", "B");

-- CreateIndex
CREATE INDEX "_CapituloToPersonaje_B_index" ON "_CapituloToPersonaje"("B");
