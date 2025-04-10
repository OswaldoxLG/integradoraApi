import { IsNumber, IsDateString } from "class-validator";

export class CreateGsrDto {

  @IsNumber()
  gsr: number;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
