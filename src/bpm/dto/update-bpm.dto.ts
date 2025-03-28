import { IsNumber, IsDateString } from "class-validator";
export class UpdateBpmDto {

  @IsNumber()
  id_bpm: number;

  @IsNumber()
  bmp: number;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;

}
