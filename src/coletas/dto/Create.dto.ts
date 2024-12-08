import { StatusColeta, TipoColeta } from '@prisma/client';
import { IsString, IsNotEmpty, IsInt, IsNumber } from 'class-validator';

export class CreateDto {
  // usuarioId
  @IsInt()
  @IsNotEmpty()
  usuarioId: number;

  // peso
  @IsNumber()
  @IsNotEmpty()
  peso: number;

  // volume
  @IsNumber()
  @IsNotEmpty()
  volume: number;

  // enderecoId
  @IsInt()
  @IsNotEmpty()
  enderecoId: number;

  // status
  @IsString()
  @IsNotEmpty()
  status: StatusColeta;

  // tipo
  @IsString()
  @IsNotEmpty()
  tipo: TipoColeta;
}
