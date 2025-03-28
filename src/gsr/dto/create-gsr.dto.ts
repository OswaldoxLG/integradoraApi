import { IsNumber, IsDateString } from "class-validator";

export class CreateGsrDto {
  @IsNumber()
  id_gsr: number;

  @IsNumber()
  gsr: number;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
