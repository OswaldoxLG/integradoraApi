import { IsString, MaxLength, MinLength, IsDateString, IsOptional, IsNumber  } from 'class-validator';
import { rolUsuario, sexoUsuario } from "../entities/user.entity";

export class UpdateUserDto {

  @IsString()
  rol: rolUsuario;

  @IsString()
  username: string;

  @IsString()
  name: string;
  
  @IsString()
  lastname: string;
  
  @IsString()
  @IsOptional()
  sex: sexoUsuario;
  
  @IsString()
  @MaxLength(255)
  @MinLength(6)
  email: string;

  @IsString()
  @MaxLength(255)
  @MinLength(6)
  password: string;
  
  @IsString()
  @IsOptional()
  phone: string;

  @IsNumber()
  @IsOptional()
  activo: number;
  
  @IsOptional()
  @IsDateString()
  created_at: Date;
  
  @IsOptional()
  @IsDateString()
  updated_at: Date;

  @IsString()
  @IsOptional()
  image: string;
}