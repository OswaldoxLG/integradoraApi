import { Module } from '@nestjs/common';
import { GsrService } from './gsr.service';
import { GsrController } from './gsr.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gsr } from './entities/gsr.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Gsr
    ]),
  ],
  controllers: [GsrController],
  providers: [GsrService],
})
export class GsrModule {}
