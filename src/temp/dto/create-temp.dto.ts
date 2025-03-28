import { IsNumber, IsDateString } from "class-validator";

export class CreateTempDto {
  @IsNumber()
  id_temp: number;

  @IsNumber()
  temp: number;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
