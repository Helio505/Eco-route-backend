import { StatusColeta, TipoColeta } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  IsNumber,
} from 'class-validator';

export class UpdateDto {
  // usuarioId
  @IsInt()
  @IsOptional()
  usuarioId: number;

  // dataColeta
  @IsString()
  @IsOptional()
  dataColeta: string;

  // peso
  @IsNumber()
  @IsOptional()
  peso: number;

  // volume
  @IsNumber()
  @IsOptional()
  volume: number;

  // enderecoId
  @IsInt()
  @IsOptional()
  enderecoId: number;

  // status
  @IsString()
  @IsOptional()
  status: StatusColeta;

  // tipo
  @IsString()
  @IsOptional()
  tipo: TipoColeta;
}
