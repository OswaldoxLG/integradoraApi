import { IsNumber, IsDateString } from "class-validator";
export class CreateBpmDto {

  @IsNumber()
  bpm: number;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;

}
