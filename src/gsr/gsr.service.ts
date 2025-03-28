import { Injectable } from '@nestjs/common';
import { CreateGsrDto } from './dto/create-gsr.dto';
import { UpdateGsrDto } from './dto/update-gsr.dto';

@Injectable()
export class GsrService {
  create(createGsrDto: CreateGsrDto) {
    return 'This action adds a new gsr';
  }

  findAll() {
    return `This action returns all gsr`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gsr`;
  }

  update(id: number, updateGsrDto: UpdateGsrDto) {
    return `This action updates a #${id} gsr`;
  }

  remove(id: number) {
    return `This action removes a #${id} gsr`;
  }
}
