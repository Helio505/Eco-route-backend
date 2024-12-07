import { StatusColeta, TipoColeta } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  IsDecimal,
  IsEnum,
} from 'class-validator';
import { MaxLength } from 'class-validator';

export class CreateDto {
  // usuarioId
  @IsInt()
  @IsNotEmpty()
  usuarioId: number;

  // dataColeta
  @IsString()
  @IsNotEmpty()
  dataColeta: string;

  // peso
  @IsDecimal()
  @IsNotEmpty()
  peso: number;

  // volume
  @IsDecimal()
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
