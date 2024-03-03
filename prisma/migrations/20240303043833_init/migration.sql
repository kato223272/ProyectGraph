-- CreateTable
CREATE TABLE "Personaje" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "descripcion" TEXT,
    "pago" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Capitulo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "sipnosis" TEXT NOT NULL,
    "pago" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Personaje_rol_key" ON "Personaje"("rol");
