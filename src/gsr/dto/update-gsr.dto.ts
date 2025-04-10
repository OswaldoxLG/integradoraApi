import { IsNumber, IsDateString } from "class-validator";

export class UpdateGsrDto {

  @IsNumber()
  gsr: number;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
