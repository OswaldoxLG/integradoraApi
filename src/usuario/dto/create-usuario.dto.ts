import { IsString, MaxLength, MinLength, IsDateString, IsOptional, IsNumber  } from 'class-validator';
import { rolUsuario, sexoUsuario } from '../entities/usuario.entity';
export class CreateUsuarioDto {
  
  @IsString()
  username: string;

  @IsString()
  nombre: string;

  @IsString()
  app: string;

  @IsString()
  apm: string;

  @IsString()
  email: string;

  @IsString()
  @MaxLength(255)
  @MinLength(6)
  pass: string;

  @IsString()
  sexo: sexoUsuario;

  @IsString()
  @IsDateString()
  fecha_nac: Date;

  @IsString()
  telefono: string;

  @IsString()
  rol: rolUsuario;

  @IsString()
  @IsOptional()
  imagenPerfil: string;
}
