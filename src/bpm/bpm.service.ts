import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bpm } from './entities/bpm.entity';
import { CreateBpmDto } from './dto/create-bpm.dto';
import { UpdateBpmDto } from './dto/update-bpm.dto';

@Injectable()
export class BpmService {

  constructor(
    @InjectRepository( Bpm )
    private bpmRepository: Repository<Bpm>
  ){}

  async create(createBpm: CreateBpmDto) {
    return await this.bpmRepository.save(createBpm);
  }

  async findAll() {
    return await this.bpmRepository.find();
  }

  async findOne(id_bpm: number) {
    return await this.bpmRepository.findBy({ id_bpm }) ;
  }

  update(id_bpm: number, updateBpmDto: UpdateBpmDto) {
    return `This action updates a #${id_bpm} bpm`;
  }

  remove(id_bpm: number) {
    return `This action removes a #${id_bpm} bpm`;
  }
}
