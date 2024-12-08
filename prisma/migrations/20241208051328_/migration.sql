-- DropForeignKey
ALTER TABLE "Coleta" DROP CONSTRAINT "Coleta_enderecoId_fkey";

-- DropForeignKey
ALTER TABLE "Coleta" DROP CONSTRAINT "Coleta_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "EnderecosUsuario" DROP CONSTRAINT "EnderecosUsuario_usuarioId_fkey";

-- AddForeignKey
ALTER TABLE "EnderecosUsuario" ADD CONSTRAINT "EnderecosUsuario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coleta" ADD CONSTRAINT "Coleta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coleta" ADD CONSTRAINT "Coleta_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "EnderecosLocal"("id") ON DELETE CASCADE ON UPDATE CASCADE;
