-- CreateTable
CREATE TABLE "Personaje" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "descripcion" TEXT,
    "pago" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Capitulo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "sipnosis" TEXT NOT NULL,
    "pago" TEXT NOT NULL,
    "numCap" TEXT NOT NULL,
    "webhook" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CapituloToPersonaje" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CapituloToPersonaje_A_fkey" FOREIGN KEY ("A") REFERENCES "Capitulo" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CapituloToPersonaje_B_fkey" FOREIGN KEY ("B") REFERENCES "Personaje" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Personaje_rol_key" ON "Personaje"("rol");

-- CreateIndex
CREATE UNIQUE INDEX "_CapituloToPersonaje_AB_unique" ON "_CapituloToPersonaje"("A", "B");

-- CreateIndex
CREATE INDEX "_CapituloToPersonaje_B_index" ON "_CapituloToPersonaje"("B");
