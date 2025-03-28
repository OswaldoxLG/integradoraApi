import { Module } from '@nestjs/common';
import { BpmService } from './bpm.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bpm } from './entities/bpm.entity';
import { BpmController } from './bpm.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Bpm
    ]),
  ],
  controllers: [BpmController],
  providers: [BpmService],
})
export class BpmModule {}
