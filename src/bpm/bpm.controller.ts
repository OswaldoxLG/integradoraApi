import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { BpmService } from './bpm.service';
import { CreateBpmDto } from './dto/create-bpm.dto';
import { UpdateBpmDto } from './dto/update-bpm.dto';

@Controller('bpm')
export class BpmController {
  constructor(private readonly bpmService: BpmService) {}

  @Post()
  create(@Body( new ValidationPipe() ) createBpmDto: CreateBpmDto) {
    return this.bpmService.create(createBpmDto);
  }

  @Get()
  findAll() {
    return this.bpmService.findAll();
  }

  @Get(':id_bpm')
  findOne(@Param('id_bpm') id_bpm: number) {
    return this.bpmService.findOne(id_bpm);
  }

  @Patch(':id_bpm')
  update(@Param('id_bpm') id_bpm: number, @Body( new ValidationPipe() ) updateBpmDto: UpdateBpmDto) {
    return this.bpmService.update(id_bpm, updateBpmDto);
  }

  @Delete(':id_bpm')
  remove(@Param('id_bpm') id_bpm: number) {
    return this.bpmService.remove(id_bpm);
  }
}
