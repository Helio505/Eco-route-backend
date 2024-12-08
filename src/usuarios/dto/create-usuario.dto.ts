import { TipoUsuario } from '@prisma/client';
import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  numeroCelular?: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsString()
  @IsNotEmpty()
  tipoUsuario: TipoUsuario;
}
