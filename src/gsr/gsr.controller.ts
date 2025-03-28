import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GsrService } from './gsr.service';
import { CreateGsrDto } from './dto/create-gsr.dto';
import { UpdateGsrDto } from './dto/update-gsr.dto';

@Controller('gsr')
export class GsrController {
  constructor(private readonly gsrService: GsrService) {}

  @Post()
  create(@Body() createGsrDto: CreateGsrDto) {
    return this.gsrService.create(createGsrDto);
  }

  @Get()
  findAll() {
    return this.gsrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gsrService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGsrDto: UpdateGsrDto) {
    return this.gsrService.update(+id, updateGsrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gsrService.remove(+id);
  }
}
