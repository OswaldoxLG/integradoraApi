import { IsString, MaxLength, MinLength, IsDateString, IsOptional, IsNumber  } from 'class-validator';
import { rolUsuario, sexoUsuario } from "../entities/user.entity";

export class CreateUserDto {

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
