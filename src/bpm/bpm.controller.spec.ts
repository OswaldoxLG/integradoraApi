import { Test, TestingModule } from '@nestjs/testing';
import { BpmController } from './bpm.controller';
import { BpmService } from './bpm.service';

describe('BpmController', () => {
  let controller: BpmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BpmController],
      providers: [BpmService],
    }).compile();

    controller = module.get<BpmController>(BpmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
