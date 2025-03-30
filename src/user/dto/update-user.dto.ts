import { IsString, MaxLength, MinLength, IsDateString, IsOptional, IsNumber  } from 'class-validator';
import { rolUsuario, sexoUsuario } from "../entities/user.entity";

export class UpdateUserDto {

  @IsString()
  @IsOptional()
  rol: rolUsuario;

  @IsString()
  @IsOptional()
  username: string;

  @IsString()
  @IsOptional()
  name: string;
  
  @IsString()
  @IsOptional()
  lastname: string;
  
  @IsString()
  @IsOptional()
  sex: sexoUsuario;
  
  @IsString()
  @MaxLength(255)
  @MinLength(6)
  @IsOptional()
  email: string;

  @IsString()
  @MaxLength(255)
  @MinLength(6)
  @IsOptional()
  password: string;
  
  @IsString()
  @IsOptional()
  phone: string;

  @IsNumber()
  @IsOptional()
  activo: number;
  
  @IsDateString()
  @IsOptional()
  created_at: Date;
  
  @IsDateString()
  @IsOptional()
  updated_at: Date;

  @IsString()
  @IsOptional()
  image: string;
}