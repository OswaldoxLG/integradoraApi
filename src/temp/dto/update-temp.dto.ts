import { IsNumber, IsDateString } from "class-validator";

export class UpdateTempDto {
  
  @IsNumber()
  temp: number;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
