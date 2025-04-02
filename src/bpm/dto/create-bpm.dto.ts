import { IsNumber, IsDateString } from "class-validator";
export class CreateBpmDto {

  @IsNumber()
  id_bpm: number;

  @IsNumber()
  bpm: number;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;

}
