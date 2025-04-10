import { IsNumber, IsDateString } from "class-validator";

export class CreateTempDto {
  @IsNumber()
  temp: number;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
