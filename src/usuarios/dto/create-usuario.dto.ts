import { TipoUsuario } from '@prisma/client';

export class CreateUsuarioDto {
  nome: string;
  login: string;
  numeroCelular?: string;
  senha: string;
  tipoUsuario: TipoUsuario;
}

/* model Usuario {
  id                Int                @id @default(autoincrement())
  nome              String             @db.VarChar(255)
  login             String             @unique @db.VarChar(255) // Usando email como login
  numeroCelular     String?            @db.VarChar(20)
  senha             String             @db.VarChar(255)
  tipoUsuario       TipoUsuario
  dataCriacao       DateTime           @default(now())
  enderecosUsuarios EnderecosUsuario[]
  coletas           Coleta[]
} */
