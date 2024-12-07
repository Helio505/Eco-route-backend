-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('cidadao', 'gestor');

-- CreateEnum
CREATE TYPE "StatusColeta" AS ENUM ('pendente', 'emRota', 'concluida', 'cancelada');

-- CreateEnum
CREATE TYPE "TipoColeta" AS ENUM ('papel', 'metal', 'vidro', 'plastico', 'lixoEletronico', 'lixoOrganico');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "login" VARCHAR(255) NOT NULL,
    "numeroCelular" VARCHAR(20),
    "senha" VARCHAR(255) NOT NULL,
    "tipoUsuario" "TipoUsuario" NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnderecosUsuario" (
    "id" SERIAL NOT NULL,
    "rua" VARCHAR(255) NOT NULL,
    "numero" INTEGER,
    "complemento" VARCHAR(255),
    "bairro" VARCHAR(255) NOT NULL,
    "cidade" VARCHAR(255) NOT NULL,
    "estado" VARCHAR(255) NOT NULL,
    "cep" VARCHAR(9) NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "EnderecosUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnderecosLocal" (
    "id" SERIAL NOT NULL,
    "rua" VARCHAR(255) NOT NULL,
    "numero" INTEGER,
    "complemento" VARCHAR(255),
    "bairro" VARCHAR(255) NOT NULL,
    "cidade" VARCHAR(255) NOT NULL,
    "estado" VARCHAR(255) NOT NULL,
    "cep" VARCHAR(9) NOT NULL,

    CONSTRAINT "EnderecosLocal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coleta" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "dataColeta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "peso" DOUBLE PRECISION NOT NULL,
    "volume" DOUBLE PRECISION NOT NULL,
    "enderecoId" INTEGER NOT NULL,
    "status" "StatusColeta" NOT NULL,
    "tipo" "TipoColeta" NOT NULL,

    CONSTRAINT "Coleta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_login_key" ON "Usuario"("login");

-- AddForeignKey
ALTER TABLE "EnderecosUsuario" ADD CONSTRAINT "EnderecosUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coleta" ADD CONSTRAINT "Coleta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coleta" ADD CONSTRAINT "Coleta_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "EnderecosLocal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
