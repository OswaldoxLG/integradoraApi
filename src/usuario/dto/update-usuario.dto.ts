import { IsString, MaxLength, MinLength, IsDateString, IsOptional  } from 'class-validator';
import { rolUsuario, sexoUsuario } from '../entities/usuario.entity';
export class UpdateUsuarioDto {
  
  @IsString()
  @IsOptional()
  username: string;

  @IsString()
  @IsOptional()
  nombre: string;

  @IsString()
  @IsOptional()
  app: string;

  @IsString()
  @IsOptional()
  apm: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @MaxLength(255)
  @MinLength(6)
  @IsOptional()
  pass: string;

  @IsString()
  @IsOptional()
  sexo: sexoUsuario;

  @IsString()
  @IsDateString()
  @IsOptional()
  fecha_nac: Date;

  @IsString()
  @IsOptional()
  telefono: string;

  @IsString()
  @IsOptional()
  rol: rolUsuario;

  @IsString()
  @IsOptional()
  imagenPerfil: string;
}

