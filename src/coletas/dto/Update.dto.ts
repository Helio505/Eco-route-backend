import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';
import { MaxLength } from 'class-validator';
/* export class CreateDto {
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
 */
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
  @IsInt()
  @IsOptional()
  peso: number;

  // volume
  @IsInt()
  @IsOptional()
  volume: number;

  // enderecoId
  @IsInt()
  @IsOptional()
  enderecoId: number;

  // status
  @IsString()
  @IsOptional()
  status: string;

  // tipo
  @IsString()
  @IsOptional()
  tipo: string;
}
